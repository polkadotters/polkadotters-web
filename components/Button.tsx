import React, {ReactNode} from "react";
import Link from 'next/link'
import {BiLinkExternal} from "react-icons/bi";
import {Size, Variant} from "../interfaces/components";

export type ButtonProps = {
    children?: ReactNode
    className?: string
    href?: string
    onClick?: (event: any) => void
    size?: Size,
    variant?: Variant,
    active?:boolean,
    align?: 'left' | 'right' | 'center',
    type?: 'button' | 'submit' | 'link'
}

const ButtonSizes = {
    'xs': 'py-1 px-1',
    'sm': 'py-2 px-6',
    'md': 'py-4 px-6',
    'lg': 'py-6 px-8 text-lg',
    'xl': 'py-8 px-12 text-xl',
    '2xl': 'py-6 px-6 text-2xl',
    '3xl': 'py-6 px-6 text-3xl',
}

const ButtonVariants = {
    primary: 'text-white hover:bg-primary-700 bg-primary-500 rounded-full',
    accent: 'text-white hover:bg-pink-700 bg-pink-500 rounded-full',
}

const ButtonClasses = 'rounded-lg justify-center font-bold flex flex-row gap-2 items-center transition duration-300 cursor-pointer'

const ActiveClass = {
    primary: 'bg-primary-50',
}

const AlignClass = {
    left: 'text-left !justify-start',
    right: 'text-right !justify-end',
    center: ''
}

const Button = ({type = 'link', href, onClick, className, children, variant = 'clean', size = 'md', active = false, align = 'center'}: ButtonProps) => {
    const classes = `${className} ${AlignClass[align]} ${ButtonVariants[variant]} ${ButtonSizes[size]} ${ButtonClasses} ${active ? ActiveClass[variant] : ''}`

    if(href && href.startsWith('http')){
        return <a href={href} className={classes}>{children} <BiLinkExternal /></a>
    } else if(href){
        return <Link href={href}><a className={classes}>{children}</a></Link>
    } else if(type !== 'link') {
        return <button type={type} className={classes} onClick={onClick}>{children}</button>
    }else{
        return <a onClick={onClick} className={classes}>{children}</a>
    }

}

export default Button