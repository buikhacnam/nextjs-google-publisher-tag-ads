import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CardProps {
    id: string
    title: string
    subTitle: string
    author: string
    date: string
    imageSrc: string
    cardWidth?: number
    imgWidth?: number
    imgHeight?: number
    imgQuality?: number
    link?: string
}

export const Card = ({
    id,
    title,
    author,
    date,
    imageSrc,
    cardWidth,
    imgWidth,
    imgHeight,
    imgQuality,
    link,
}: CardProps) => {
    return (
        <article
            className="relative my-0 mx-auto card"
            style={{ width: cardWidth ? cardWidth : 300 }}
        >
            <div className="img-container">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={imgWidth ? imgWidth : 300}
                    height={imgHeight ? imgHeight : 168}
                    quality={imgQuality ? imgQuality : 50}
                    style={{
                        width: imgWidth ? imgWidth : 300,
                        height: imgHeight ? imgHeight : 168,
                    }}
                />
            </div>
            <h2 className="text-xl font-medium">{title}</h2>
            <span className="text-xs">{author}</span>{' '}
            <span className="text-xs">
                <b>.</b> {date}
            </span>
            {link ? (
                <Link href={link}>
                    <span className="absolute top-0 left-0 right-0 bottom-0 w-full h-full text-transparent">
                        link
                    </span>
                </Link>
            ) : null}
            <style jsx>{`
                .card:hover h2 {
                    color: #1e90ff;
                }

                .card:hover .img-container {
                    filter: opacity(0.7);
                }
            `}</style>
        </article>
    )
}
