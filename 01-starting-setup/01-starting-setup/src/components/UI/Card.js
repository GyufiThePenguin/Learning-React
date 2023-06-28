import React from 'react'
import "./Card.css"

function Card(props) {
    //Get class names and appending them after caaard 
    const classes = "card " + props.className; // Space after card "

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card