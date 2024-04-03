import React from 'react'
import styles from './Popular.module.css'
const Popular = () => {
  return (
    <>
      <div className={styles.popular}>
        <h1>Popular Venue Searches</h1>
        <div className={styles.popularVenue}>
          <div className={styles.card} data-aos="fade-right">
            <img src="./img/hapur.jpg" alt="" />
            <div>
              <p>5 Star & Above Wedding Hotels</p>
              <a href="">Hapur</a>
              <a href="">Babugarh</a>
              <a href="">Pilkhuwa</a>
            </div>
          </div>
          <div className={styles.card} data-aos="fade-down">
            <img src="./img/bsr.jpg" alt="" />
            <div>
              <p>5 Star & Above Wedding Hotels</p>
              <a href="">Hapur</a>
              <a href="">Babugarh</a>
              <a href="">Pilkhuwa</a>
            </div>
          </div>
          <div className={styles.card} data-aos="fade-left">
            <img src="./img/delhi.jpg" alt="" />
            <div>
              <p>5 Star & Above Wedding Hotels</p>
              <a href="">Hapur</a>
              <a href="">Babugarh</a>
              <a href="">Pilkhuwa</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.popularSearch}>
        <h1>Popular Searches</h1>
        <div className={styles.popularVenue}>
            <div className={styles.cardSearch}data-aos="flip-left">
              <img style={{position:'relative'}} src="./img/bridal-wear.jpg" alt="" />
              <h4 style={{position:'absolute', }}>Bridal Wear</h4>
            </div>
          <div className={styles.cardSearch}data-aos="flip-right">
            <img style={{position:'relative'}} src="./img/mua.jpg" alt="" />
            <h4 style={{position:'absolute', }}>Bridal Makeup</h4>
          </div>
          <div className={styles.cardSearch} data-aos="flip-up">
            <img style={{position:'relative'}} src="./img/photography.jpg" alt="" />
            <h4 style={{position:'absolute', }}>Photography</h4>
          </div>
          <div className={styles.cardSearch} data-aos="flip-down">
            <img style={{position:'relative'}} src="./img/cards.jpg" alt="" />
            <h4 style={{position:'absolute', }}>E-Invitation Card</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popular