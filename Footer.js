import React from 'react';
import logo from '../../Images/logo.png';
import classes from './Footer.module.css';
import socialLinks from '../../Images/socialLinks.PNG';


const Footer = () => {
  return (
    <div className={classes.footerPanel}>
        <img src={logo} alt='logo' className={classes.logo}/>
        <h4 className={classes.h4}>SITEMAP</h4>
        <nav className={classes.nav}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>IDO</a></li>
                <li><a href='/'>Tokenomics</a></li>
                <li><a href='/'>Road Map</a></li>
                <li><a href='/'>WhitePaper</a></li>
                <li><a href='/'>Pledge</a></li>
                <li><a href='/'>NFT</a></li>
                <li><a href='/'>Games</a></li>
            </ul>
        </nav>
        <img src={socialLinks} alt='socialLinks' className={classes.img}/>
    </div>
  )
}

export default Footer