import React from 'react';
import s from '../../App.module.css'
import style from './Portfolio.module.css'
import IMG1 from '../../assets/social.jpg'
import IMG2 from '../../assets/card.jpg'
import IMG3 from '../../assets/task.jpg'


type DataType = {
    id: number,
    image: string,
    title: string,
    github: string,
    demo: string
}
export const Portfolio = () => {

    const data: DataType[] = [
        {
            id: 1,
            image: IMG1,
            title: 'Social Network',
            github: 'https://github.com/arapbaeva/samurai-way-main',
            demo: 'https://arapbaeva.github.io/samurai-way-main/'
        },
        {
            id: 2,
            image: IMG2,
            title: 'Cards Trainer (with team)',
            github: 'https://github.com/ksenia-eremenko/cards-friday',
            demo: 'https://ksenia-eremenko.github.io/cards-friday/#/packs'
        },
        {
            id: 3,
            image: IMG3,
            title: 'Task Manager Desk',
            github: 'https://github.com/arapbaeva/task-manager-desk',
            demo: 'https://arapbaeva.github.io/'
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

