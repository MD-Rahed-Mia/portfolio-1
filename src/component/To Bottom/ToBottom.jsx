import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ToBottom() {
  let [toTop, setToTop] = useState(false);

  function getScroll() {
    const height = window.innerHeight;
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 700) {
      setToTop(true);
    } else {
      setToTop(false);
    }
  }

  function handleTop (){
    window.scrollTo(0,0)
  }

  window.addEventListener("scroll", getScroll);

  return (
    <>
      <div className="arrow-btn" onClick={handleTop}>{toTop && <FaArrowUp />}</div>
    </>
  );
}
