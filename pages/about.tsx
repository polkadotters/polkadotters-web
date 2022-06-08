import Layout from '../components/Layout'
import React from "react";
import {useRouter} from "next/router";
import Header from "../components/Header";
import Container from "../components/Container";
import {LINKS} from "../constants";
import Footer from "../components/Footer";
import LogoPiktogram from "../assets/images/logo-piktogram.svg";
import Petr from "../assets/images/petr.png";
import Pavel from "../assets/images/pavel.png";
import {FaDiscord, FaMedium, FaTelegramPlane, FaTwitter} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import Link from "next/link";

export async function getStaticProps() {
    const res = await fetch(` https://api.rss2json.com/v1/api.json?rss_url=${LINKS.medium}/feed`)
        .then(response => response.json())
    const posts = res.items.slice(0, 3)
    return {
        props: {
            posts,
        },
    }
}


const icons = {
    medium: <FaMedium/>,
    email: <MdAlternateEmail/>,
    twitter: <FaTwitter/>,
    telegram: <FaTelegramPlane/>,
    discord: <FaDiscord/>
}

const contacts = [
    {
        img: Petr, name: 'Petr', contacts: [
            {icon: 'medium', link: 'medium.com'},
            {icon: 'email', link: 'mailto:petr@petr.com'},
            {icon: 'twitter', link: 'https://twitter.com'},
        ]
    },
    {
        img: Pavel, name: 'Pavel', contacts: [
            {icon: 'medium', link: 'medium.com'}
        ]
    }
]


const AboutPage = ({posts}) => {
    const router = useRouter()

    console.log(posts)

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <Container screenSize={'md'}>
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-start mt-10">

                        <div className="rounded-full bg-white shadow-2xl block w-1/3 flex items-center justify-center">
                            <img src={LogoPiktogram.src} alt="" className="w-90 h-90 block p-12 py-28"/>
                        </div>

                        <div className={'text-6xl font-bold w-2/3'}>
                            We are Polkadot enthusiasts from Czechia
                            - the Polkadotters!
                            We write about what's happening in
                            Polkadot, Kusama and all other
                            networks which are becoming part of this wonderful ecosystem.
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 max-w-5xl m-auto mt-20 justify-between">
                        {contacts.map(contact => <div className="flex flex-col items-center gap-4">
                            <img src={contact.img.src} alt={contact.name}/>
                            <h2 className={'text-5xl'}>{contact.name}</h2>
                            <div className="flex flex-row text-3xl gap-2">
                                {contact.contacts.map(c => <Link key={c.icon} href={c.link}><a target={'_blank'}>{icons[c.icon]}</a></Link>)}
                            </div>
                        </div>)}
                    </div>
                </Container>
            </main>

            <Footer/>
        </Layout>
    )
}

export default AboutPage