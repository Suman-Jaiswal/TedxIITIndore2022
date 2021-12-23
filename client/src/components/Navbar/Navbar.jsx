import React from "react"
import "./Navbar.css"

function Navbar(){ 
    
        return(
        <nav class="navbar navbar-light nav">
        <div class="container-fluid">
          <img class="navbar-brand logo" src="./logo.png"></img>
        <div class="d-flex">
            <button class="btn button" type="submit">SPEAKERS</button>
            <button class="btn button" type="submit">GALLERY</button>
            <button class="btn button" type="submit">SPEAKERS</button>
            <button class="btn button" type="submit">TALKS</button>
            </div>
        </div>
      </nav>
    )
    
    
}

export default Navbar