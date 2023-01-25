import { useState } from "react"
import Filter from "./components/filter";
import Listings from "./components/listings"

function App() {
  const [filters, setFilters] = useState(
    {
      role: [],
      level: [],
      languages: [],
      tools: []
    }
  )


  function updateFilters(value, type, remove = false) {
    if (remove) {
      if (type === 'all') {
        const updatedFilters = {
          role: [],
          level: [],
          languages: [],
          tools: []
        };
        setFilters(updatedFilters);
      } else {
        const updatedFilters = { ...filters };
        updatedFilters[type] = updatedFilters[type].filter(val => val !== value);
        setFilters(updatedFilters);
      }
    } else {
      if (type === 'role') {
        if (!filters.role.includes(value)) {
          // Create a new object with the updated array
          const updatedFilters = {
            ...filters,
            role: [...filters.role, value],
          };
          // Call setFilters with the new object
          setFilters(updatedFilters);
        }
      }
      if (type === 'level') {
        if (!filters.level.includes(value)) {
          // Create a new object with the updated array
          const updatedFilters = {
            ...filters,
            level: [...filters.level, value],
          };
          // Call setFilters with the new object
          setFilters(updatedFilters);
        }
      }
      if (type === 'language') {
        if (!filters.languages.includes(value)) {
          // Create a new object with the updated array
          const updatedFilters = {
            ...filters,
            languages: [...filters.languages, value],
          };
          // Call setFilters with the new object
          setFilters(updatedFilters);
        }
      }
      if (type === 'tool') {
        if (!filters.tools.includes(value)) {
          // Create a new object with the updated array
          const updatedFilters = {
            ...filters,
            tools: [...filters.tools, value],
          };
          // Call setFilters with the new object
          setFilters(updatedFilters);
        }
      }
    }
  }


  return (
    <div className="h-screen font-leagueSpartan">
      <div className="h-1/5 bg-header-desktop bg-no-repeat bg-cover bg-desaturatedDark">
        < Filter filters={filters} updateFilters={updateFilters} />
      </div>
      < Listings filters={filters} updateFilters={updateFilters} />
    </div>
  )
}

export default App
