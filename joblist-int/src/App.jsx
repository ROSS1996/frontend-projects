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
    const updatedFilters = { ...filters };
    if (type === 'all') {
      updatedFilters.role = [],
        updatedFilters.level = [],
        updatedFilters.languages = [],
        updatedFilters.tools = []
    } else {
      switch (remove) {
        case true:
          updatedFilters[type] = updatedFilters[type].filter(val => val !== value);
          break
        case false:
          !updatedFilters[type].includes(value) ? updatedFilters[type] = [...updatedFilters[type], value] : false
          break
      }
    }
    setFilters(updatedFilters);
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
