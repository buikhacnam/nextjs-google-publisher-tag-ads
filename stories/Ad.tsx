import { useAdsContext } from "@/context/AdsProvider"
import React, { useContext, useEffect } from "react"

interface AdProps {
    id: string,
    adUnit: string,
    sizes: number[][],
    sizeMapping: {
        viewport: googletag.SingleSizeArray
        sizes: googletag.GeneralSize
    }[]
}

export const Ad = ({ id, adUnit, sizes, sizeMapping }: AdProps) => {
    const { transitioning, loadAds } = useAdsContext()

    useEffect(() => {
        if (transitioning) return

        loadAds(id, adUnit, sizes, sizeMapping)
    }, [transitioning, loadAds, id, adUnit, sizes, sizeMapping])

    return <div id={id} data-cy="Ad"/>
}
