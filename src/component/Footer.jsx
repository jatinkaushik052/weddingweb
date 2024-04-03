import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
   <>
    <footer>
        <div className={styles.footercontainer}>
            <div className={styles.footersection}>
                <div className={styles.footerleft}>
                    <h3><i>KAUSHIK THE EVENT HUB</i></h3>
                    <p>Join us at Kaushik The Event Hub , where love is celebrated, dreams are realized, and every moment is a testament to the beauty of your unique love story.</p>
                    <div class="social-media">
                        <a href="#" class="social-icon"><FaFacebook /></a>
                        <a href="#" class="social-icon"><FaSquareXTwitter /></a>
                        <a href="#" class="social-icon"><FaInstagramSquare /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footersection}>
                <div className={styles.footerright}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">E-Card</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <div className={styles.foot}>
        <div className="foot1">
            ©2024 KAUSHIK THE EVENT HUB
        </div>
        <div className="foot2">
        Terms & Conditions | Privacy Policy
        </div>
    </div>
   </>
  )
}

export default Footer