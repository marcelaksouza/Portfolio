import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SideBarData } from "./SideBarData"
import './SideBar.css';
import { IconContext } from 'react-icons'

function SideBar() {
    const [sidebar, setSideBar] = useState(true)

    const showMenu = () => setSideBar(!sidebar);

    return (
        // set the color of the icons to green neon
        <IconContext.Provider value={{color: '#39FF14'}}>

            <div className='navbar'>
          <Link to='#' className='menu-bars'>
            {/* sandwich icon on click activate the function showSidebar
            if the sidebar is true then classnNme is hidden if not then its '' */}
            <FaIcons.FaBars className={sidebar ? 'hidden' : ''} onClick={showMenu} />
          </Link>
        </div>
        {/* If sideBar is true then className is nav-menu active if false className is then is showSidebar*/}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          {/* all the itens in the list activate the function showSidebar */}
          <ul className='nav-menu-items' onClick={showMenu}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                {/* close Icon */}
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {/* Map the itens in side bar data and display in a list */}
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </IconContext.Provider>
    )
}

export default SideBar
