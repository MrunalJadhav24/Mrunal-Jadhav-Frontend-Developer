import React from 'react'
import classes from './Header.module.css';
import Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';

const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.header1}>
        <Logo className={classes.logo}></Logo>
        <h6 className={classes.sitenm}>Saviour</h6>
        <nav className={classes.nav}>
        <ul>
                <li><a href='../'>Home</a></li>
                <li><a href='/'>IDO</a></li>
                <li><a href='/'>Takenomics</a></li>
                <li><a href='/'>Roadmap</a></li>
                <li><a href='/' >Comming soon</a></li>
            </ul>
            </nav>
            <Button type='submit' className={classes.walletButton}>Connect Wallet</Button>
        </div>
        <div>
            <p className={classes.text}>Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.</p>
        </div>        
    </div>
  )
}

export default Header