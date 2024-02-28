import React, { useEffect } from "react";

import './Blogs.css';
import BlogCard from "../../components/BlogCard/BlogCard";

import img1 from '../../assets/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg'
import img2 from '../../assets/web.jpeg'
export default function Blogs() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return(
        <section className="blog-container">
            <div className="section-head">
                <h1>
                    📝 Blogs 📝
                </h1>
            </div>
            <div className="section-explainer">
                Have a look at our <span>community curated</span> blogs
            </div>
            <div className="blog-page-container">
                <BlogCard blogTitle={'WHY AI IS NOT A THREAT TO HUMAN SOCIETY AND THE WORLD AT LARGE?'} blogTag={'AI'} blogImage={img1}/>
                <BlogCard blogTitle={'HOW TO BECOME A WEB DEV ?'} blogTag={'WEB DEV'} blogImage={img2}/>
                <BlogCard blogTitle={'AI : FRIEND OR FOE? DEBUNKING THE MYTH OF ARTIFICIAL INTELLIGENCE AS A THREAT TO SOCIETY?'} blogTag={'AI'} blogImage={''}/>
            </div>
        </section>
    )
}