import React from 'react'
import logo from '../../../Images/logo.png';
const Logo = (props) => {
  return (
    <img src={logo} alt={props.alt} className={props.className}/>
  )
}

export default Logo