import React from 'react';
import s from '../../App.module.css'
import style from './Contact.module.css'
import {MdOutlineEmail} from "react-icons/md";
import {BsTelegram, BsWhatsapp} from "react-icons/bs";

export const Contact = () => {
    return (
<section id={'contact'}>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className={`${s.container} ${style.contactContainer}`}>
        <div className={style.contactOptions}>
            <article className={style.contactOption}>
                <MdOutlineEmail className={style.contactOptionIcon}/>
                <h4>Email</h4>
                <h5>aiymvector@gmail.com</h5>
                <a href="mailto:aiymvector@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className={style.contactOption}>
                <BsTelegram className={style.contactOptionIcon}/>
                <h4>Telegram</h4>
                <h5>aiymvector</h5>
                <a href="https://t.me/vectoromela" target='_blank'>Send a message</a>
            </article>
            <article className={style.contactOption}>
                <BsWhatsapp className={style.contactOptionIcon}/>
                <h4>WhatsApp</h4>
                <h5>+996704777050</h5>
                <a href="https://api.whatsapp.com/send?phone+996704777050" target='_blank'>Send a message</a>
            </article>
        </div>
        <form action="">
            <input type="text" name={'name'} placeholder={'Your full Name'} required/>
            <input type="email" name={'email'} placeholder={'Your Email'} required/>
            <textarea name="message"  rows={7} placeholder={'your Message'} required></textarea>
            <button type={"submit"} className={`${s.btn} ${s.btnPrimary}`}>Send Message</button>
        </form>
    </div>
</section>
    );
};

