import React from 'react'
import style from './Header.module.css'
import {CTA} from './CTA'
import ME from '../../assets/bgphoto_ _.png'
import {HeaderSocials} from "./HeaderSocials";
import s from "../../App.module.css"


export const Header = () => {
    return (
        <header>
            <div className={`${s.container} ${style.headerContainer}`}>
                <h5>Hello, I'm</h5>
                <h1>Aiym</h1>
                <h5 className={style.textLight}>Frontend Developer</h5>
                <CTA/>
                <HeaderSocials/>
        <div className={style.me}>
            <img src={ME} alt="Me"/>
        </div>
                <a href="#contact" className={style.scrollDown}>Scroll Down</a>
            </div>
        </header>
    );
};
