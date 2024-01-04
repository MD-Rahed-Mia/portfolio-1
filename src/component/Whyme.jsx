import './css/Whyme.css';
import WhyMe from './../../public/images/whyme.jpeg';

export default function Whyme() {
  return (
    <>
      <div className="container">
        <div className="why-me">
          <div className="wm-left">
            <img src={WhyMe} alt="whyme" />
          </div>
          <div className="wm-right">
            <h1 className="wm-title">Why you choose me?</h1>
            <div className="wm-acordion">
              <ul>
                <li>
                  <h1>Up to date technologies</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus dignissimos cum obcaecati maiores pariatur vero
                    possimus odio, enim ex soluta dicta, tempore velit ullam
                    dolore.
                  </p>
                </li>
                <li>
                  <h1>Always meet deadline</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus dignissimos cum obcaecati maiores pariatur vero
                    possimus odio, enim ex soluta dicta, tempore velit ullam
                    dolore.
                  </p>
                </li>
                <li>
                  <h1>Afordable price</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus dignissimos cum obcaecati maiores pariatur vero
                    possimus odio, enim ex soluta dicta, tempore velit ullam
                    dolore.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
