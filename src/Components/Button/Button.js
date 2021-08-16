import React from 'react'
import './Button.css'

const Button = ({ children, to, onClick, ghost }) => {
  let classes = 'button'
  if (ghost) classes += ' button--ghost'
  return to ? (
    <a className={classes} href={to} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
