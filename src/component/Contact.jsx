import { useEffect, useRef, useState } from "react";
import './css/Contact.css';
import name from './../../public/images/loading.gif';

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import EmailJs from "@emailjs/browser";

export default function Contact() {
  let [mailSucces, setMailSuccess] = useState(false);
  let [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmial = (event) => {
    event.preventDefault();

    setLoading(true);

    EmailJs.sendForm(
      "service_nzdxfpa",
      "template_ln194ic",
      form.current,
      "4Fw4hl9kYvZZc8c1R"
    )
      .then((result) => {
        setMailSuccess(true);

        form.current.reset();
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const time = setTimeout(() => {
    setMailSuccess(false);
  }, 5000);

  useEffect(() => {
    clearTimeout(time);
  }, [mailSucces]);

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
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="from_name"
                  id="email"
                  placeholder="example: johndoe@gmail.com"
                  required
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
                  required
                ></textarea>
              </div>
              <div>
                {loading ? (
                  <img src={Loading} alt="loading" className="loading" />
                ) : (
                  ""
                )}

                {mailSucces && (
                  <p className="sm-note">Message has been sent.</p>
                )}
              </div>
              <div>
                <button type="submit" className="contactBtn">
                  send message
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
                <a href="www.facebook.com/mdrahed24" target="blank">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://github.com/MD-Rahed-Mia" target="blank">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/md-rahed-29b63a284/" target="blank">
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
