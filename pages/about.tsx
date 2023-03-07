import Layout from '../components/Layout'
import React from "react";
import {useRouter} from "next/router";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import LogoPiktogram from "../assets/images/logo-piktogram.svg";
import Petr from "../assets/images/petr.jpg";
import Pavel from "../assets/images/pavel.jpg";
import {FaDiscord, FaMedium, FaTelegramPlane, FaTwitter} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import Link from "next/link";


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
            {icon: 'medium', link: 'polkadotters.medium.com'},
            {icon: 'email', link: 'mailto:polkadotters@protonmail.com'},
            {icon: 'twitter', link: 'https://twitter.com/Polkadotters1'},
        ]
    },
    {
        img: Pavel, name: 'Pavel', contacts: [
            {icon: 'medium', link: 'polkadotters.medium.com'}
        ]
    }
]


const AboutPage = () => {
    const router = useRouter()

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <Container screenSize={'lg'}>
                    <div
                        className="flex flex-col lg:flex-row gap-8 items-center justify-start mt-10 bg-white shadow-2xl p-5">

                        <div className=" block w-1/3 flex items-center justify-center">
                            <img src={LogoPiktogram.src} alt="" className="w-90 h-90 block p-12 py-28"/>
                        </div>
                        <div className="flex flex-col gap-2 w-2/3">
                            <div className={'text-4xl font-bold'}>
                                We are Polkadot enthusiasts from Czechia
                                - the Polkadotters!
                            </div>
                            <div className={'text-xl'}>
                                <p>We started in 2020 by discovering Polkadot ecosystem and its potential - and this made us create a first Czechia & Slovak
                                community because there wasn't any back then. Petr also has a technical background of being a backend developer throughtout his career
                                so we quickly started playing around the Polkadot infrastructure as well. </p>
                                <p>Since then, we became members of the 1000 validators programme, founded the&nbsp; 
                                    <a href="https://dotvalidators.org" className="underline" target='_blank'>DOT Validator Alliance DAO</a>, help various projects to
                                    create their collator programs, joined the&nbsp;
                                    <a href="https://unitedbloc.com/" className="underline" target='_blank'>United Bloc DAO</a>
                                    &nbsp;and <a href="https://dotters.network/" className="underline" target='_blank'>IBP program</a>. 
                                    
                                </p>
                                <p>
                                    After all these years, we are very proud to be a firm part of the Polkadot ecosystem and helping it towards more decentralization and
                                    infrastructure maturity.
                                </p>
                                
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 max-w-5xl m-auto mt-20 justify-between">
                        {contacts.map(contact => <div className="flex flex-col items-center gap-4">
                            <img src={contact.img.src} alt={contact.name}
                                 className={'rounded-full object-cover overflow-hidden w-[28rem] h-[28rem]'}/>
                            <h2 className={'text-5xl'}>{contact.name}</h2>
                            <div className="flex flex-row text-3xl gap-2">
                                {contact.contacts.map(c => <Link key={c.icon} href={c.link}><a
                                    target={'_blank'}>{icons[c.icon]}</a></Link>)}
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