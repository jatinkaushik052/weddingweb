import React from 'react'
import styles from './WeddingCat.module.css'
const WeddingCat = () => {
  return (
    <>
    <div className={styles.categories}>
        <h1>Wedding Categories</h1>
        <div className={styles.cardList}>
        <div className={styles.catCard}>
            <div className={styles.cadrInfo}>
                <h3>Venues ▼</h3>
                <p>Banquet Halls, Lawns / Farmhouses, Wedding Resorts, Small Function / Party Halls, Destination Wedding, Kalyana Mandapams, 4 Star & Above Wedding Hotels</p>
            </div>
            <img src="./img/venues.jpg" alt="" />
        </div>
        <div className={styles.catCard}>
            <div className={styles.cadrInfo}>
                <h3>Photographers ▼</h3>
                <p>Photographers</p>
            </div>
            <img src="./img/photographers.jpg" alt="" />
        </div>
        <div className={styles.catCard}>
            <div className={styles.cadrInfo}>
                <h3>Makeup ▼</h3>
                <p>Bridal Makeup, Family Makeup</p>
            </div>
            <img src="./img/makeup.jpg" alt="" />
        </div>
        <div className={styles.catCard}>
            <div className={styles.cadrInfo}>
                <h3>Bridal Wears ▼</h3>
                <p>Bridal Lehengas, Kanjeevaram / Silk Sarees, Cocktail Gowns, Trousseau Sarees, Bridal Lehenga on Rent</p>
            </div>
            <img src="./img/bridal-wears.jpg" alt="" />
        </div>

        </div>
    </div>


    {/* Inhouse services */}

    <div className={styles.inhouseServices}>
        <h1>WMG Inhouse Services</h1>
        <div className={styles.houseCard}>
            <div className={styles.card} data-aos="fade-left">
                <img src="./img/wedsta_dweb1.jpg" alt="" />
                <h3>Wedsta</h3>
                <p>WMG At Home, Family Makeup Services</p>
                <button>Know More</button>
            </div>
            <div className={styles.card} data-aos="fade-up">
                <img src="./img/genie_dweb2.jpg" alt="" />
                <h3>Genie Services</h3>
                <p>Plan your dream wedding in your budget</p>
                <button>Know More</button>
            </div>
            <div className={styles.card} data-aos="fade-right">
                <img src="./img/venue_dweb3.jpg" alt="" />
                <h3>Venue Booking Service</h3>
                <p>Best Price Guaranteed</p>
                <button>Know More</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default WeddingCat