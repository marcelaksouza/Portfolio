import React from '../../node_modules/react';
import * as AiIcons from '../../node_modules/react-icons/ai';
// import * as IoIcons from '../../node_modules/react-icons/io';
// import * as BsIcons from '../../node_modules/react-icons/bs';
// import * as VscIcons from '../../node_modules/react-icons/vsc';
import * as RiIcons from '../../node_modules/react-icons/ri';
import * as GiIcons from '../../node_modules/react-icons/gi';
import * as FaIcons from '../../node_modules/react-icons/fa';
import * as BiIcons from '../../node_modules/react-icons/bi';

// BiNews
// Home - AiIcons.AiFillHome
// User - BsIcons.BsFillPersonLinesFill
// Mail - RiIcons.RiMailSendLine
// Rocket - IoIcons.IoIosRocket 
// Debug console - VscIcons.VscDebugConsole
export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <RiIcons.RiSpaceShipFill />,
        cName: 'nav-text'
    },
    {
        title: 'About Me',
        path: '/aboutMe',
        icon: <GiIcons.GiAstronautHelmet/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiFillCode />,
        cName: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <BiIcons.BiNews />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: < FaIcons.FaSatelliteDish/>,
        cName: 'nav-text'
    }
]