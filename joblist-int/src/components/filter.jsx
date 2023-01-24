import { v4 as uniqueID } from "uuid"


export default function Filter(props) {
    let filterList = props.filters

    function showFilters(value) {
        console.log(filterList)
    }

    function clearFilters() {
        props.updateFilters(undefined, 'clear')
    }

    if (filterList.role.length > 0 || filterList.level.length > 0 || filterList.languages.length > 0 || filterList.tools.length > 0) {
        return (
            <div className="grid grid-cols-filter justify-between w-3/4 relative left-[12.5%] top-[80%] bg-white p-5 rounded drop-shadow-sm">
                <ul className="flex flex-row gap-4">
                    {
                        Object.entries(filterList).map(([key, values]) => (
                            values.map((value, uniqueID) => (
                                <li key={uniqueID} className="flex flex-row gap-0">
                                    <p className='rounded-l bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold'>
                                        {value}
                                    </p>
                                    <button className="rounded-r text-white bg-desaturatedDark hover:bg-vDarkGrayishCyan w-8 cursor:pointer font-bold">X</button>
                                </li>
                            ))
                        ))
                    }
                </ul>
                <p className="text-desaturatedDark font-bold cursor-pointer hover:underline" onClick={() => clearFilters()}>Clear</p>
            </div>
        )
    }
}