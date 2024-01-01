import { useState } from "react";
import "./Navbar.css";
import { ImCancelCircle, ImMenu } from "react-icons/im";

export default function Navbar() {
  let [isMenuVisible, setMenuVisible] = useState(false);

  function showMenu() {
    document.querySelector("ul").classList.toggle("active");
    isMenuVisible = setMenuVisible(!isMenuVisible)
  }

  return (
    <>
      <nav>
        <div className="logo">
          <h1>Rahed</h1>
          <div className="menu-icon" onClick={showMenu}>
            {isMenuVisible ? <ImCancelCircle /> : <ImMenu />}
          </div>
        </div>
        <ul>
          <li className="active" onClick={showMenu}>
            <a href="#hero">Home</a>
          </li>
          <li onClick={showMenu}>
            <a href="#aboutMe">About Me</a>
          </li>
          <li onClick={showMenu}>
            <a href="#service">Service</a>
          </li>
          <li onClick={showMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={showMenu}>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
