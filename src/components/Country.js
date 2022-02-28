import React from 'react'

function Country(props) {
    const { name, capital, region, flag, population } = props
    return (
        <div className="container rounded-lg shadow-lg bg-white dark:bg-gray-700 dark:text-white pb-4">
            <img src={flag} alt={name} className="w-full h-48 rounded-tl-lg rounded-tr-lg" />
            <div className="p-4">
                <h1 className="font-bold mb-4">{name.length <= 27 ? name : name.slice(0, 27) + '..'}</h1>
                <p className="text-sm">Capital : <span className="text-gray-700 dark:text-gray-300">{capital}</span></p>
                <p className="text-sm">Capital : <span className="text-gray-700 dark:text-gray-300">{capital}</span></p>
                <p className="text-sm">Capital : <span className="text-gray-700 dark:text-gray-300">{capital}</span></p>
            </div>
        </div>
    )
}

export default Country