import React from 'react'
import avatar from "./avatar.svg";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import {faPhoneSquareAlt,faGlobe,faTrash,faPen,faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'


const Card = (props) => {
    console.log (typeof props.text)
    return (
        <>
        {typeof props.text!='undefined'?(
        <div className="main-container">
            <section className="card-container">
                <section className="card-avatar">
                    <img src={avatar} alt="avatar"/>
                </section>            
                <section className="card-content-container">
                    <p>{props.text.name}</p>
                    <div><FontAwesomeIcon className="icon" icon={faEnvelope}/><span>{props.text.email}</span></div>
                    <div><FontAwesomeIcon className="icon" icon={faPhoneSquareAlt}/><span>{props.text.phone}7</span></div>
                    <div><FontAwesomeIcon className="icon" icon={faGlobe}/><span>http://{props.text.website}</span></div>
                </section>
                <section className="footer-container">
                    <div className="br-right"><FontAwesomeIcon icon={farHeart}/></div>
                    <div className="br-right"><FontAwesomeIcon icon={faPen}/></div>
                    <div><FontAwesomeIcon icon={faTrash}/></div>
                </section>
            </section> 
        </div>)
        :(" ")}
        </>
    )
}

export default Card
