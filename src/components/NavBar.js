import React from "react"

let b = 0

const NavBar =  () =>{
  const links = ["home", "about", "projects"];
   
  return (
  <nav>
    {links.map((element, index) => {
    return (
        <a href={`#${element}`} key={b++}>{element}</a>
        )})
    }
    </nav>
    )
  }

export default NavBar;
