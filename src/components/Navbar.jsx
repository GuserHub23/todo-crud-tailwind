import React from 'react'

const Navbar = ({dark, setDark}) => {

    const darkModeOn = () => {
        setDark(true)
    }
    const darkModeOff = () => {
        setDark(false)
    }
    const navStyle = {
        ligthMode : "min-w-full py-3 bg-sale-300 border-b border-stone-500 font-sans",
        darkMode : "min-w-full py-3 bg-slate-900 border-b border-blue-900 font-sans",
        textLight: "my-auto font-bold tracking-wide cursor-pointer flex",
        textDark: "my-auto text-white font-bold tracking-wide cursor-pointer flex",
        buttonLightModeOff : "py-2 px-3 border-solid rounded-l-3xl transition-all bg-stone-600 hover:bg-stone-800 ring-2 ring-blue-500 ring-inset",
        buttonLightModeOn : "py-2 px-3 border-solid rounded-l-3xl transition-all bg-gray-200 hover:bg-gray-400 ring-2 ring-blue-400 ring-inset",
        buttonRightModeOff : "py-2 px-3 border-solid rounded-r-3xl transition-all bg-gray-200 hover:bg-gray-400 ring-2 ring-blue-400 ring-inset",
        buttonRightModeOn : "py-2 px-3 border-solid rounded-r-3xl transition-all bg-stone-600 hover:bg-stone-800 ring-2 ring-blue-500 ring-inset"
    }
    return (
        <nav
            className={dark ? navStyle.darkMode : navStyle.ligthMode}
        >
            <div
                className="flex justify-between md:mx-5 text-center mx-3"
            >
                <a 
                    href="/"
                    className={dark ? navStyle.textDark : navStyle.textLight}
                >
                    <div
                        className="flex"
                    >
                        <i className="not-italic mr-3 text-xl">💥</i>
                        <p className="my-auto"> Tasks app</p>
                    </div>
                </a>
                <div
                    className="drop-shadow-xl"
                >
                    <button
                        className={dark ? navStyle.buttonLightModeOff : navStyle.buttonLightModeOn}
                        onClick={darkModeOff}
                    >
                        <p>☀</p>
                    </button>
                    <button
                        className={dark ? navStyle.buttonRightModeOn : navStyle.buttonRightModeOff}
                        onClick={darkModeOn}
                    >
                        <p>🌑</p>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
