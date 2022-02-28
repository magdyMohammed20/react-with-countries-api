import React from 'react'
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'

function Details() {
    const navigate = useNavigate()

    // Use useLocation State To Get Country Details Without Passing Props
    const location = useLocation()
    const selectedCountry = location.state.country

    console.log(selectedCountry)
    const goHome = () => {
        navigate('/')
    }
    return (
        <div>
            <Header />

            <div className="container mx-auto mb-8">
                <button className="px-8 py-2 bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-300 shadow-md rounded-lg" onClick={goHome}>
                    <i className="fa-solid fa-angle-left font-bold"></i> Go Back
                </button>
            </div>

            <div className="container flex mx-auto p-8 pr-0 pl-0">
                <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-1/2 pr-8" />

                <div className="p-8 pl-4">
                    <h2 className="font-bold text-2xl mb-8 dark:text-gray-200">{selectedCountry.name}</h2>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <p className="text-sm"><span className='dark:text-gray-400'>Native Name :</span> <span className="text-gray-700 dark:text-gray-300">{selectedCountry.nativeName}</span></p>
                        <p className="text-sm"><span className='dark:text-gray-400'>Population :</span> <span className="text-gray-700 dark:text-gray-300">{selectedCountry.population}</span></p>
                        <p className="text-sm"><span className='dark:text-gray-400'>Region :</span> <span className="text-gray-700 dark:text-gray-300">{selectedCountry.region}</span></p>
                        <p className="text-sm"><span className='dark:text-gray-400'>SubRegion :</span> <span className="text-gray-700 dark:text-gray-300">{selectedCountry.subregion}</span></p>

                        <p className="text-sm"><span className='dark:text-gray-400'>Capital :</span> <span className="text-gray-700 dark:text-gray-300">{selectedCountry.capital}</span></p>
                        <p className="text-sm"><span className='dark:text-gray-400'>Top L.Doamin : </span><span className="text-gray-700 dark:text-gray-300">{selectedCountry.topLevelDomain[0]}</span></p>
                        <p className="text-sm"><span className='dark:text-gray-400'>Currencies : </span><span className="text-gray-700 dark:text-gray-300">{selectedCountry.currencies.map(cur => cur.name + '(' + cur.symbol + ')')}</span></p>
                        <p className="text-sm"><span className='dark:text-gray-400'>Languages :</span> <span className="text-gray-700 dark:text-gray-300">{selectedCountry.languages.map(lang => lang.name)}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details