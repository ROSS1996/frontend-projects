import jsonFile from '../assets/data.json'
import { v4 as uniqueID } from 'uuid'

export default function Listings() {
    return (
        <div className='flex flex-col gap-6 bg-lightGrayishCyan py-20'>
            {jsonFile.map(job => (
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
                        <li className='rounded bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold cursor-pointer active:bg-desaturatedDark active:text-white'>{job.role}</li>
                        <li className='rounded bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold cursor-pointer active:bg-desaturatedDark active:text-white'>{job.level}</li>
                        {job.tools.length > 0 ? (
                            job.tools.map((tool, uniqueID) => (
                                <li className='rounded bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold cursor-pointer active:bg-desaturatedDark active:text-white'>{tool}</li>
                            ))
                        ) : undefined}
                    </ul>
                </div>
            ))}
        </div>
    )
}