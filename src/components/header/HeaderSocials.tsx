import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from "react-icons/fa";
import style from './Header.module.css'
import {SiCodewars} from "react-icons/si";
import '../../App.module.css'


export const HeaderSocials = () => {
    return (
        <div className={style.headerSocials}>
            <a href="https://www.linkedin.com/in/aiym-ar-122a92238/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/arapbaeva" target="_blank"><FaGithub/></a>
            <a href="https://www.codewars.com/dashboard" target="_blank"><SiCodewars/></a>
        </div>
    )

};

