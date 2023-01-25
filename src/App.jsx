import React from 'react';
import Filter from './components/filter';
import Listings from './components/listings';

function App() {
  const [filters, setFilters] = React.useState(
    {
      role: [],
      level: [],
      languages: [],
      tools: [],
    },
  );

  const updateFilters = React.useCallback((value, type, remove = false) => {
    const updatedFilters = { ...filters };
    if (type === 'all') {
      updatedFilters.role = [];
      updatedFilters.level = [];
      updatedFilters.languages = [];
      updatedFilters.tools = [];
    } else {
      if (remove === true) {
        updatedFilters[type] = updatedFilters[type].filter((val) => val !== value);
      }
      if (remove === false && !updatedFilters[type].includes(value)) {
        updatedFilters[type] = [...updatedFilters[type], value];
      }
    }
    setFilters(updatedFilters);
  }, [filters]);

  return (
    <div className="font-leagueSpartan bg-lightGrayishCyan  h-screen">
      <div className="bg-header-mobile bg-desaturatedDark md:bg-header-desktop h-1/5 bg-cover bg-no-repeat">
        <Filter filters={filters} updateFilters={updateFilters} />
      </div>
      <Listings filters={filters} updateFilters={updateFilters} />
    </div>
  );
}

export default App;
