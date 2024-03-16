import React from 'react'
import classes from './Event.module.css';
import Heading from '../UI/Heading/Heading';
import Token from '../UI/Token/Token';
import Button from '../UI/Button/Button';
import copypaste from '../../Images/copypaste.PNG';
import timer from '../../Images/timer.PNG';

const Event = () => {
  return (
    <div className={classes.eventPanel}>
        <Heading className={classes.eventTitle}>PARTICIPATE IN OUR IDO EVENT!</Heading>
        <p className={classes.eventIntro}>During our IDO event, you will gain early access to our revolutionary ecosystem, designed to empower everyone to share wealth and achieve success.</p>
        <div>
            <Token className={classes.token}>Token Info</Token>
            <div className={classes.tokenInfo}>
              <p className={`${classes.col1} ${classes.col}`}>Total Token Supply</p>
              <p className={`${classes.col2} ${classes.col}`}>20%</p>
              <p className={`${classes.col1} ${classes.col}`}>Soft Cap</p>
              <p className={`${classes.col2} ${classes.col}`}>200 BNB</p>
              <p className={`${classes.col1} ${classes.col}`}>Initial exchange rate</p>
              <p className={`${classes.col2} ${classes.col}`}>1 BNB</p>
              <p className={`${classes.col1} ${classes.col}`}>Recommended Referral Commission</p>
              <p className={`${classes.col1} ${classes.col}`}>1st Generation</p>
              <p className={`${classes.col2} ${classes.col}`}>5%</p>
              <p className={`${classes.col1} ${classes.col}`}>2nd Generation</p>
              <p className={`${classes.col2} ${classes.col}`}>2%</p>
            </div>
            <div>
                <Button className={classes.walletButtton}>Connect Wallet</Button>
            </div>
            <div className={classes.para}>
              <h3>BECOME AN AFFILIATE & EARN 7% AS COMMISSION!</h3>
            </div>
            <div>
              <input type='text' className={classes.input} value='Generate a unique referral link'/>
              <Button type='submit' className={classes.generatorButton}>Generate</Button>
              <img src={copypaste} alt='copypaste' className={classes.copypaste}/>
            </div>
        </div>        

        <img src={timer} alt='timer' className={classes.timer}/>
        <div className={classes.presale}>
            <h2 className={classes.title}>PRESALE 1</h2>
            <p className={classes.price1}>1 Saviour = 0.657 USDT</p>
            <p className={classes.price2}>Next Stage Price = 0.723 USDT</p>
            <p className={classes.price3}>Sold - $34,56,56,764/$50,00,00,000</p>
            <p className={classes.price4}>Raised - $34,56,56,764/$40,00,00,000</p>
            <input type='text' className={classes.input} placeholder='Enter the amount (BNB)'/>
            <input type='text' className={classes.input} placeholder='Minimum Quantity to Buy'/>
            <input type='text' className={classes.input} placeholder='Maximum Quantity of Tokens'/>
            <div className={classes.saleButton}>
            <Button type='submit' className={classes.buyButton}>Buy</Button>
            <Button type='submit' className={classes.claimButtons}>Claim Drop</Button>
            </div>
            </div>
    </div>
  )
}

export default Event