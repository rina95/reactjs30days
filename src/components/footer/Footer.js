import React from "react"

const Footer = (props) => {
  return (
    <footer style={props.styles}>
      <div className='footer-wrapper'>
        <p>Copyright {props.date.getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
