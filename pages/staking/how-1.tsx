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
                        <h1 className={'text-5xl font-bold text-center'}>Why and where to stake your DOT/KSM tokens?</h1>
                        <span className={'text-2xl'}>
                                This brief article will outline the basics of staking, what options are out there and will also explain you why 
                                it matters to stake directly on-chain instead of using centralized services.
                            </span>
                    </div>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Philoshophy of staking</h2>
                    <p>
                        Staking in a Proof of Stake network is the process of delegating (and locking) your tokens to the validators and thus it helps to 
                        maintain the security of the network. Validators are responsible for creating new blocks and validating transactions in exchange 
                        for a portion of the network's rewards. This means that validators play a crucial role in maintaining the security and 
                        stability of the network, and in return, delegators can earn a passive income in the form of newly minted tokens.
                    </p>
                    <p className={'my-3'}>
                        The main philosophy of staking is to incentivize holders to participate in the network's security. 
                        The security is derived from the amount of tokens that are being staked - generally we think that PoS-based networks are secure
                        if more than 40-50% of all circullating supply is locked. 
                        By staking tokens, holders have a direct share in the network's success and are incentivized to act in the network's best interest. 
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>How does the staking work on Polkadot?</h2>
                    <p>
                        Polkadot is a new generation blockchain protocol that greatly simplifies cross-chain communication thanks 
                        to <a href="https://wiki.polkadot.network/docs/learn-crosschain" className="underline" target='_blank'>XCMP</a> protocol 
                        (Cross-Chain Message Passing) and interoperability by binding multiple parachains with various usecases into one network.
                    </p>
                    <p className={'my-3'}>
                        One speciality of Polkadot is that you can nominate up to 16 validators - meaning that you can diversify your stake across multiple parties
                        to secure the best profit. Once per every day (4x a day on Kusama) there are elections and 297 validators are selected to the active set 
                        based on the nominations they have received. These validators are than responsible for the security of the network.
                        Both nominators and validators are rewarded with a new DOT tokens coming from the inflation.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Where to stake DOT tokens?</h2>
                    <p>There are several options for staking your DOT tokens</p>
                    <p className={'my-3'}>
                    <ul className='list-outside list-decimal my-3'>
                        <li><span className='font-bold'>Native staking</span> – you are still the true owner of your keys and tokens. For native staking, you can
                        use the brand new <a href="https://staking.polkadot.network/" className="underline" target='_blank'>Staking Dashboard</a> for the smooth 
                        user experience, or <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.dotters.network%2Fpolkadot#/staking" className="underline" target='_blank'>Polkadot JS wallet</a>.</li>
                        <li><span className='font-bold'> Nomination pools</span> – recently launched on Polkadot is a solution for staking scalability that finally removes staking limits. 
                        You can now stake with as low as 1 DOT and it also relieves the burden of choosing the validator set you will be nominating to.</li>
                        <li><span className='font-bold'>3rd party dApp</span> – you can receive the liquid token that you can use in DeFi and increase your total rewards. Acala, Parallel Network, or Bifrost are the most known options in the Polkadot ecosystem.</li>
                        <li><span className='font-bold'>666.</span> You can also use centralized exchange such as...wait...that ain’t a good idea at all, right? 
                        In our opinion, using centralized exchange has only one advantage — simplicity. But you trade it for higher rewards, real coin ownership (yes, your coins can be stolen or impossible to release when you need them most), the right to vote in governance with your coins, and the idea of decentralization in particular.</li>
                    </ul>
                        <span className='font-bold'></span> 
                    </p>

                    <p>Obviously, the native options are the best - either by nominating the validators directly (if you have more than 300 DOTs, there's no limit on Kusama now)
                        or by using nomination pools. These options will give you the highest control of your coins, allow you to participate in governance 
                        and it also boosts the security and decentralization of the network the most. We know the process can be quite complicated and therefore you can
                        follow to our next <a href="/staking/how-2" className="underline">article</a> for guidance. Or, you can automate the whole selection process 
                        by using the brand new <a href="https://staking.polkadot.network/#/nominate" className="underline" target='_blank'>Staking Dashboard</a>.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>How to pick a right validator?</h2>
                    <p>
                        When choosing a validator, it's important to look for validators with a proven track record of reliability and uptime. 
                        Validators should also have a deep understanding of the Polkadot network and its governance mechanisms, as this knowledge is 
                        essential for participating effectively in the network's decision-making processes. Additionally, validators should be 
                        transparent and open with their communication and responsive to upgrades or any unexpected events that might be happening in the network. 
                    </p>
                    <p>
                        Obviously, this doesn't take away the burden of doing the research and choosing the validators you like. 
                        We have prepared a quite exhaustive <a href="https://polkadotters.medium.com/staking-series-1-polkadot-staking-why-should-you-care-6edf0d9b1ce4" className="underline" target='_blank'>guide</a> that will help you to navigate this difficult topic.
                    </p>

                    <h2 className={'text-2xl font-bold text-left my-3'}>Why choose Polkadotters as your validator?</h2>
                    <p>
                        Here are a few reasons why you should pick Polkadotters as your Polkadot validator
                    </p>
                    <ul className='list-outside list-decimal my-3'>
                        <li>We're not just validators, we're community builders: Since mid-2020, we've been actively organizing events, meetups, and writing articles 
                            and tutorials to help build a strong and engaged Polkadot community.</li>
                        <li>Our track record speaks for itself: As active validators on	Polkadot and Kusama and many parachains such as Astar, Bifrost or HydraDX, 
                            we've been operating without any issues and we're honest about what we do. You can trust us to keep your stake safe and secure.</li>
                        <li>Performance - all of our validators are ran on bare metal servers meaning that it has amongst the highest block productions in the ecosystem resulting in a high APR.</li>
                        <li>Decentralization - we never use public clouds like AWS or Azure. Some of our validators are already running on our own servers in Czechia and we gradually move the rest over there too.</li>
                        <li>We believe in on-chain governance: One of the key improvements that Polkadot brings to the blockchain space is its on-chain governance
                            system, and we fully support its spirit. We keep our users informed about the latest referenda and encourage participation to make sure that the community's voice is heard.</li>
                        <li>And last but not least, we have a sense of humor: We take our job seriously, but we don't take ourselves too seriously. Life's too 	short to be boring, so we try to bring a bit of fun to everything we do. Join us and let's stake our way to the moon together!</li>
                    </ul>
                </div>
            </main>

            <Footer/>
        </Layout>
    )
}

export default StakingPageHow1
