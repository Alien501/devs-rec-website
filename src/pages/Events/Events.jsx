import React, {useEffect} from "react";

import ContestCard from "../../components/ContestCard/ContestCard";

import img1 from '../../assets/tech-xplore.jpg'
import img2 from '../../assets/webinar-1.jpg'

export default function Events() {
    useEffect(() => {
        window.scroll(0, 0)
    })
    
    return(
        <section className="contest-container">
        <div className="section-head">
            <h1>
                🎁 Events 🎁
            </h1>
        </div>
        <div className="section-explainer">
            Join and <span>learn</span> things in interactive way
        </div>
        <div className="contest-cards-container">
            <ContestCard btnName={'Register Now'} contestPoster={img1} contestRegistrationLink={'#'}/>
            <ContestCard btnName={'Register Now'} contestPoster={img2} contestRegistrationLink={'https://go.d3v.gg/game-dev-webinar'}/>
        </div>
    </section>
    )
}