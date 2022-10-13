import {BiCalendar} from "react-icons/bi";
import {CgDetailsMore} from "react-icons/cg";
import governanceIcons from "../content/governance-icons.json";
import {useState} from "react";

const ListItem = ({item}) => {
    const [details, showDetails] = useState(false);

    return <li key={item.id}>
        <a href="#" className="block hover:bg-gray-50" onClick={() => showDetails(!details)}>
            <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                    <p className="truncate text-lg font-medium text-indigo-600">{item.proposal}</p>
                    <div className="ml-2 flex flex-shrink-0">
                        <p className={`inline-flex rounded-full ${item.vote === 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} px-2 text-xs font-semibold leading-5`}>
                            {item.vote === 1 ? 'Yes' : 'No'}
                        </p>
                    </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                            <img alt={item.network} src={governanceIcons[item.network]}
                                 className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                            {item.network}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                            <CgDetailsMore className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                            {item.rationale}
                        </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <BiCalendar className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true"/>
                        <p>
                            <time dateTime={item.date}>{item.date}</time>
                        </p>
                    </div>
                </div>
            </div>
            {details && <div className={'p-5 bg-primary-50 border-t border-t-primary-100'}>
                {item.details}
            </div>}
        </a>
    </li>
}

export default function List({options}) {

    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-md">
            <ul role="list" className="divide-y divide-gray-200">
                {options.map((referendum, i) => <ListItem key={i} item={referendum}/>)}
            </ul>
        </div>
    )
}
