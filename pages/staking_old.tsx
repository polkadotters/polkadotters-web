import Layout from '../components/Layout'
import React from "react";
import {useRouter} from "next/router";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import projects from "../content/projects.json";
import projectArticles from "../content/project_articles.json";
import {ProjectProps} from "../interfaces/project";
import {BiWallet} from "react-icons/bi";
import faqs from '../content/faq.json';

const ProjectTile = ({
                         name,
                         logo,
                         description,
                         address,
                         explorer,
                         project_url,
                         project_name,
                         project_logo
                     }: ProjectProps) => {
    return <div key={name} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={logo} alt=""/>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
                <a href={explorer} target={"_blank"} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{name}</p>
                    <p className="mt-3 text-base text-gray-500">{description}</p>
                </a>
            </div>
            <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                    <a href={project_url}>
                        <span className="sr-only">{project_name}</span>
                        <img className="h-10 w-10 rounded-full" src={project_logo} alt=""/>
                    </a>
                </div>
                <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                        <a href={project_url} className="hover:underline">
                            {project_name}
                        </a>
                    </p>
                </div>

                <a target={"_blank"}
                   className={`inline-flex items-center gap-2 rounded-full bg-green-100 hover:bg-green-200 text-green-800 px-2 text-xs font-semibold leading-5`}
                   href={explorer}>
                    <BiWallet/> {address.substring(0, 7)}...{address.substring(-7, 7)}
                </a>
            </div>
        </div>
    </div>
}

const ProjectArticle = ({
                            title,
                            link,
                            brief,
                            cover
                        }) => {
    return <div key={title} className="flex flex-col lg:flex-row overflow-hidden rounded-lg shadow-lg flex-1">
        <div className="flex-shrink-0">
            <img className="w-full h-32 lg:w-32 lg:h-full object-cover" src={cover} alt=""/>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
                <a href={link} target={"_blank"} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{title}</p>
                    <p className="mt-3 text-base text-gray-500">{brief}</p>
                </a>
            </div>
        </div>
    </div>
}


const StakingPage = () => {
    const router = useRouter()

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <Container screenSize={'md'}>
                    <div className="py-10 flex flex-col gap-20">
                        <div className="w-full md:w-2/3 m-auto text-center">
                            <h1 className={'text-5xl font-bold text-center'}>Networks we support</h1>
                            <span className={'text-2xl'}>
                                Polkadotters are one of the biggest staking and node operator in the entire Dotsama ecosystem.
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 bg-fuchsia-50 p-6 border border-fuchsia-500 rounded-xl">
                            <h2 className={'text-2xl'}>Read how we work</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {projectArticles.map(project => <ProjectArticle {...project} />)}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {projects.map(project => <ProjectTile {...project} />)}
                        </div>

                        {faqs && faqs.length > 0 && <div className="bg-white">
                            <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">Frequently
                                    asked questions</h2>
                                <div className="mt-12">
                                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0 lg:grid-cols-3">
                                        {faqs.map((faq) => (
                                            <div key={faq.id}>
                                                <dt className="text-lg font-medium leading-6 text-gray-900">{faq.question}</dt>
                                                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </div>}
                    </div>
                </Container>
            </main>

            <Footer/>
        </Layout>
    )
}

export default StakingPage
