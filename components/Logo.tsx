import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoFile from '../assets/images/logo-white.svg'

type Props = {
    href?: string
}

const Logo = ({href = '/'}: Props) => (
    <Link href={href}>
        <a className={'flex flex-row items-center'}><Image src={LogoFile.src} width={80} height={24} alt={'Choco'}/>
        </a>
    </Link>
)

export default Logo