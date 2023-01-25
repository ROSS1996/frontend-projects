import jsonFile from '../assets/data.json'
import { v4 as uniqueID } from 'uuid'

export default function Listings(props) {

    let filteredItems = jsonFile.filter(object => {
        for (const [filterKey, filterValue] of Object.entries(props.filters)) {
            if (filterValue.length !== 0 && !filterValue.every(val => object[filterKey].includes(val))) {
                return false;
            }
        }
        return true;
    });

    function setFilters(value, type) {
        props.updateFilters(value, type)
    }

    return (
        <div className='flex flex-col gap-6 bg-lightGrayishCyan py-20'>
            {filteredItems.map(job => (
                <div key={job.id} className={`flex flex-row justify-between items-center bg-white w-3/4 self-center p-6 rounded drop-shadow-lg ${job.featured ? 'border-l-4 border-desaturatedDark' : undefined}`}>
                    <div className='flex flex-row gap-5'>
                        <div><img src={job.logo} alt={job.company} /></div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row gap-2'>
                                <h1 className='font-bold text-desaturatedDark'>{job.company}</h1>
                                {job.new ? <span className='bg-desaturatedDark rounded-2xl py-1 px-2 text-white text-sm font-bold'>NEW!</span> : undefined}
                                {job.featured ? <span className='bg-vDarkGrayishCyan rounded-2xl py-1 px-2 text-white text-sm font-bold'>FEATURED</span> : undefined}
                            </div>
                            <h2 className='font-bold text-lg'>{job.position}</h2>
                            <div className='flex flex-row gap-3 text-darkGrayishCyan'>
                                <span>{job.postedAt}</span>
                                <span>.</span>
                                <span>{job.contract}</span>
                                <span>.</span>
                                <span>{job.location}</span>
                            </div>
                        </div>
                    </div>
                    <ul className='flex flex-row gap-3'>
                        <li
                            className='rounded bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold cursor-pointer active:bg-desaturatedDark active:text-white'
                            onClick={(e) => { setFilters(e.target.innerText, 'role') }}>
                            {job.role}
                        </li>
                        <li
                            className='rounded bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold cursor-pointer active:bg-desaturatedDark active:text-white'
                            onClick={(e) => { setFilters(e.target.innerText, 'level') }}>
                            {job.level}
                        </li>
                        {job.languages.length > 0 ? (
                            job.languages.map((language, uniqueID) => (
                                <li
                                    key={uniqueID} className='rounded bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold cursor-pointer active:bg-desaturatedDark active:text-white'
                                    onClick={(e) => { setFilters(e.target.innerText, 'languages') }}>
                                    {language}
                                </li>
                            ))
                        ) : undefined}
                        {job.tools.length > 0 ? (
                            job.tools.map((tool, uniqueID) => (
                                <li
                                    key={uniqueID} className='rounded bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold cursor-pointer active:bg-desaturatedDark active:text-white'
                                    onClick={(e) => { setFilters(e.target.innerText, 'tools') }}>
                                    {tool}
                                </li>
                            ))
                        ) : undefined}
                    </ul>
                </div>
            ))}
        </div >
    )
}