import React, { useEffect } from "react";

import './Podcast.css';

import PodcastCard from "../../components/PodcastCard/PodcastCard";
import YoutubeCard from "../../components/YoutubeCard/YoutubeCard";
import LinkedinCard from "../../components/LinkedinCard/LinkedinCard";
import BorderImage from "../../components/BorderImage/BorderImage";

export default function Podacast() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return(
        <section className="podcast-page-container">
            <div className="section-head">
                <h1>
                    🎤 Podcasts 🎤
                </h1>
            </div>
            <div className="section-explainer">
                Listen to the <span>community speaking</span> things related to tech and career
            </div>
            <div className="podcast-page-content-container">
                <PodcastCard podcastEmbedLink={'https://open.spotify.com/embed/episode/185K2NcNPQ04aTS4T5jM7t?utm_source=generator'} />
                <PodcastCard podcastEmbedLink={'https://open.spotify.com/embed/episode/7juTmneZuN82wVf53dYCiB?utm_source=generator'} />
                <PodcastCard podcastEmbedLink={'https://open.spotify.com/embed/episode/3rwI3Y8YvIt2YxepmuCxD7?utm_source=generator'} />
                <BorderImage />
                <h1>🏢 Career Talks 🏢</h1>
                <YoutubeCard link={"https://www.youtube.com/embed/2DW6IHIVg_Y?si=O0sdVtc3T7sFgeNT"} />
                <LinkedinCard link={"https://www.linkedin.com/video/embed/live/urn:li:ugcPost:7088457863706148864"} />
            </div>
        </section>
    )
}