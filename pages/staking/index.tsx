import Layout from '../../components/Layout'
import React, {useState} from "react";
import {useRouter} from "next/router";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import projects from "../../content/projects.json";
import projectArticles from "../../content/project_articles.json";
import {ProjectProps} from "../../interfaces/project";
import {BiWallet} from "react-icons/bi";
import Link from "next/link";
import Button from "../../components/Button";

const ProjectTile = ({
                         name,
                         logo,
                         description,
                         address,
                         explorer,
                         begin,
                         staked,
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
                <Link href={link}>
                    <a className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">{title}</p>
                        <p className="mt-3 text-base text-gray-500">{brief}</p>
                    </a>
                </Link>
            </div>
        </div>
    </div>
}


const StakingPage = () => {
    const router = useRouter();

    const [filter, setFilter] = useState('');

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <Container>
                    <div className="py-10 flex flex-col gap-20">
                        <div className="w-full md:w-2/3 m-auto text-center">
                            <h1 className={'text-5xl font-bold text-center'}>We have Validators on the best
                                projects!</h1>
                            <span className={'text-2xl'}>
                                We at Cosmoon are focused on creating and operating Validators, using the best hardware
                                available in the market, and studying the latest security system to create a worries-free
                                experience.
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 bg-fuchsia-50 p-6 border border-fuchsia-500 rounded-xl">
                            <h2 className={'text-2xl'}>Read how we work</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {projectArticles.map(project => <ProjectArticle {...project} />)}
                            </div>
                        </div>

                        <div className="sticky top-0 w-full flex flex-row gap-2 bg-white p-2 shadow items-center justify-center">
                            <Button variant={'light'}
                                    size={'sm'}
                                    onClick={() => setFilter('')}
                                    active={filter === ''}>All</Button>
                            {Object.keys(projects.reduce((acc, project) => {
                                project.category.forEach(i => {
                                    acc[i] = 1;
                                })
                                return acc;
                            }, {})).map(project => <Button variant={'light'}
                                                           size={'sm'}
                                                           onClick={() => setFilter(project)}
                                                           active={project === filter}>{project}</Button>)}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {projects.filter(project => project.category.includes(filter) || filter === '').map(project => <ProjectTile {...project} />)}
                        </div>


                    </div>
                </Container>
            </main>

            <Footer/>
        </Layout>
    )
}

export default StakingPage