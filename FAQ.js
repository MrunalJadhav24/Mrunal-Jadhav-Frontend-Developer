import React from 'react'
import classes from './FAQ.module.css';
import Heading from '../UI/Heading/Heading';
import faqImg from '../../Images/faqImg.png';
const FAQ = () => {
  return (
    <div className={classes.FAQPanel}>
        <img src={faqImg} alt='faqImg' className={classes.faqImg}/>
        <Heading className={classes.faqTitle}>FAQ</Heading>
        <div className={classes.div}>
            <p>1</p>
            <p>Why choose "Savior"?</p>
        </div>
        <div className={classes.div}>
            <p>2</p>
            <p>Why is the IDO duration so long?</p>
        </div>
        <div className={classes.div}>
            <p>3</p>
            <p>When will trading go live?</p>
        </div>
        <div className={classes.div1}>
            <p>4</p>
            <p>When can we claim the tokens?</p>
        </div>
        <div className={classes.innerDiv}>
                <p>After the IDO concludes, you can claim the tokens on our official website.</p>
            </div>
    </div>
  )
}

export default FAQ