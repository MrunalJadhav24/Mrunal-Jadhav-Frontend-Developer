import React from 'react'
import classes from './Token.module.css';
const Token = (props) => {
  return (
<button type={props.type || 'button'}
    className={`${classes.token} ${props.className}`}>
        {props.children}
    </button>  )
}

export default Token 