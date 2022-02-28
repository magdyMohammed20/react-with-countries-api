import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Country from '../components/Country'

function Home() {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetchCountries()
    }, [])

    const fetchCountries = async () => {
        const response = await fetch('https://restcountries.com/v2/all')
        const data = await response.json()
        await setCountries(data)
        await setIsLoading(false)
    }

    // For Search Input Change
    const searchCountry = async (term) => {

        setIsLoading(true)
        // If Search Country Length Less Than 3 Or Empty Will Return
        // Else Will Fetch Data Of Searched Country
        if (term.trim().length < 3 || term.trim() == '') {
            setIsLoading(false);
            return;
        }

        const searchedCountry = await fetch(`https://restcountries.com/v2/name/${term}`)
        const data = await searchedCountry.json()
        await setCountries(data)
        setIsLoading(false)

    }

    // For Select Region Change
    const filterByRegion = async (region) => {
        setIsLoading(true)
        // If Select 'Filter By Region' Return
        if (region === 'all') {
            fetchCountries()
            setIsLoading(false)
            return;
        }

        // Else Fetch Depending On Selected Region
        const filteredRegion = await fetch(`https://restcountries.com/v2/region/${region}`)
        const data = await filteredRegion.json()
        await setCountries(data)
        setIsLoading(false)
    }


    return (
        <div className="bg-gary-100 dark:bg-gray-800 dark:text-white">
            <Header />

            <div className="container flex mx-auto mb-16">
                <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"></i>
                <input
                    type="text"
                    placeholder="Search For Country"
                    className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700 focus:outline-0"
                    onChange={term => searchCountry(term.target.value)}
                />

                <select className='ml-auto my-2 p-2 shadow-md rounded-md font-medium dark:bg-gray-700 dark:text-gray-200 focus:outline-none cursor-pointer' onChange={term => filterByRegion(term.target.value)}>
                    <option value="all">All</option>
                    <option value='africa'>Africa</option>
                    <option value='asia'>Asia</option>
                    <option value='americas'>America</option>
                    <option value='europe'>Europe</option>
                    <option value='oceania'>Oceania</option>
                </select>
            </div>

            <div className="container grid grid-cols-4 gap-16 mx-auto">
                {
                    isLoading ? <div>Loading....</div> : (
                        countries !== null && countries.map((country, index) => <Link to={{ pathname: 'details' }} state={{ country }} key={index}>
                            <Country
                                name={country.name}
                                capital={country.capital}
                                region={country.region}
                                flag={country.flag}
                                population={country.population}
                            />
                        </Link>)
                    )
                }
            </div>
        </div>
    )
}

export default Home