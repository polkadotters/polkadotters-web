import Layout from '../components/Layout'
import React, {useState} from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import ListboxFilter from "../components/Listbox";
import governance from "../content/governance.json";
import List from "../components/List";

const GovernancePage = () => {
    const [filter, setFilter] = useState('All');

    const filterFn = (item) => {
        switch (filter) {
            case "Kusama":
                return item.network === "Kusama";
            case "Polkadot":
                return item.network === "Polkadot";
            case "Other":
                return item.network !== "Kusama" && item.network !== "Polkadot";
            case "All":
            default:
                return true;

        }
    }

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <Container screenSize={'lg'}>
                    <div className="py-10 flex flex-col">
                        <h1 className={'text-5xl font-bold text-center'}>How Polkadotters vote?</h1>
                            <span className={'text-2xl'}>
                                As a passionate members of the ecosystem, we believe that validators should play an important role in an on-chain governance as well.
                                Here you can see how we vote and why!
                            </span>
                        <div className={"flex flex-row items-center gap-4"}>
                            <div className="flex flex-row items-center gap-3 lg:w-1/3 md:w-1/2 w-full">
                                <ListboxFilter className={'w-full'}
                                               label={'Show network'}
                                               onChange={setFilter}
                                               options={[
                                                   'All',
                                                   'Polkadot',
                                                   'Kusama',
                                                   'Other'/*,
                                                   ...governance.map(item => item.network)
                                                       .filter((value, index, self) => self.indexOf(value) === index)*/]}
                                />
                            </div>

                            {filter !== 'All' && <span>Showing only for <strong>{filter}</strong></span>}
                        </div>
                        <div className="py-5">
                            <List options={governance.filter(filterFn)}/>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer/>
        </Layout>
    )
}

export default GovernancePage