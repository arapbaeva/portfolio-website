import React from 'react';
import style from './Header.module.css'
import s from '../../App.module.css'
import '../../App.module.css'
import CV from '../../assets/cv.pdf';


export const CTA = () => {
    return (
        <div className={style.cta}>
            <a href={CV} download className={s.btn}>Download CV</a>
            <a href="src/components/header/CTA#contact" className={`${s.btn} ${s.btnPrimary}`}>Let's Talk</a>
        </div>
    );
};

