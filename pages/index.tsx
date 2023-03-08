import Layout from '../components/Layout'
import React from "react";
import {useRouter} from "next/router";
import Header from "../components/Header";
import AuraImg from '../assets/images/aura.png';
import Container from "../components/Container";
import {FaMedium} from "react-icons/fa";
import {LINKS} from "../constants";
import Link from "next/link";
import styles from "./index.module.scss"
import Footer from "../components/Footer";
import Button from "../components/Button";

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


const IndexPage = ({posts}) => {
    const router = useRouter()

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>

                <div className={'w-full block flex flex-col items-center justify-center'} style={{
                    height: '70vh',
                    background: `url("${AuraImg.src}") center center no-repeat`,
                    backgroundSize: "contain"
                }}>
                    <h1 className={'text-6xl font-bold w-3/4 text-center'}>
                        The most popular community Polkadot validator and media house
                    </h1>
                </div>

                <Container screenSize={'md'} className={'max-w-5xl'}>
                    <div className="lg:-mt-20">
                        <h1 className={'text-6xl font-bold text-pink-600 flex flex-col lg:flex-row items-center justify-center md:justify-start gap-3 mb-8'}>
                            <FaMedium/>
                            Polkadotters <span className={'text-4xl text-gray-800'}>on medium</span></h1>

                        <ul className={'flex flex-col gap-8'}>
                            {posts.map(post => <li key={post.title}>

                                <div className="flex flex-col lg:flex-row gap-4 items-start">
                                    <img src={post.thumbnail} width={300} alt={post.title}/>
                                    <div className="flex flex-col gap-4">
                                        <Link href={post.link}>
                                            <a target={"_blank"} className={'hover:underline'}><h2
                                                className={'text-3xl font-bold'}>{post.title}</h2>
                                            </a>
                                        </Link>

                                        <p dangerouslySetInnerHTML={{__html: post.description.substring(0, 300)}}
                                           className={styles.articleContent}></p>
                                    </div>
                                </div>
                            </li>)}
                        </ul>
                        <Button href={LINKS.medium} variant={'accent'} className={'mt-10'}><a target={"_blank"}>Read
                            more on Medium</a></Button>
                    </div>
                </Container>
            </main>

            <Footer/>
        </Layout>
    )
}

export default IndexPage