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
                                This brief article will outline the basics of staking, what options are out there and will also you explain why 
                                it matters to stake directly on-chain instead of using centralized services.
                            </span>
                    </div>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Philoshophy of staking</h2>
                    <p>
                        Staking in PoS crypto is the process of holding tokens in a cryptocurrency network as collateral to validate transactions and 
                        maintain the security of the network. Validators are responsible for creating new blocks and validating transactions in exchange 
                        for a portion of the network's rewards. This means that validators play a crucial role in maintaining the security and 
                        stability of the network, and in return, earn passive income in the form of newly minted tokens.
                    </p>
                    <p className={'my-3'}>
                        One of the main philosophies of staking is to incentivize holders to participate in the network's maintenance and security. 
                        By staking tokens, holders have a direct stake in the network's success and are incentivized to act in the network's best interest. 
                        This helps to prevent malicious actors from attacking the network, as they would risk losing their stake in the network. 
                        This philosophy of incentivizing participation and promoting network security has been fundamental in the development of many 
                        PoS crypto networks, including Polkadot.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>How does the staking work on Polkadot?</h2>
                    <p>
                        Polkadot is a new generation blockchain protocol that greatly simplifies cross-chain communication thanks 
                        to <a href="https://wiki.polkadot.network/docs/learn-crosschain" className="underline" target='_blank'>XCMP</a> protocol 
                        (Cross-Chain Message Passing) and interoperability by binding multiple parachains with various usecases into one network.
                    </p>
                    <p className={'my-3'}>
                        While Polkadot is using NPoS consensual algorithm, tokenholders can nominate individual nodes by which they help improve securing 
                        the network for verifying blocks produced by parachain collators. For their nomination, users are incentivized by receiving a 
                        share of the staking reward in DOT tokens.
                    </p>
                    <p>
                        Validators then secure the network by using their own stake and the stake of the nominators. More DOTs are locked in the staking, 
                        the more the network is secured and it's harder and more expensive to attack it.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Where to stake DOT tokens?</h2>
                    <p>There are several possibilities on where you can stake DOT tokens.</p>
                    <p className={'my-3'}>
                    <ul className='list-outside list-decimal my-3'>
                        <li><span className='font-bold'>Native staking</span> – you are still the true owner of your keys and tokens. For natives staking, you can
                        use <a href="https://staking.polkadot.network/" className="underline" target='_blank'>Staking Dashboard</a> for the smooth 
                        user experience, or <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.dotters.network%2Fpolkadot#/staking" className="underline" target='_blank'>Polkadot JS wallet</a>.</li>
                        <li><span className='font-bold'> Nomination pools</span> – that were recently launched on Polkadot is a solution for staking scalability that finally removes staking limits, because you can stake with as low as 1 DOT.</li>
                        <li><span className='font-bold'>3rd party dApp</span> – you can receive the liquid token that you can use in DeFi and increase your total rewards. Acala, Parallel Network, or Bifrost are the most known options in the Polkadot ecosystem.</li>
                        <li><span className='font-bold'>666.</span> You can also use centralized exchange such as...wait...that ain’t a good idea at all, right? In our decentralized eyes, by using centralized exchanges, you are giving up the ownership of your coins, because once you send tokens on the exchange, you are no longer the owner of the private keys. And as quoted so many times, „not your keys, not your crypto“.</li>
                    </ul>
                        <span className='font-bold'></span> 
                    </p>
                    <p>
                        If you're interested in becoming a validator on Polkadot, there are a few things you need to know. First, you'll need to have a significant amount of 
                        DOT tokens, the native cryptocurrency of Polkadot, to stake as collateral. This collateral ensures that validators have a direct stake in the 
                        success of the network and acts as a deterrent for malicious actors.
                    </p>
                    <p className='my-3'>
                        Once you have enough DOT tokens, you'll need to set up a validator node. This involves running a specialized computer program that 
                        connects to the Polkadot network and validates transactions. Validator nodes need to be highly available and reliable to ensure 
                        that the network remains secure and stable. Validators also need to have a deep understanding of the Polkadot network and its governance
                         mechanisms to participate effectively in the network's decision-making processes.
                    </p>
                    <p>
                        Validators on Polkadot not only contribute to the security and stability of the Polkadot network but also contribute to the security
                        and stability of any connected networks.
                    </p>
                    <p>
                        Choosing a validator is an important decision for anyone looking to stake their tokens on the Polkadot network. Validators have a 
                        direct impact on the security and stability of the network, and choosing the wrong validator can result in lost rewards or 
                        worse, a compromised network.
                    </p>
                    <p className='my-3'>
                        When choosing a validator, it's important to look for validators with a proven track record of reliability and uptime. 
                        Validators should also have a deep understanding of the Polkadot network and its governance mechanisms, as this knowledge is 
                        essential for participating effectively in the network's decision-making processes. Additionally, validators should be 
                        transparent and open with their communication and provide regular updates to their delegators.
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
