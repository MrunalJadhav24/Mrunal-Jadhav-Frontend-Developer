import React from 'react';
import classes from './Roadmap.module.css';
import Heading from '../UI/Heading/Heading';
import card2 from '../../Images/card2Img.png';
import card3 from '../../Images/card3Img.png';
import card4 from '../../Images/card4Img.png';

const Roadmap = () => {
  return (
    <div className={classes.roadmapPanel}>
        <Heading className={classes.roadmapTitle}>ROAD MAP</Heading>
        <div className={classes.maindiv}>
            <div className={classes.card}>
            <img src={card3} alt='card3' className={classes.imgCard1}/>
                <div>
                    <h5>Phase 1</h5>
                    <p>Technical Readiness and Smart Contract Audit</p>
                </div>
            </div>
            <div className={classes.card}>
            <img src={card2} alt='card2' className={classes.imgCard1}/>
                <div>
                    <h5>Phase 2</h5>
                    <p>Increase Liquidity and Trading Volume</p>
                </div>
            </div>
            <div className={classes.card}>
            <img src={card3} alt='card3' className={classes.imgCard1}/>
                <div>
                    <h5>Phase 3</h5>
                    <p>Community Building and Marketing</p>
                </div>
            </div>
            <div className={classes.card}>
            <img src={card4} alt='card4' className={classes.imgCard1}/>
                <div>
                    <h5>Phase 4</h5>
                    <p>Ecosystem Expansion and Partnerships</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Roadmap