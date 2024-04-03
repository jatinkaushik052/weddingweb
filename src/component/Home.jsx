import React from 'react'
import styles from './Home.module.css'
const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <img className={styles.homeImg} src="./img/homepage.jpg" alt="" />
      </div>


      <div className={styles.homeSelect}>
        <div className={styles.content}>
          <div className={styles.homeText}>
            <h1>Your Wedding, Your Way</h1>
            <p>Find the best wedding vendors with thousands of trusted reviews</p>
          </div>
          <div className="selectBox">
            <input className={styles.selInputVen} type="text" placeholder='Select vendor type' />
            <input className={styles.selInputCity} type="text" placeholder='Select city' />
            <button className={styles.startedbtn} >Get Started</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home