import React from 'react'
import styles from './About.module.css'
const About = () => {
    return (
        <>
            <div className={styles.About}>
                <h1>About </h1>
                <div className={styles.aboutContent}>
                <div className={styles.aboutImg}>
                    <img src="./img/founder2.jpg" alt="" />
                </div>
                <div className={styles.aboutContent}>
                    <p>

                        Welcome to <b>Kaushik The Event Hub </b>, where your dream wedding becomes a reality. Behind every successful venture lies a passionate team dedicated to making dreams come true And many more dreams ture here. Meet our founders <b>KAUSHIK AND SONS</b>.

                        With a shared vision and years of combined experience in event planning and design, <b>KAUSHIK AND SONS</b> bring a unique blend of creativity, expertise, and attention to detail to every celebration. Their journey began with a shared love for crafting unforgettable moments and a commitment to exceeding expectations.

                        Driven by a deep understanding of love, romance, and the desire for a perfect wedding day, <b>KAUSHIK AND SONS</b> have curated a platform that simplifies the wedding planning process while preserving the magic and essence of each couple's love story.

                        Their dedication to innovation, personalized service, and creating enchanting experiences has earned them the trust and admiration of countless couples embarking on their journey to "I do." Together, they invite you to embark on this magical journey with them and transform your wedding dreams into cherished memories that will last a lifetime.

                        Join us at <b>Kaushik The Event Hub </b>, where love is celebrated, dreams are realized, and every moment is a testament to the beauty of your unique love story.</p>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default About