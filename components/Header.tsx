import Link from "next/link";
import {LINKS} from "../constants";
import {FaDiscord, FaMedium, FaTelegramPlane, FaTwitter} from "react-icons/fa";
import {MdAlternateEmail} from "react-icons/md";
import Container from "./Container";
import Logo from '../assets/images/logo-white.svg';
import Image from "next/image";
import {useRouter} from "next/router";
import routes from "../routes";
import {Disclosure, Menu, Transition} from '@headlessui/react';
import {BiMenu, BiX} from "react-icons/bi";
import {Fragment} from "react";
import {classNames} from "../utils/css";

const icons = {
    medium: <FaMedium/>,
    email: <MdAlternateEmail/>,
    twitter: <FaTwitter/>,
    telegram: <FaTelegramPlane/>,
    discord: <FaDiscord/>
}

const Header = () => {
    const router = useRouter()
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

            <Disclosure as="nav" className="py-2 px-1">
                {({open}) => (
                    <>
                        <div className="mx-auto px-2">
                            <div className="relative flex items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center p-2 rounded-md text-primary-400 hover:text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <BiX className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <BiMenu className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <Container className={'flex flex-row justify-center lg:justify-between items-center'}>
                                    <div className="flex-shrink-0 flex items-center">
                                        <Link href={'/'}>
                                            <a><Image {...Logo} />
                                            </a></Link>
                                    </div>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4 flex-row items-end">
                                            <ul className="menu flex flex-row gap-4">
                                                {routes.map(menuItem => <li key={menuItem[1]}>
                                                    <Link href={menuItem[1]}>
                                                        <a className={`rounded-md py-2 px-3 inline-flex items-center text-sm font-medium ${router.asPath === menuItem[1] ? 'bg-gray-200 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'}`}>
                                                            {menuItem[0]}
                                                        </a>
                                                    </Link>
                                                </li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </Container>

                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95">

                                            <Menu.Items
                                                className="origin-top-right z-20 absolute right-0 mt-2 w-48 rounded-md border border-primary-300 dark:border-primary-700 shadow-lg py-1 bg-primary-100 dark:bg-primary-800 text-sm text-primary-700 dark:text-primary-100">
                                                <>
                                                    <Menu.Item>
                                                        {routes.map(menuItem => <li key={menuItem[1]}>
                                                            <Link href={menuItem[1]}>
                                                                <a className={`rounded-md py-2 px-3 inline-flex items-center text-sm font-medium ${router.asPath === menuItem[1] ? 'bg-gray-200 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'}`}>
                                                                    {menuItem[0]}
                                                                </a>
                                                            </Link>
                                                        </li>)}
                                                    </Menu.Item>

                                                    <div className="flex border-b dark:border-primary-700"></div>

                                                </>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {routes.map((item) => (
                                <Disclosure.Button
                                    key={item[0]}
                                    as="a"
                                    href={item[1]}
                                    className={classNames(
                                        router.asPath === item[1] ? 'bg-primary-900 text-white' : 'text-primary-300 hover:bg-primary-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={router.asPath === item[1]  ? 'page' : undefined}
                                >
                                    {item[0]}
                                </Disclosure.Button>
                            ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </Container>
    </nav>
}

export default Header