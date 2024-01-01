import { useRef, useState } from "react";
import "./Contact.css";

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import EmailJs from "@emailjs/browser";

export default function Contact() {

  let [mailSucces, setMailSuccess] = useState(false)

  const form = useRef();

  const sendEmial = (event) => {
    event.preventDefault();

    EmailJs.sendForm(
      "service_nzdxfpa",
      "template_ln194ic",
      form.current,
      "4Fw4hl9kYvZZc8c1R"
    )
      .then((result) => {

        setMailSuccess(true)

        form.current.reset()

      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1 className="contact-h1" id="contact">
        Contact Me
      </h1>
      <div className="contact">
        <div className="contact-left">
          <div className="contact-form">
            <form action="" ref={form} onSubmit={sendEmial}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="example: John doe"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="from_name"
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

              {
                mailSucces &&  <p>Email has been sent.</p>
              }
              </div>
              <div>
                <button type="submit" className="contactBtn">
                  Send message
                </button>
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
