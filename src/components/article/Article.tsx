import React from 'react';
import style from "../portfolio/Portfolio.module.css";
import IMG from "../../assets/bgphoto_.png";
import s from "../../App.module.css";
type ArticlePropsType={
    img:string
}

const Article = ({img}:ArticlePropsType) => {
    return (
        <article className={style.portfolioItem}>
            <div className={style.portfolioItemImage}>
                <img src={img} alt=""/>
            </div>
            <h3>This is a portfolio item title</h3>
            <div className={style.portfolioItemCta}>
                <a href="https://github.com" className={s.btn} target='_blank'>Github</a>
                <a href="https://dribbble.com" className={`${s.btn} ${s.btnPrimary}`} target='_blank'>live
                    Demo</a>
            </div>
        </article>
    )
};

export default Article;