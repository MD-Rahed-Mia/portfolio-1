import "./Navbar.css";
import { FaRegSun } from "react-icons/fa";

export default function Navbar() {
  function handleClick(event) {
    event.preventDefault();
    const targetSection = document.getElementById("aboutMe");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <>
      <nav>
        <div className="logo">
          <h1>Rahed</h1>
        </div>
        <ul>
          <li className="active">
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#aboutMe" onClick={handleClick}>
              About Me
            </a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
