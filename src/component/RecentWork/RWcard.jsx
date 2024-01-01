import "./RecentWork.css";
import project1i1 from "./../../../public/images/rw_project1.png";
import project1i3 from "./../../../public/images/rw_project1_img3.png";
import project1i2 from "./../../../public/images/rw_project1_img2.png";

export default function RWCard(props) {
  return (
    <>
      <div className="rw-card" key={props.hello}>
        <div className="rw-card__img">
          <div>
            <img src={props.img1} alt=""/>
          </div>
          <div>
            <img src={props.img2} alt=""/>
          </div>
          <div>
            <img src={props.img3} alt=""/>
          </div>
        </div>
        <div className="rw-card__desc">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}
