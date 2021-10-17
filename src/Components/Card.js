import React from 'react'
import avatar from "./avatar.svg";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faPhoneSquareAlt,faGlobe,faHeart,faTrash,faPen } from '@fortawesome/free-solid-svg-icons'

const Card = () => {
    return (
        <div className="main-container">
            <section className="card-container">
                <section className="card-avatar">
                    <img src={avatar} alt="avatar"/>
                    <p>Jennie</p>
                </section>
                <section className="card-content-container">
                    <div><FontAwesomeIcon icon={faEnvelope}/><span>xyz@gmail.com</span></div>
                    <div><FontAwesomeIcon icon={faPhoneSquareAlt}/><span>+9746789877</span></div>
                    <div><FontAwesomeIcon icon={faGlobe}/><span>hildegard.org</span></div>

                </section>
                <section className="footer-container">
                    <FontAwesomeIcon icon={faHeart}/>
                    <FontAwesomeIcon icon={faPen}/>
                    <FontAwesomeIcon icon={faTrash}/>

                </section>
            </section>
            
            
        </div>
    )
}

export default Card
