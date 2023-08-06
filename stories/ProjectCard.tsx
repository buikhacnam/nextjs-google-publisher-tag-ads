import React from "react"
import Link from "next/link"

interface ProjectCardProps {
    title: string
    subTitle: string
    action?: React.ReactNode
    cardWidth?: number
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="rounded border-solid border decoration-[#D2D2D2] px-2.5 py-2.5">
            <div className='flex justify-between items-center'>

            <h2
                className="font-normal text-xl decoration-[#212529]
"
            >
                {props.title}
            </h2>
            <button className="bg-[#F9FAFB]  py-1 px-4 rounded text-sm">
                View
            </button>
            </div>
            <p className="text-sm">{props.subTitle}</p>
            
            
        </div>
    )
}
