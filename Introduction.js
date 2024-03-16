import React from 'react'
import classes from './Introduction.module.css';
import Heading from '../UI/Heading/Heading';
import Button from '../UI/Button/Button';
import introImg from '../../Images/introImg.png';

const Introduction = () => {
  return (
    <div className={classes.introPanel}>
        <div>
        <Heading className={classes.introTitle}>Introduction</Heading>
        <p className={classes.intro}>We've all been in the mud once, and now we've decided to fight it out. 
Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! 
Our mission is to empower everyone to share wealth and succeed.  
<em> read more...</em>
            </p>
            <Button className={classes.introButton}>Documents</Button>
            </div>
            <div>
            <img src={introImg} alt='introImg' className={classes.introImg}/>
         </div>
    </div>
  )
}

export default Introduction