import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface HeaderProps {
    logo: string
    headerHeight?: number
    link?: string
}

export const Header = ({ logo, headerHeight, link }: HeaderProps) => (
    <header
        className="sticky top-0 left-0 right-0 mb-10 bg-gray-200 z-50 flex items-center"
        style={{ height: headerHeight ? headerHeight : '' }}
    >
        <div className="pl-4">
            <Link href={link ? link : '/'}>
                <Image
                    style={{ width: 100, height: 70 }}
                    src={logo}
                    alt="logo"
                    width={100}
                    height={70}
                />
            </Link>
        </div>
    </header>
)
