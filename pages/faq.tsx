import React from "react";
import {useRouter} from "next/router";
import faqs from "../content/faq.json";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";


const Faq = () => {
    const router = useRouter()

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <Container className="mx-auto max-w-screen-lg">
                    {faqs && faqs.length > 0 && <div className="">
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
                </Container>
            </main>

            <Footer/>
        </Layout>
    )
}

export default Faq
