import React, { Component } from 'react'

const Card = (props) => {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

export default Card