import { useRouter } from "next/router"
import React, { ReactNode, useEffect, useState } from "react"
import { GPTWindow } from "./type"

const AdsContext = React.createContext({
    transitioning: false,
    loadAds: (
        id: string,
        adUnit: string,
        sizes: number[][],
        sizeMapping: {
            viewport: googletag.SingleSizeArray
            sizes: googletag.GeneralSize
        }[]
    ) => {},
})

export default function AdsProvider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const [googletag, setGoogleTag] = useState<googletag.Googletag | null>(null)

    const [transitioning, setTransitioning] = useState(false)

    useEffect(() => {
        const gptObject = (window as GPTWindow)?.googletag

        setGoogleTag(gptObject)
    }, [])

    useEffect(() => {
        const handleStart = () => {
            setTransitioning(true)

            if (googletag && googletag.apiReady) {
                googletag?.destroySlots()
            }
        }

        const handleComplete = () => {
            setTransitioning(false)
        }

        router.events.on("routeChangeStart", handleStart)
        router.events.on("routeChangeComplete", handleComplete)

        return () => {
            router.events.off("routeChangeStart", handleStart)
            router.events.off("routeChangeComplete", handleComplete)
        }
    }, [googletag, router.events])

    const loadAds = (
        id: string,
        adUnit: string,
        sizes: number[][],
        sizeMapping: {
            viewport: googletag.SingleSizeArray
            sizes: googletag.GeneralSize
        }[]
    ) => {
        console.log("loadAds runs 0")

        if (googletag) {
            console.log("loadAds runs")
            googletag.cmd.push(function () {
                const currentSlots = googletag.pubads().getSlots()

                const isSlotDefined = currentSlots.some(
                    ({ getSlotElementId }) => getSlotElementId() === id
                )

                if (isSlotDefined) return

                const slot = googletag.defineSlot(adUnit, sizes, id)

                if (!slot) return

                slot.addService(googletag.pubads())

                if (sizeMapping) {
                    const mapping = googletag.sizeMapping()

                    sizeMapping.forEach(item => {
                        mapping?.addSize(item.viewport, item.sizes)
                    })
                    const mappingArray = mapping.build()

                    slot.defineSizeMapping(mappingArray)
                }

                googletag.pubads()
                googletag.enableServices()

                googletag.display(slot)
            })
        }
    }

    return (
        <AdsContext.Provider value={{ transitioning, loadAds }}>
            {children}
        </AdsContext.Provider>
    )
}


export const useAdsContext = () => {
	const context = React.useContext(AdsContext)

	if (context === undefined) {
		throw new Error("useAdsContext must be used within a AdsProvider")
	}

	return context
}