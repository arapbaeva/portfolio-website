import React from 'react';
import s from '../../App.module.css'
import style from './Experience.module.css'
import {BsPatchCheckFill} from "react-icons/bs";

export const Experience = () => {
    return (
        <section id={'experience'}>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className={`${s.container} ${style.experienceContainer}`}>
                <div className={style.experienceFrontend}>
                    <div className={style.experienceContent}>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>Redux</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>TypeScript</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>REST API</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>Material UI</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>SASS</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>Axios</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>Formik</h4>
                            </div>
                        </article>
                        <article className={style.experienceDetails}>
                            <BsPatchCheckFill className={style.experienceDetailIcon}/>
                            <div>
                                <h4>Jest</h4>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

