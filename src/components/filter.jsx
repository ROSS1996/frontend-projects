import React from 'react';
import { v4 as uniqueKey } from 'uuid';

export default function Filter(props) {
  const { filters, updateFilters } = props;

  function removeFilters(value, type) {
    updateFilters(value, type, true);
  }

  if (filters.role.length > 0 || filters.level.length > 0 || filters.languages.length > 0 || filters.tools.length > 0) {
    return (
      <div className="grid-cols-filter relative left-[12.5%] top-[80%] grid w-3/4 justify-between rounded bg-white p-5 drop-shadow-sm">
        <ul className="flex flex-row gap-4">
          {
                        Object.entries(filters).map(([key, values]) => (
                          values.map((value) => (
                            <li key={uniqueKey()} className="flex flex-row gap-0">
                              <p className="bg-lightGrayishCyanTwo text-desaturatedDark rounded-l py-1 px-2 text-sm font-bold md:text-base">{value}</p>
                              <button className="bg-desaturatedDark hover:bg-vDarkGrayishCyan cursor:pointer w-8 rounded-r text-sm font-bold text-white md:text-base" onClick={() => removeFilters(value, key)}>X</button>
                            </li>
                          ))
                        ))
                    }
        </ul>
        <p className="text-darkGrayishCyan hover:text-desaturatedDark cursor-pointer text-sm font-bold underline-offset-2 hover:underline md:text-base" onClick={() => removeFilters(undefined, 'all')}>Clear</p>
      </div>
    );
  }
}
