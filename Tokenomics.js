import React from 'react';
import classes from './Tokenomics.module.css';
import Heading from '../UI/Heading/Heading';
import Token from '../UI/Token/Token';
import logo from '../../Images/logo.png';

const Tokenomics = () => {
  return (
    <div className={classes.tokenomicsPanel}>
        <Heading className={classes.tokenomicsTitle}>TOKENOMICS</Heading>
        <Token className={classes.tokenButton}>Token Details</Token>
        <div className={classes.tokenInfo}>
              <p className={`${classes.col1} ${classes.col}`}>Name</p>
              <p className={`${classes.col2} ${classes.col}`}>Saviour</p>
              <p className={`${classes.col1} ${classes.col}`}>Symbol</p>
              <p className={`${classes.col2} ${classes.col}`}>SvR</p>
              <p className={`${classes.col1} ${classes.col}`}>Total Supply</p>
              <p className={`${classes.col2} ${classes.col}`}>1000 Trillion</p>
              <p className={`${classes.col1} ${classes.col}`}>Decimals</p>
              <p className={`${classes.col2} ${classes.col}`}>18</p>
            </div>
            <div>
                <img src={logo} alt='logo' className={classes.logo}/>
                <p className={`${classes.p1} ${classes.p}`}>Community Airdrop (7.5%)</p>
                <p className={`${classes.p2} ${classes.p}`}>Team Founders (2.5%)</p>
                <p className={`${classes.p3} ${classes.p}`}>Black Hole Contract Address (50%)</p>
                <p className={`${classes.p4} ${classes.p}`}>Initial Liquidity Provider (15%)</p>
                <p className={`${classes.p5} ${classes.p}`}>Ecological Fund (5%)</p>
                <p className={`${classes.p6} ${classes.p}`}>IDO Round(20%)</p>
                <hr className={classes.hr1}></hr> 
                <hr className={classes.hr2}></hr>
                <hr className={classes.hr3}></hr>
                <hr className={classes.hr4}></hr> 
                <hr className={classes.hr5}></hr>
                <hr className={classes.hr6}></hr>
            </div>
    </div>
  )
}

export default Tokenomics