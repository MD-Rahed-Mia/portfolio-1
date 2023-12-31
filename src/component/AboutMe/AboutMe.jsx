import "./AboutMe.css";
import { BiSolidCopyAlt } from "react-icons/bi";

import { Fade } from "react-reveal";

export default function AboutMe() {
  return (
    <>
      <Fade left>
        <div className="container" id="aboutMe">
          <div className="about-me">
            <div className="am-container">
              <div className="am-container-left">
                <h1>Personal Information</h1>
                <h3>
                  Name: &nbsp;
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MD Rahed Mia.</span>
                </h3>
                <h3>
                  Profile:{" "}
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front developer.
                  </span>
                </h3>
                <h3>
                  Email: &nbsp;&nbsp;
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mdrahed321@gmail.com
                  </span>
                </h3>
                <h3>
                  Phone: &nbsp;
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;088 01575-088264
                  </span>
                </h3>
                <h3>
                  Location:{" "}
                  <span>&nbsp;&nbsp;&nbsp;Chattogram, Bangladesh.</span>
                </h3>
              </div>
              <div className="am-container-right">
                <h1>
                  Description <BiSolidCopyAlt />
                </h1>
                <p>
                  I am experienced in leveraging agile frameworks to provide a
                  robust synopsis for high level overviews. Iterative approaches
                  to corporate strategy foster collaborative thinking to further
                  the overall value proposition. I am a junior front end
                  developer. I like to learn new technologies. Though, I am
                  junior in front end I have more than 2 year's of experience in
                  this sector. I have knowledge of front end developer also in
                  backend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}
