import React, { useState } from 'react'

function Header() {
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')

    const toggleDarkMode = () => {
        if (mode) {
            document.documentElement.classList.add('dark')
            setToggleBtn('<i class="fas fa-moon"></i> Dark Mode')
            setMode(current => current = !current)
        } else {
            document.documentElement.classList.remove('dark')
            setToggleBtn('<i class="far fa-sun"></i> Light Mode')
            setMode(current => current = !current)
        }
    }

    return (

        <div className="shadow-md py-5 px-3 bg-white dark:bg-gray-800 dark:text-white mb-12">
            <div className="flex container mx-auto">
                <h1 className="font-bold text-xl">WHRE IN THE WORLD</h1>
                <div className="ml-auto font-medium">
                    <button onClick={toggleDarkMode} dangerouslySetInnerHTML={{ __html: toggleBtn }}></button>
                </div>
            </div>
        </div>
    )
}

export default Header