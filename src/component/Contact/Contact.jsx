import "./Contact.css";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <h1 className="contact-h1">Contact Me</h1>
      <div className="contact">
        <div className="contact-left">
          <div className="contact-form">
            <form action="">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="example: John doe"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="example: johndoe@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="name">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="example: hello there."
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="contactBtn">Send message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-right">

          <h1>Connect me on social media</h1>
          <div className="social-icon">
            <ul>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
