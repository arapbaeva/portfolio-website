import React, {useState} from 'react';
import './Nav.module.css'
import {AiOutlineHome} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import '../../App.module.css'

export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')}
               className={activeNav === '#' ? 'active' : ''}><BiBook/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
               className={activeNav === '#' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')}
               className={activeNav === '#' ? 'active' : ''}><BiMessageSquareDetail/></a>
        </nav>
    );
};

