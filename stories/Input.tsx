import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    width?: number
    placeholder?: string
    height?: number
}

export default function Input({
    width,
    height,
    placeholder,
    ...props
}: InputProps) {
    return (
        <>
            <input
                type="text"
                placeholder={placeholder}
                {...props}
                className="p-5 border-gray-300 border rounded-md focus:border-blue-500 focus:outline-none"
                style={{
                    width: width ? width : '100%',
                    height: height ? height : 'auto',
                }}
            />
        </>
    )
}
