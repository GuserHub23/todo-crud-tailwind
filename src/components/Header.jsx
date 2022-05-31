import React from 'react'

const Header = ({dark}) => {

    const style = {
      darkMode: "text-center text-white text-5xl my-10 uppercase font-black",
      lightMode: "text-center text-5xl my-10 uppercase font-black"
    }
    return (
      <header
        className={dark ? style.darkMode : style.lightMode}
      >
        <h2>Create a new task</h2>
      </header>
  )
}

export default Header
