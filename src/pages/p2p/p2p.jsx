import React from "react";

import './p2p.css';
import P2PCard from "../../components/P2PCard/P2PCard";

export default function PeerToPeer() {
    return(
        <div className="p2p-page-container">
            <div className="section-head">
                <img src="/assets/p2p_head.webp" alt="Peer-to-peer" />
            </div>

            <div className="p2p-moto-container">
                <h1>What is Peer-To-Peer?</h1>
                <span>
                Welcome to DEVS REC's fresh initiative - Peer-to-Peer Learning Hub!
                <br />
                Join us in this journey to build a supportive learning community. 
                <br />
                Whether you're a novice diving into a new tech stack or an expert seeking to collaborate with REC's top tech minds, our hub has got you covered with the best mentors for every tech domain to aid you on your journey!
                <br />
                <span className="p2p-moto-points">
                ✨ Find study buddies to engage in insightful discussions
                </span>
                <span className="p2p-moto-points">
                ✨ Share roadmaps, resources, and content tailored to various tech domains
                </span>
                <span className="p2p-moto-points">
                ✨ Assist each other in resolving queries
                </span>
                <span className="p2p-moto-points">
                ✨ Explore diverse and difficult topics with others
                </span>
                <span className="p2p-moto-points">
                ✨ And most importantly, learn from and with your peers
                </span>
                <span className="p2p-moto-points">
                Let's make learning together cool again!🔥
                </span>
                Connect, collaborate, and grow with us at the Peer-to-Peer Learning Hub of DEVS REC, where mentors are available round the clock for any questions.
                <br />
                The best are here ⬇️
                </span>
            </div>

            <div className="p2p-join-container">
                <a href="#" target="_" className="p2p-join-btn">
                    Join Now!
                </a>
            </div>

            <div className="p2p-page-card-container">
                <P2PCard
                    domainName={'WebDev'}
                    domainMentors={[
                        {
                            name: 'Mohammed Noumaan Ahamed',
                            img: 'assets/Mohammed Noumaan Ahamed.webp',
                            linkedinLink: 'https://www.linkedin.com/in/noumaanahamed?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },
                        {
                            name: 'Dhanush',
                            img: 'assets/Dhanush.webp',
                            linkedinLink: 'https://www.linkedin.com/in/dhanush-s-17bab722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },
                        {
                            name: 'A.K.S. Thirumurugan',
                            img: 'assets/thiru_full.webp',
                            linkedinLink: 'https://www.linkedin.com/in/a-k-s-thirumurugan-57b230211/'
                        },
                        {
                            name: 'Braghadeesh R A',
                            img: 'assets/Braghadeesh R A.webp',
                            linkedinLink: 'https://www.linkedin.com/in/braghadeesh05'
                        }
                    ]}
                    whatsAppLink={'#'}
                    />
                <P2PCard
                    domainName={'UI/UX'}
                    domainMentors={[
                        {
                            name: 'Purushothaman M',
                            img: 'assets/Purushothaman M.webp',
                            linkedinLink: 'https://www.linkedin.com/in/purushothaman-m-b4ba9122b/'
                        },
                        {
                            name: 'Sailesh',
                            img: 'assets/Sailesh.webp',
                            linkedinLink: 'https://www.linkedin.com/in/sailesh-ravichandran-637739229/'
                        },
                        {
                            name: 'SHARON STEVE J',
                            img: 'assets/SHARON STEVE J.webp',
                            linkedinLink: 'https://www.linkedin.com/in/sharon-steve-j-80b933248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                        },
                        {
                            name: 'Sudheer',
                            img: 'assets/Sudheer.webp',
                            linkedinLink: 'http://www.linkedin.com/in/yallankisudheer'
                        }
                    ]}
                    whatsAppLink={'#'}
                />
                <P2PCard
                    domainName={'App Development'}
                    domainMentors={[
                        {
                            name: 'Soniya',
                            img: 'assets/Soniya.webp',
                            linkedinLink: 'https://www.linkedin.com/in/soniyavijay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },
                        {
                            name: 'Guru Prasath T',
                            img: 'assets/Guru Prasath T.webp',
                            linkedinLink: 'https://www.linkedin.com/in/guru-prasath-t-38bb72248/'
                        },
                        {
                            name: 'Shivashankar',
                            img: 'assets/Shiva.webp',
                            linkedinLink: 'https://www.linkedin.com/in/sivashankar-s-33117b249/'
                        },
                        {
                            name: 'Kavin',
                            img: 'assets/Kavin.webp',
                            linkedinLink: 'https://www.linkedin.com/in/kavin-raj-192a43288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        }
                    ]}
                    whatsAppLink={'#'}
                />
                <P2PCard
                    domainName={'Game Development'}
                    domainMentors={[
                        {
                            name: 'Venkatesh C',
                            img: 'assets/vice.jpg',
                            linkedinLink: 'https://www.linkedin.com/in/venkateshajay04/'
                        },
                        {
                            name: 'Naveen',
                            img: 'assets/Naveen.webp',
                            linkedinLink: 'https://www.linkedin.com/in/naveen-k-129877255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                        },
                    ]}
                    whatsAppLink={'#'}
                />
                <P2PCard
                    domainName={'Comp. Programming'}
                    domainMentors={[
                        {
                            name: 'Sai Harish',
                            img: 'assets/Sai Harish.webp',
                            linkedinLink: 'https://www.linkedin.com/in/saiharish-m-b567b9235/'
                        },
                        {
                            name: 'Dhruv R Jain',
                            img: 'assets/Dhruv R Jain.webp',
                            linkedinLink: 'https://www.linkedin.com/in/dhruvrjain/'
                        },
                        {
                            name: "Brahadeesh V",
                            img: 'assets/Brahadeesh V.webp',
                            linkedinLink: 'https://www.linkedin.com/in/brahadeesh-v-8998ab257/'
                        }
                    ]}
                    whatsAppLink={'#'}
                />
                <P2PCard
                    domainName={'ML'}
                    domainMentors={[
                        {
                            name: 'Shugavaneshwar R',
                            img: 'assets/vice2.jpg',
                            linkedinLink: 'https://www.linkedin.com/in/shuga-vaneshwar-922603226'
                        },
                        {
                            name: 'Hursun',
                            img: 'assets/Hursun.webp',
                            linkedinLink: 'https://www.linkedin.com/in/hursun-ss-377659233/'
                        },
                        {
                            name: 'Dhiksha Shrivruthi',
                            img: 'assets/Dhiksha Shrivruthi.webp',
                            linkedinLink: 'https://www.linkedin.com/in/dhiksha-shrivruthi-g-93897b258/'
                        }
                    ]}
                    whatsAppLink={'#'}
                />
                <P2PCard
                    domainName={'CTF'}
                    domainMentors={[
                        {
                            name: 'Ritesh',
                            img: 'assets/rithesh_full.webp',
                            linkedinLink: 'https://www.linkedin.com/in/rithesh-s-05617b22a/'
                        },
                        {
                            name: 'Jerin BS',
                            img: 'assets/Jerin BS.webp',
                            linkedinLink: 'https://linkedin.com/in/jerin-b-s'
                        }
                    ]}
                    whatsAppLink={'#'}
                />
            </div>

            <div className="p2p-page-footer-container">
                <P2PCard
                    domainName={'P2P Co-ordinators'}
                    domainMentors={[
                        {
                            name: 'Swayam',
                            img: 'assets/swayam_full.webp',
                            linkedinLink: 'https://www.linkedin.com/in/devswayam/'
                        },
                        {
                            name: 'Jeyanth',
                            img: 'assets/sec.jpeg',
                            linkedinLink: 'https://www.linkedin.com/in/jeyanth-v/'
                        }
                    ]}
                    isCoordinator={true}
                />
            </div>

        </div>
    )
}