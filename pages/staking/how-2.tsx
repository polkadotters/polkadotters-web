import Layout from '../../components/Layout'
import React from "react";
import {useRouter} from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {ProjectProps} from "../../interfaces/project";
import {BiWallet} from "react-icons/bi";

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


const StakingPageHow1 = () => {
    const router = useRouter()

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <div className="mx-auto max-w-screen-md">
                    <div className="py-10 flex flex-col gap-20">
                        <h1 className={'text-5xl font-bold text-center'}>We have Validators on the best
                            projects!</h1>
                        <span className={'text-2xl'}>
                                We at Cosmoon are focused on creating and operating Validators, using the best hardware
                                available in the market, and studying the latest security system to create a worries-free
                                experience.
                            </span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel imperdiet felis.
                        Curabitur accumsan dapibus sollicitudin. Fusce elit tellus, euismod a nulla a, tincidunt
                        sagittis velit. Fusce mollis venenatis eros. Fusce malesuada dui nisl. Quisque tristique
                        feugiat mi, pharetra auctor diam egestas sit amet. Phasellus non mollis enim. Aliquam
                        facilisis efficitur leo, vitae aliquam tortor pharetra et. Mauris id rhoncus ante, sed
                        auctor velit. Morbi vitae viverra mauris. Pellentesque est lectus, vehicula sed maximus
                        eu,
                        ornare malesuada lectus. Nulla elementum sem sem, et scelerisque diam maximus vel.
                        Aliquam
                        id lectus felis. Sed at purus quis nisi bibendum vehicula et suscipit quam. Curabitur
                        tempor
                        lectus molestie accumsan pulvinar.
                    </p>

                    <p>
                        Sed gravida lobortis arcu, sed eleifend diam tempor sit amet. Curabitur luctus
                        sollicitudin
                        placerat. Cras ac ligula elit. Quisque sit amet ex egestas, convallis sem vitae,
                        elementum
                        quam. Donec vel tempus leo, non rutrum libero. Etiam sagittis augue sed rhoncus rutrum.
                        In
                        tincidunt diam aliquam sem pretium laoreet. Etiam nec venenatis dolor, nec semper
                        turpis.
                    </p>

                    <p>
                        Sed vel tincidunt nulla. In lobortis sed urna at luctus. Praesent sodales justo et
                        eleifend
                        blandit. Maecenas porttitor dolor nec sapien facilisis, at luctus velit eleifend. Cras
                        faucibus semper felis ut feugiat. Nullam rhoncus, augue eget ultrices placerat, lacus
                        magna
                        auctor metus, a mollis libero quam quis dui. In quis tempus leo. Donec mattis commodo
                        neque
                        sit amet euismod.
                    </p>

                    <p>
                        Proin malesuada, felis vitae malesuada mattis, nisl ante elementum ipsum, non volutpat
                        turpis ipsum et ante. Aenean quis ex hendrerit, vehicula odio et, vehicula nisi.
                        Pellentesque maximus, neque vel eleifend finibus, ex ipsum placerat augue, vitae viverra
                        urna quam nec nibh. Morbi consectetur tortor tortor, et consequat libero ornare
                        bibendum.
                        Praesent et enim sed lectus ultricies consequat. Donec odio augue, dictum non felis ut,
                        vestibulum aliquet nibh. Integer cursus malesuada purus sed tincidunt. Fusce porta
                        malesuada
                        imperdiet.
                    </p>

                    <p>
                        Suspendisse leo est, scelerisque sit amet aliquam nec, mattis vel ante. Cras efficitur
                        turpis sapien, quis consectetur risus consectetur quis. Nunc non tincidunt justo, quis
                        aliquet nisl. Phasellus et fermentum odio. In hac habitasse platea dictumst. Suspendisse
                        et
                        velit et nulla eleifend venenatis id dignissim magna. Vivamus at justo ut tellus sodales
                        pellentesque.
                    </p>
                </div>
            </main>

            <Footer/>
        </Layout>
    )
}

export default StakingPageHow1
