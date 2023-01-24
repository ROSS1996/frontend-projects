import jsonFile from '../assets/data.json'
import { v4 as uniqueID } from 'uuid'

export default function Listings() {
    return (
        <div className='flex flex-col gap-6 bg-gray-100 py-5'>
            {jsonFile.map(job => (
                <div key={job.id} className={`flex flex-row justify-between items-center bg-white w-1/2 self-center p-2 rounded drop-shadow-lg ${job.featured ? 'border-l-4 border-teal-600' : undefined}`}>
                    <div className='flex flex-row gap-2'>
                        <div><img src={job.logo} alt={job.company} /></div>
                        <div className='flex flex-col'>
                            <div className='flex flex-row gap-2'>
                                <h1>{job.company}</h1>
                                {job.new ? <span className='bg-teal-600 rounded-2xl p-1 px-2 text-white text-sm font-bold'>NEW!</span> : undefined}
                                {job.featured ? <span className='bg-gray-800 rounded-2xl p-1 px-2 text-white text-sm font-bold'>FEATURED</span> : undefined}
                            </div>
                            <h2>{job.position}</h2>
                            <div className='flex flex-row gap-1'>
                                <span>{job.postedAt}</span>
                                <span>.</span>
                                <span>{job.contract}</span>
                                <span>.</span>
                                <span>{job.location}</span>
                            </div>
                        </div>
                    </div>
                    <ul className='flex flex-row gap-3'>
                        <li className='rounded bg-gray-100 py-1 px-2 text-teal-600 font-bold'>{job.role}</li>
                        <li className='rounded bg-gray-100 py-1 px-2 text-teal-600 font-bold'>{job.level}</li>
                        {job.tools.length > 0 ? (
                            job.tools.map((tool, uniqueID) => (
                                <li className='rounded bg-gray-100 py-1 px-2 text-teal-600 font-bold'>{tool}</li>
                            ))
                        ) : undefined}
                    </ul>
                </div>
            ))}
        </div>
    )
}