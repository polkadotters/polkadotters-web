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


const StakingPageHow3 = () => {
    const router = useRouter()

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <div className="mx-auto max-w-screen-md">
                    <div className="py-10 flex flex-col gap-20">
                        <h1 className={'text-5xl font-bold text-center'}>Parachain staking</h1>
                        <span className={'text-2xl'}>
                            You can stake and earn not only on Polkadot and Kusama but also on their parachains as well! So we will briefly go through all the options and link you to the staking boards of these parachains.
                        </span>
                    </div>
                    <p>
                        Luckily, staking on parachains is usually easier - you don't have to care about picking the right validator set and you 
                        don't need controller account as well. We will go through all the projects that support staking in the alphabetical order 
                        and also guide you to their dashboard where you can stake your tokens.

                        Most parachains mimic staking model invented by Moonbeam - so if you want to know how it works, jump straight 
                        to the <a href="#moonbeam" className='underline'>Moonbeam</a> section. In case of parachain staking, the nodes are no longer
                        called validators but rather colllators. 
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Aleph Zero</h2>
                    <p>
                        Although Aleph Zero is not a parachain, it's based on the Substrate and Polkadot technology so its staking is the same as on Polkadot. 
                        However, they have quite slick staking app, so just head 
                        over <a href='https://alephzero.org/staking#being-a-nominator' className='underline' target='_blank'>there</a> and
                        start staking.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Astar & Shiden</h2>
                    <p>
                        Astar and Shiden don't offer staking on validators, but rather on dApps deployed on these networks based on the dApp staking model.
                        The process is quite simple, just go to 
                        the <a href="https://portal.astar.network/#/astar/dapp-staking/discover" className="underline" target='_blank'>Astar portal</a>, 
                        scroll down and select an app you want to stake on. You can stake on multiple dApps and for Shiden, just change the network in the
                        top right corner. 
                        
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Bifrost</h2>
                    <p>
                        Bifrost staking is based on Moonbeam - which means you choose only one collator for staking. Just go to
                        the <a href="https://bifrost.app/collator" className="underline" target='_blank'>Bifrost app</a> and 
                        select a collator you want to delegate to.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Calamari</h2>
                    <p>
                        Again, Calamari is based on Moonbeam - so just go to 
                        their <a href="https://app.manta.network/#/calamari/stake" className="underline" target='_blank'>app</a>,
                        select your favorite collator and click on the Stake button. 
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Darwinia & Crab</h2>
                    <p>
                        Darwinia, on the other hand, has a staking system similar to Polkadot or Kusama. However, with that difference that Darwinia will pick 
                        the validators for you which makes the staking process a whole lot easier. So just go
                        their <a href="https://apps.darwinia.network/staking" className="underline" target='_blank'>app</a> and click on Staking now button
                        in the Get power section. For staking on the Crab network, just switch to it in the top-left corner.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Joystream</h2>
                    <p>
                        Although Joystream is not a parachain, it's based on the Substrate and Polkadot technology so it's staking is the same as on Polkadot. 
                        Therefore you can go to  
                        their <a href="https://polkadot.js.org/apps/?rpc=wss://rpc.joystream.org#/staking" className="underline" target='_blank'>Polkadot JS app</a>
                        and than follow the same process as on Polkadot.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Kilt</h2>
                    <p>
                        Kilt has its own consensus called <a href="https://link.medium.com/0uesdYTD0xb" className="underline" target='_blank'>LDPoS</a> - but again,
                        it is really simple compared to Polkadot, partially thanks to the fact you can choose only one validator. So go 
                        to the <a href="https://stakeboard.kilt.io/" className="underline" target='_blank'>Kilt stakeboard</a>,
                        scroll down the list of validators and select your favorite one. 

                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Litentry</h2>
                    <p>
                        Litentry is another project based on Moonbeam but as a bonus, they offer a really 
                        amazing <a href="https://app.web3go.xyz/#/LitentryMainnetStaking" className="underline" target='_blank'>board</a> for their
                        delegators. So just go over there, pick the validator and click on Delegate. And as a bonus, the same board supports other projects
                        like Calamari or Moonbeam.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Mangata X</h2>
                    <p>
                    <a href="" className="underline" target='_blank'></a>
                    </p>
                    <h2 id="moonbeam" className={'text-2xl font-bold text-left my-3'}>Moonbeam & Moonriver</h2>
                    <p>
                        Moonbeam invented its own staking model that has been widely re-used by other parachains - Litentry, Bifrost or Zeitgeist to name a few.
                        It's based a concept of rounds - there are several rounds every day (on Moonbeam 4, each lasting 6 hours) and rewards are being paid to delegators
                        after every of these rounds. Each validator has also a limit of maximum delegators (350 on Moonbeam) and a minimal stake (50 GLMR) that can
                        grow in time. Again, you are able to stake on only one validator. For a deeper explanation, go to the 
                        the <a href="https://docs.moonbeam.network/learn/features/staking/" className="underline" target='_blank'>Moonbeam documentation</a> which describes
                        the whole model thoroughly. 
                    </p>
                    <p className='my-3'>
                        <span className='font-bold'>Rewards</span>
                        <br />
                        There is an option for auto-compounding which lets you automatically re-stake your earned tokens - this can be set up in the official app. 
                        Also, we have to mention that performance of the validator really matters here - try to pick validators with the highest APR. You can 
                        use this <a href="https://stakeglmr.com" className="underline" target='_blank'>handy page</a> to sort validators by their APR (Blocks per round column).
                    </p>
                    <p>
                        For the staking itself, let's go to 
                        the <a href="https://apps.moonbeam.network/moonbeam/staking" className="underline" target='_blank'>official app</a>.
                        Sign in with your wallet (be it Talisman or Metamask ideally), choose your favorite collator and whether you want to turn-on autocompounding and click on Delegate. 
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Sora</h2>
                    <p>
                        Although Sora is not a parachain, it's based on the Substrate and Polkadot technology so its staking is the same as on Polkadot. 
                        Therefore you can go to  
                        their <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fmof2.sora.org#/staking" className="underline" target='_blank'>Polkadot JS app</a> and
                        than follow the same process as on Polkadot.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Turing network</h2>
                    <p>
                        Turing staking is based on Moonbeam - which means that the whole staking system is the same. You have to go to
                        the <a href="https://staketur.com" className="underline" target='_blank'>StakeTUR app</a> and  
                        choose a collator you want to delegate to. Once you ready, move to the Dashboard section (top-right corner), select your picked
                        collator and delegate. 
                    <a href="" className="underline" target='_blank'></a>
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Zeitgeist</h2>
                    <p>
                        Turing staking is based on Moonbeam - which means that the whole staking system is the same. You have to go to
                        the <a href="https://stakeztg.com/" className="underline" target='_blank'>StakeZTG app</a> and  
                        choose a collator you want to delegate to. Once you ready, move to the Dashboard section (top-right corner), select your picked
                        collator and delegate. 
                    </p>
                </div>
            </main>

            <Footer/>
        </Layout>
    )
}

export default StakingPageHow3
