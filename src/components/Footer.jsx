import React from 'react'

const Footer = ({dark}) => {

    const styles = {
        ligthMode : "w-4/5 py-3 bg-sale-300 border-t border-stone-500 font-sans",
        darkMode : "w-4/5 py-3 bg-slate-900 border-t border-blue-900 font-sans",
        h2DarkMode : "font-black text-2xl text-center text-slate-200",
        h2LightMode : "font-black text-2xl text-center",
        labelDarkMode: "block text-gray-400 uppercase font-bold my-auto cursor-pointer",
        labelLightMode : "block text-gray-800 uppercase font-bold my-auto cursor-pointer"
    }

    return (
        <footer
            className="min-w-full flex justify-center mt-10"
        >
            <div
                className={dark ? styles.darkMode : styles.ligthMode}        
            >
                <h2 
                    className={dark ? styles.h2DarkMode : styles.h2LightMode}
                >
                    contact
                </h2>
                <div 
                    className="flex justify-center"
                >
                    <a 
                        href="https://github.com/GuserHub23"
                        className="hover:cursor-pointer py-2 px-3"
                        target="_blank"
                    >
                        <label
                            className={dark ? styles.labelDarkMode : styles.labelLightMode}
                        >
                            Github
                        </label>
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/juan-gomez-837a3321a/"
                        className="hover:cursor-pointer py-2 px-3"
                        target="_blank"
                    >
                        <label
                            className={dark ? styles.labelDarkMode : styles.labelLightMode}
                        >
                            LinkedIn
                        </label>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;