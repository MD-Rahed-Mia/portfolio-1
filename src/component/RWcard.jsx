import './css/RecentWork.css';

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
