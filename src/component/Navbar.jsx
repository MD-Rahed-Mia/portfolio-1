import './css/Navbar.css';
import { useState } from "react";
import { ImCancelCircle, ImMenu } from "react-icons/im";

export default function Navbar() {
  let [isMenuVisible, setMenuVisible] = useState(false);

  function showMenu() {
    document.querySelector("ul").classList.toggle("active");
    isMenuVisible = setMenuVisible(!isMenuVisible);
  }
  return (
    <>
      <nav>
        <div className="logo">
          <h1>Rahed</h1>
          <div className="menu-icon" onClick={showMenu}>
            {isMenuVisible ? <ImCancelCircle /> : <motion.div whileTap={{ scale: 1.2 }}><ImMenu /> </motion.div>}
          </div>
        </div>
        <ul>


          <motion.li whileHover={{ scale: 1.4 }} className="active" onClick={showMenu}>
            <a href="#hero">Home</a>
          </motion.li>
          <li onClick={showMenu}>
            <a href="#aboutMe">About Me</a>
          </li>
          <li onClick={showMenu}>
            <a href="#skills">My Skills</a>
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
