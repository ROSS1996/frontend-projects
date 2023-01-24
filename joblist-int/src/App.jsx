import Listings from "./components/listings"

function App() {


  return (
    <div className="h-screen font-leagueSpartan">
      <div className="h-1/5 bg-header-desktop bg-no-repeat bg-cover bg-desaturatedDark">
        <div className="grid grid-cols-filter justify-between w-3/4 relative left-[12.5%] top-[80%] bg-white p-5 rounded drop-shadow-sm">
          <ul className="flex flex-row gap-4">
            <li className="flex flex-row gap-0">
              <p className='rounded-l bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold'>
                Frontend
              </p>
              <button className="rounded-r text-white bg-desaturatedDark hover:bg-vDarkGrayishCyan w-8 cursor:pointer font-bold">X</button>
            </li>
            <li className="flex flex-row gap-0">
              <p className='rounded-l bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold'>
                CSS
              </p>
              <button className="rounded-r text-white bg-desaturatedDark hover:bg-vDarkGrayishCyan w-8 cursor:pointer font-bold">X</button>
            </li>
            <li className="flex flex-row gap-0">
              <p className='rounded-l bg-lightGrayishCyanTwo py-1 px-2 text-desaturatedDark font-bold'>
                React
              </p>
              <button className="rounded-r text-white bg-desaturatedDark hover:bg-vDarkGrayishCyan w-8 cursor:pointer font-bold">X</button>
            </li>
          </ul>
          <p className="text-desaturatedDark font-bold cursor-pointer hover:underline">Clear</p>
        </div>
      </div>
      < Listings />
    </div>
  )
}

export default App
