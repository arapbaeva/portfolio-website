import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {FaGithub} from "react-icons/fa";
import style from './Header.module.css'


export const HeaderSocials = () => {
    return (
        <div className={style.headerSocials}>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><FaGithub/></a>
        </div>
    )

};

