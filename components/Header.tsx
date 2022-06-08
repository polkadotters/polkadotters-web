import Link from "next/link";
import {LINKS} from "../constants";
import {FaDiscord, FaMedium, FaTelegramPlane, FaTwitter} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import Container from "./Container";
import Logo from '../assets/images/logo-white.svg';
import Image from "next/image";
import {useRouter} from "next/router";

const icons = {
    medium: <FaMedium/>,
    email: <MdAlternateEmail/>,
    twitter: <FaTwitter/>,
    telegram: <FaTelegramPlane/>,
    discord: <FaDiscord/>
}

const Header = () => {
    const router = useRouter()
    console.log(router.asPath)
    return <nav>
        <div className="border-b bg-white">
            <ul className={'flex flex-row items-center justify-center overflow-hidden'}>
                {Object.keys(LINKS).map(key =>
                    <li key={key} className={'overflow-hidden'}><Link href={LINKS[key]}>
                        <a target={'_blank'}
                           className={'text-2xl py-2 px-2 block hover:opacity-30 transition-all duration-200'}>
                            {icons[key]}
                        </a>
                    </Link></li>
                )}
            </ul>
        </div>

        <Container>
            <div className="flex flex-row mt-16 items-center justify-between">
                <Image {...Logo} />

                <ul className="menu flex flex-row gap-4">
                    {[
                        ['Home', '/'],
                        ['Staking', '/staking'],
                        ['Governance', '/governance'],
                        ['About us & Contact', '/about'],
                    ].map(menuItem => <li key={menuItem[1]}>
                        <Link href={menuItem[1]}>
                            <a className={`text-xl font-medium px-4 py-4 hover:bg-primary-200 rounded-md transition-all duration-200 ${router.asPath === menuItem[1] ? 'bg-primary-200': ''}`}>
                                {menuItem[0]}
                            </a>
                        </Link>
                    </li>)}
                </ul>
            </div>
        </Container>
    </nav>
}

export default Header