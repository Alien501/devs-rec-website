import React, { useEffect } from "react";

import './BlogView.css';

import img1 from '../../assets/organic-flat-blog-post-illustration-with-people_23-2148955260.avif'
import ContactForm from "../ContactForm/ContactForm";
import BorderImage from "../BorderImage/BorderImage";

export default function BlogView() {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return(
        <>
            <div className="content-container">
                <div className="page-top-container">
                    <div className="page-heading">
                     WHY AI IS NOT A THREAT TO HUMAN SOCIETY AND THE WORLD AT LARGE??
                    </div>
                    <div className="page-thumbnail">
                        <img  src={img1} alt="Thumbnail" />
                        <div className="top-overlay"></div>
                    </div>
                </div>
                <div className="blog-tag-container">
                    <span>AI</span>
                </div>
                <div className="blog-by-container">
                    By, <i>Akash S</i>
                </div>
                <div className="page-content-container" >
                Artificial Intelligence is one of the branch of computer science that can simulate human intelligence Artificial Intelligence (AI) has become a buzzword in recent years, often associated with dystopian visions of a world where machines take over and humans become obsolete. However, this perspective is not only unfounded but also contradicts the reality of AI. In fact, AI is not a threat to human society and the world at large. In this blog, we will explore why this is the case and debunk some of the myths surrounding AI.

AI is a Tool, Not a Threat: First and foremost, it is essential to understand that AI is simply a tool created by humans to enhance and augment our abilities, not to replace us. AI is designed to perform tasks that are difficult or impossible for humans to do, such as analyzing vast amounts of data or recognizing patterns in complex systems. It is a tool that can help us solve some of the most significant challenges facing humanity, such as climate change, disease, and poverty. AI is Designed to Assist Humans, Not Replace them : One of the main misconceptions about AI is that it is designed to replace humans. However, this is far from the truth. The primary goal of AI is to assist humans and make their lives easier. For example, AI-powered virtual assistants like Siri and Alexa are designed to help people with tasks like setting reminders, playing music, and providing information. AI Can Enhance Human Capabilities: AI has the potential to enhance human capabilities in many areas. For example, in medicine, AI can assist doctors in making more accurate diagnoses and predicting patient outcomes. In education, AI can personalize learning experiences and help students with different learning styles. In transportation, AI can improve safety and efficiency in vehicles. These are just a few examples of how AI can augment human capabilities and improve our quality of life. AI is a tool, not a replacement: AI is designed to assist humans in their tasks and make them more efficient, not to replace them. AI can handle mundane and repetitive tasks, allowing humans to focus on more complex and creative work. AI can also help humans make better decisions by analyzing large amounts of data and providing insights that humans may not have noticed.

AI can be controlled AI can be controlled and regulated by humans. We can set limits on what AI can and cannot do, and we can ensure that it operates within those limits. Governments and organizations can establish regulations and guidelines to ensure that AI is used ethically and responsibly. AI can be used for good AI has the potential to solve many of the world's biggest problems. For example, AI can be used to diagnose diseases, predict natural disasters, and create more sustainable energy systems. AI can also be used to improve education, transportation, and other aspects of daily life. AI Can Improve Efficiency and Productivity: One of the main benefits of AI is that it can improve efficiency and productivity in various industries. For example, AI-powered robots can perform tasks that are too dangerous or tedious for humans, such as working in hazardous environments or performing repetitive tasks in manufacturing. AI Can Enhance Safety and Security: AI can enhance safety and security in various ways. For example, AI-powered surveillance systems can detect and respond to potential threats in real-time, and AI-powered cybersecurity systems can detect and prevent cyber attacks.

In conclusion, AI is not a threat to human society and the world at large. AI is a tool that can be used to improve our lives and solve some of the world's biggest problems. AI is not sentient, cannot act outside of its programming, and can be controlled by humans. With proper regulation and guidelines, we can ensure that AI is used ethically and responsibly. Let us embrace the benefits of AI and use it to create a better future for all
                </div>
            </div>
            <BorderImage />
            <h1 style={{textAlign: 'center'}}>✍️ Write To Us ✍️</h1>
            <ContactForm />  
        </>
    )
}