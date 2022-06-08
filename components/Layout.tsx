import React, {ReactNode} from 'react'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
    fullHeight?: boolean
}

const Layout = ({children, title = '', fullHeight = false}: Props) => (
    <div className={'bg-primary-50 flex flex-col flex-1 min-h-screen'}>
        <Head>
            <title>{''}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        {children}
    </div>
)

export default Layout
