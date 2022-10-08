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

    return (
        <Layout>
            <Header/>
            <main className={'flex-1 flex flex-col '}>
                <Container screenSize={'md'}>
                    <div className="py-10 flex flex-col">

                        <div className={"flex flex-row items-center gap-4"}>
                            <div className="flex flex-row items-center gap-3 lg:w-1/3 md:w-1/2 w-full">
                                <ListboxFilter className={'w-full'}
                                               label={'Show network'}
                                               onChange={setFilter}
                                               options={['All', ...governance.map(item => item.network)
                                                   .filter((value, index, self) => self.indexOf(value) === index)]}
                                />
                            </div>

                            {filter !== 'All' && <span>Showing only for <strong>{filter}</strong></span>}
                        </div>
                        <div className="py-5">
                            <List options={governance.filter(item => filter === 'All' || item.network === filter)}/>
                        </div>
                    </div>
                </Container>
            </main>

            <Footer/>
        </Layout>
    )
}

export default GovernancePage