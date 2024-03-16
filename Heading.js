import React from 'react';
import classes from './Heading.module.css';

const Heading = (props) => {
  return (
    <h1 className={`${classes.heading} ${props.className}`}>{props.children}</h1>
  )
}

export default Heading