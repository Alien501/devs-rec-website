import React from "react";

import './HomePage.css';
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import BorderImage from "../../components/BorderImage/BorderImage";
import BlogCardHome from "../../components/BlogCardHome/BlogCardHome";
import LinkButton from "../../components/LinkButton/LinkButton";
import PodcastCard from "../../components/PodcastCard/PodcastCard";

export default function HomePage() {
    return(
        <div className="home-page-container">
            <section className="announcement-container">
                <div className="section-head">
                    <h1>
                        📢 Announcement 📢
                    </h1>
                </div>
                <div className="section-explainer">
                    See <span>latest update</span> in club
                </div>
                <div className="ann-card-container">
                    <AnnouncementCard 
                        annTitle={'Test 1'}
                        annBrief={'Testing this new feature'}
                        annLink={''}
                    />
                    <AnnouncementCard 
                        annTitle={'Test 2'}
                        annBrief={'Testing this new feature Testing this new feature Testing this new feature Testing this new feature'}
                        annLink={''}
                    />
                    <AnnouncementCard 
                        annTitle={'Test 3'}
                        annBrief={'Testing this new feature'}
                        annLink={''}
                    />
                    <AnnouncementCard 
                        annTitle={'Test 4'}
                        annBrief={'Testing this new feature'}
                        annLink={''}
                    />
                    <AnnouncementCard 
                        annTitle={'Test 5'}
                        annBrief={'Testing this new feature Testing this new feature Testing this new feature Testing this new feature'}
                        annLink={''}
                    />
                    <AnnouncementCard 
                        annTitle={'Test 6'}
                        annBrief={'Testing this new feature'}
                        annLink={''}
                    />
                </div>
            </section>

            <BorderImage />

            <section className="home-blog-container">
                <div className="section-head">
                    <h1>
                        📝 Blogs 📝
                    </h1>
                </div>
                <div className="section-explainer">
                    Have a look at our <span>community curated</span> blogs
                </div>
                <div className="blog-home-container">
                    <BlogCardHome blogTitle={'WHY AI IS NOT A THREAT TO HUMAN SOCIETY AND THE WORLD AT LARGE??'} blogDomain={'AI'}/>
                    <BlogCardHome blogTitle={'HOW TO BECOME A WEB DEV ?'} blogDomain={'Web Dev'}/>
                    <BlogCardHome blogTitle={'AI: FRIEND OR FOE? DEBUNKING THE MYTH OF ARTIFICIAL INTELLIGENCE AS A THREAT TO SOCIETY?'} blogDomain={'AI'}/>

                </div>
                <LinkButton btnTitle={'View More'} />
            </section>

            <BorderImage />

            <section className="home-podcast-container">
                <div className="section-head">
                    <h1>
                        🎤 Podcasts 🎤
                    </h1>
                </div>
                <div className="section-explainer">
                    Listen to the <span>community speaking</span> things related to tech
                </div>
                <div className="podcast-home-container">
                    <PodcastCard podcastEmbedLink={'https://open.spotify.com/embed/episode/185K2NcNPQ04aTS4T5jM7t?utm_source=generator'} />
                    <PodcastCard podcastEmbedLink={'https://open.spotify.com/embed/episode/7juTmneZuN82wVf53dYCiB?utm_source=generator'} />
                    <PodcastCard podcastEmbedLink={'https://open.spotify.com/embed/episode/3rwI3Y8YvIt2YxepmuCxD7?utm_source=generator'} />
                </div>
                <LinkButton btnTitle={'Listen More'} />
            </section>

            <BorderImage />

        </div>
    )
}