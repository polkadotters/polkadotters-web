import Image from 'next/image';
import Layout from '../../components/Layout'
import React from "react";
import {useRouter} from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {ProjectProps} from "../../interfaces/project";
import {BiWallet} from "react-icons/bi";
import StakingBoardImg from '../../assets/images/staking/staking-board.png';
import StakingAccountsImg from '../../assets/images/staking/staking-accounts.png';
import AliancePoolImg from '../../assets/images/staking/aliance-pool.png';
import ParanodesPoolImg from '../../assets/images/staking/paranodes-pool.png';
import PoolBoardImg from '../../assets/images/staking/pool-board.png';

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


const StakingPageHow2 = () => {
    const router = useRouter()

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <div className="mx-auto max-w-screen-md">
                    <div className="py-10 flex flex-col gap-20">
                    <h1 className={'text-5xl font-bold text-center'}>Staking tutorial for Polkadot & Kusama?</h1>
                        <span className={'text-2xl'}>
                                This guide will show you how to safely stake your DOT/KSM tokens. We will use the Polkadot network as an example but the same
                                process applies to Kusama as well.
                            </span>
                    </div>
                    <p>
                        Polkadot and its wild cousin network Kusama have been growing in popularity in the crypto space due to their 
                        unique architecture and potential for innovation. As a Polkadot or Kusama token holder, you have the opportunity to stake 
                        your tokens and earn rewards while supporting the network's security and operations. Let’s explore where to stake your DOT tokens.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>How to Stake Your DOT Tokens?</h2>
                    <p>
                        Staking your DOT tokens is a relatively simple process, but it requires some technical knowledge and the use of a crypto wallet 
                        that supports staking. Here are the general steps to stake your DOT tokens
                    </p>
                    <ul className='list-outside list-decimal my-3'>
                        <li><span className='font-bold'>Set up a wallet that supports staking.</span> There are several wallets that support staking on both Polkadot and Kusama, 
                            including Polkadot.js, Ledger Live, and MyCrypto. Choose the one that best fits your needs and preferences.</li>
                        <li><span className='font-bold'>Transfer your DOT tokens to your staking wallet.</span> You'll need to send your DOT tokens from your exchange or other wallet to your staking wallet.</li>
                        <li>Choose a validator or nomination pool to stake with. Validators operate nodes and verify transactions, 
                            while nomination pools are groups of token holders who pool their tokens together to support validators.</li>
                        <li><span className='font-bold'>Nominate your chosen validator or pool.</span> Once you've chosen a validator or pool, you'll need to nominate them with your staked DOT tokens. 
                            This process varies depending on the staking interface you're using, but generally involves selecting the validator or pool 
                            and specifying the amount of tokens you want to stake.</li>
                        <li><span className='font-bold'>Earn rewards.</span> If you've successfully staked your DOT tokens, you'll start earning rewards proportional to the amount 
                             of tokens you've staked. Rewards are paid out in DOT tokens and can be claimed periodically depending on the staking interface you're using.</li>
                    </ul>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Staking with Polkadot JS</h2>
                    <p>
                        Go to <a href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.dotters.network%2Fpolkadot#/staking" className="underline" target='_blank'>Polkadot JS app</a> and
                        select <span className='text-bold'>Network -&gt; Staking</span>
                        <div className={'flex flex-col items-center justify-center'} style={{
                                height: '50vh',
                                background: `url("${StakingBoardImg.src}") center center no-repeat`,
                                backgroundSize: "contain"
                            }}>
                        </div>
                    </p>
                    <p>
                        Then go to Accounts -&gt; Nominator
                        <div className={'flex flex-col items-center justify-center'} style={{
                                height: '20vh',
                                background: `url("${StakingAccountsImg.src}") center center no-repeat`,
                                backgroundSize: "contain"
                            }}>
                        </div>
                    </p>
                    <p>
                        Then you will be asked to pick your stash and controller accounts and then choose up to 16 validators. For more detailed info, visit 
                        our previous article <a href="https://polkadotters.medium.com/dot-token-wallets-overview-and-staking-options-in-polkadot-1da06a849002" className="underline" target='_blank'>DOT token wallets overview and staking options in Polkadot</a>.
                    </p>
                    <p className='mt-3'>
                        You can as well use the <a href="https://staking.polkadot.network/#/nominate" className="underline" target='_blank'>Polkadot Staking Dashboard</a> for better user experience.
                    </p>
                    <h2 className={'text-2xl font-bold text-left my-3'}>Staking with Nomination Pools</h2> 
                    <p className='my-3'>
                        There are several options for finding nomination pools to stake your DOT tokens with. It's important to do your research and choose a reputable 
                        and reliable pool or validator that aligns with your goals and values. Look for pools with a track record of reliable operations, good communication, 
                        and fair fee structures.
                    </p>
                    <p>
                        You can also use the Polkadot JS app, but our preferable way is to use Polkadot Staking Dashboard. 
                    </p>
                    <div className={'flex flex-col items-center justify-center mt-3'} style={{
                            height: '60vh',
                            background: `url("${PoolBoardImg.src}") no-repeat`,
                            backgroundSize: "contain"
                        }}>
                    </div>
                    <p>
                        If you search for Polkadotters, you can find us in <span className='font-bold'>DOT VALIDATOR ALLIANCE DAO</span> staking pool 
                        or <span className='font-bold'>Paradox | ParaNodes.io</span> staking pool.
                    </p>
                    <div className={'flex flex-col items-center justify-center mt-3'} style={{
                            height: '20vh',
                            background: `url("${AliancePoolImg.src}") no-repeat`,
                            backgroundSize: "contain"
                        }}>
                    </div>
                    <div className={'flex flex-col items-center justify-center mt-3'} style={{
                            height: '20vh',
                            background: `url("${ParanodesPoolImg.src}") no-repeat`,
                            backgroundSize: "contain"
                        }}>
                    </div>
                    <p>
                        We also created an article called <a href="https://polkadotters.medium.com/the-power-of-nomination-pools-on-polkadot-ef0b4113028c" className="underline" target='_blank'>The power of nomination pools on Polkadot</a>, where we go through the nomination process in more detail.
                    </p>
                </div>
            </main>

            <Footer/>
        </Layout>
    )
}

export default StakingPageHow2
