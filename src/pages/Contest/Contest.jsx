import React, { useEffect } from "react";

import './Contest.css';
import ContestCard from "../../components/ContestCard/ContestCard";

import webImg from '../../assets/web-dev-contest.jpg'

export default function Contest() {
    useEffect(() => {
        window.scroll(0, 0)
    })
    
    return(
        <section className="contest-container">
        <div className="section-head">
            <h1>
                🏆 Contests 🏆
            </h1>
        </div>
        <div className="section-explainer">
            Compete with the <span>community</span> for fun
        </div>
        <div className="contest-cards-container">
            <ContestCard btnName={'Participate'} contestPoster={webImg} contestRegistrationLink={'https://forms.gle/3w2fkBMr7Y3qWxzg7'}/>
            <ContestCard btnName={'Participate'} contestPoster={webImg} contestRegistrationLink={'https://forms.gle/3w2fkBMr7Y3qWxzg7'}/>
        </div>
    </section>
    )
}