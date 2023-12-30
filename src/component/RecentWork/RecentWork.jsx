import "./RecentWork.css";
import { ImCancelCircle } from "react-icons/im";

import project1i1 from "./../../../public/images/rw_project1.png";
import project1i3 from "./../../../public/images/rw_project1_img3.png";
import project1i2 from "./../../../public/images/rw_project1_img2.png";
import Temporal from "./../../../public/images/temporal.png";
import Temporal1 from "./../../../public/images/temporal1.png";
import Project3i2 from "./../../../public/images/project3i2.png";
import Project3i1 from "./../../../public/images/project3i1.png";

import RWCard from "./RWcard";
import { useState } from "react";

const projects = [
  {
    img1: project1i1,
    img2: project1i2,
    img3: project1i3,
    title: "e-commerce website of dabaz.com.",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos culpa cupiditate atque voluptas ex.",
  },
  {
    img1: Temporal1,
    img2: Temporal,
    img3: Temporal,
    title: "Temp mail website temporal.com",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos culpa cupiditate atque voluptas ex.",
  },
  {
    img1: Project3i1,
    img2: Project3i2,
    img3: Project3i2,
    title: "Dashboard project for client. dashboard.com",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos culpa cupiditate atque voluptas ex.",
  },
  {
    img1: Temporal1,
    img2: Temporal,
    img3: Temporal,
    title: "Temp mail website temporal.com",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos culpa cupiditate atque voluptas ex.",
  },
];

export default function RecentWork() {
  const [fullImg, setFullImg] = useState(false);
  const [img, setImg] = useState("");

  function viewImg(event) {
    setImg(event.target.src);
    setFullImg(() => true);
  }

  function cancelFullimgFunc(){
    setFullImg(() => false)
  }

  return (
    <>
      <div className="container">
        <div className="recent-work">
          {fullImg ? (
            <div className="full-img" onClick={cancelFullimgFunc}>
              <div className="cancel-btn" onClick={cancelFullimgFunc}>
                <ImCancelCircle />
              </div>
              <img src={img} alt="" />
            </div>
          ) : (
            ""
          )}
          <h1 className="rw-title">project's I have done</h1>
          <div className="rw-cards">
            {projects.map((element) => {
              return (
                <RWCard
                  img1={element.img1}
                  img2={element.img2}
                  img3={element.img3}
                  title={element.title}
                  desc={element.desc}
                  clickFunc={viewImg}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
