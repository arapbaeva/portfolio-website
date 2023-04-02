import React from 'react';
import style from './Footer.module.css'

export const Footer = () => {
    return (
        <footer>
            <ul className={style.permalinks}>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#experience"}>Experience</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>

            <div className={style.footerCopyRight}>
                <small>Copyright &copy; 2023. All Rights Reserved.</small>
            </div>
        </footer>
    );
};

