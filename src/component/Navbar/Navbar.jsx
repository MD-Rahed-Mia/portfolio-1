import "./Navbar.css"
import { FaRegSun } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <h1>Rahed</h1>
        </div>
        <ul>
          <li className="active">Home</li>
          <li>About Me</li>
          <li>Contact Me</li>
          <li>Projects</li>
          <li>Skills</li>
          <li><FaRegSun /></li>
        </ul>
      </nav>
    </>
  );
}
