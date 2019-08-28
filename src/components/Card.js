import React from "react"
import PropTypes from "prop-types"
import "./Card.css"

const Card = props => {
  return ( <
    div className = "Card" >
    <
    img src = {
      props.image
    }
    alt = "wallpaper" / >
    <
    h3 > {
      props.title
    } < /h3> <
    p > {
      props.text
    } < /p> <
    /div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

Card.defaultProps = {
  title: "React for Designers",
  text: "12 Sections",
  image: require("../images/wallpaper.jpg"),
}

export default Card