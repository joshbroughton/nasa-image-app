import React from "react";
import "./Footer.css"

function Footer() {
  return(
    <div className="Footer">
      <p>Josh Broughton</p>
      <a href='https://github.com/JoshBroughton'>
        <img
          src={`${process.env.PUBLIC_URL}/GitHub-Mark-Light-64px.png`}
          alt='Github Logo'
          width='45'
          height='45'
        />
      </a>
    </div>
  )
}

export default Footer;
