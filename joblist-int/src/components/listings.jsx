import React from 'react';
import { v4 as uniqueKey } from 'uuid';
import jsonFile from '../assets/data.json';

export default function Listings(props) {
  const { updateFilters } = props;

  const filteredItems = jsonFile.filter((object) => {
    for (const [filterKey, filterValue] of Object.entries(props.filters)) {
      if (filterValue.length !== 0 && !filterValue.every((val) => object[filterKey].includes(val))) {
        return false;
      }
    }
    return true;
  });

  function setFilters(value, type) {
    updateFilters(value, type);
  }

  return (
    <div className="bg-lightGrayishCyan flex flex-col gap-12 py-20 lg:gap-6 ">
      {filteredItems.map((job) => (
        <div key={job.id} className={`flex w-3/4 flex-col justify-between self-center rounded bg-white p-4 drop-shadow-lg md:gap-4 md:p-6 min-[1000px]:flex-row lg:items-center ${job.featured ? 'border-desaturatedDark border-l-4' : undefined}`}>
          <div className="flex flex-col gap-0 min-[600px]:flex-row md:items-center md:gap-4">
            <img src={job.logo} alt={job.company} className="absolute -top-10 block h-auto w-14 md:static md:w-1/5 lg:w-auto xl:h-auto" />
            <div className="flex flex-col">
              <div className="flex flex-row gap-2">
                <h1 className="text-desaturatedDark font-bold">{job.company}</h1>
                {job.new ? <span className="bg-desaturatedDark rounded-2xl p-1 text-xs font-bold text-white md:px-2 md:text-sm">NEW!</span> : null}
                {job.featured ? <span className="bg-vDarkGrayishCyan rounded-2xl p-1 text-xs font-bold text-white md:px-2 md:text-sm">FEATURED</span> : null}
              </div>
              <h2 className="text-base font-bold md:text-lg ">{job.position}</h2>
              <div className="text-darkGrayishCyan flex flex-row gap-3">
                <span className="text-xs md:text-base">{job.postedAt}</span>
                <span className="text-xs md:text-base">•</span>
                <span className="text-xs md:text-base">{job.contract}</span>
                <span className="text-xs md:text-base">•</span>
                <span className="text-xs md:text-base">{job.location}</span>
              </div>
            </div>
          </div>
          <ul className="flex flex-row flex-wrap gap-3">
            <li
              className="bg-lightGrayishCyanTwo text-desaturatedDark hover:bg-desaturatedDark cursor-pointer rounded py-1 px-2 text-sm font-bold hover:text-white md:text-base"
              onClick={(e) => { setFilters(e.target.innerText, 'role'); }}
            >
              {job.role}
            </li>
            <li
              className="bg-lightGrayishCyanTwo text-desaturatedDark hover:bg-desaturatedDark cursor-pointer rounded py-1 px-2 text-sm font-bold hover:text-white md:text-base"
              onClick={(e) => { setFilters(e.target.innerText, 'level'); }}
            >
              {job.level}
            </li>
            {job.languages.length > 0
              ? (
                job.languages.map((language) => (
                  <li
                    key={uniqueKey()}
                    className="bg-lightGrayishCyanTwo text-desaturatedDark hover:bg-desaturatedDark cursor-pointer rounded py-1 px-2 text-sm font-bold hover:text-white md:text-base"
                    onClick={(e) => { setFilters(e.target.innerText, 'languages'); }}
                  >
                    {language}
                  </li>
                ))
              )
              : null}
            {job.tools.length > 0
              ? (
                job.tools.map((tool) => (
                  <li
                    key={uniqueKey()}
                    className="bg-lightGrayishCyanTwo text-desaturatedDark hover:bg-desaturatedDark cursor-pointer rounded py-1 px-2 text-sm font-bold hover:text-white md:text-base"
                    onClick={(e) => { setFilters(e.target.innerText, 'tools'); }}
                  >
                    {tool}
                  </li>
                ))
              )
              : null}
          </ul>
        </div>
      ))}
    </div>
  );
}
