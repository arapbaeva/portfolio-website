import React from 'react';
import s from '../../App.module.css'
import style from './Portfolio.module.css'
import IMG from '../../assets/bgphoto_.png'


type DataType = {
    id:number,
    image: string,
    title: string,
    github: string,
    demo: string
}
export const Portfolio = () => {

const data: DataType[] = [
    {
        id: 1,
        image: IMG,
        title: 'Social Network',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 2,
        image: IMG,
        title: 'Friday Project',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    },
    {
        id: 3,
        image: IMG,
        title: 'Bolot Sam',
        github: 'https://github.com',
        demo: 'https://dribbble.com'
    }
]
    return (
        <section id={'portfolio'}>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className={`${s.container} ${style.portfolioContainer}`}>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className={style.portfolioItem}>
                                <div className={style.portfolioItemImage}>
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className={style.portfolioItemCta}>
                                    <a href={github} className={s.btn} target='_blank'>Github</a>
                                    <a href={demo} className={`${s.btn} ${s.btnPrimary}`} target='_blank'>live
                                        Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

