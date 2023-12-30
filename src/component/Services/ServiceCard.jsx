import "./Services.css";

export default function ServiceCard(props) {
  return (
    <>
      <div className="s-card ">
        <div className="s-icon">
         {props.icon}
        </div>
        <h1>{props.title}</h1>
        <p>
          {props.desc}
        </p>
      </div>
    </>
  );
}
