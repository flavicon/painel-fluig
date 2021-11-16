import React from 'react'
import '../styles/cardForm.css'


export function CardForm( props ){

  return (
    <div
      className="card-form"
      style={{
        backgroundColor: props.bgColor,
        width: props.width,
        height: props.height,
        color: props.color
      }}
    >
      <div className="form">
        {props.children}
      </div>
    </div>
  )
}