import React from 'react'
import styles from './Navbar.module.css'
import { IoSearch } from "react-icons/io5"
const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo"><i>Kaushik The Event Hub</i></div>
        <div className="links">
            <ul>
                <li>Veneus</li>
                <li>Vendors</li>
                <li>Photos</li>
                <li>Real Wedding</li>
                <li>Blogs</li>
                <li>Shop</li>
                <li>E-Invites</li>
            </ul>
        </div>
        <div className={styles.serachLog}>
            <div className={styles.serachIcon}><IoSearch /></div>
            <div className={styles.login}>LogIn</div>
        </div>
    </nav>
    </>
  )
}

export default Navbar