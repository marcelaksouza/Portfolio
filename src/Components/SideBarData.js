import React from '../../node_modules/react';
import * as AiIcons from '../../node_modules/react-icons/ai';
import * as IoIcons from '../../node_modules/react-icons/io';
import * as BsIcons from '../../node_modules/react-icons/bs';
import * as VscIcons from '../../node_modules/react-icons/vsc';
import * as RiIcons from '../../node_modules/react-icons/ri';


export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About Me',
        path: '/aboutMe',
        icon: <BsIcons.BsFillPersonLinesFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <IoIcons.IoIosRocket />,
        cName: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/blog',
        icon: <VscIcons.VscDebugConsole />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: < RiIcons.RiMailSendLine/>,
        cName: 'nav-text'
    }
]