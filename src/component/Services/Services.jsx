import ServiceCard from "./ServiceCard";
import "./Services.css";
import { SiAdobeindesign } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { FaCode } from "react-icons/fa";

export default function Services() {
  return (
    <>
      <div id="service"></div><br />
      <div className="services">
        <div className="service-top">
          <h1 className="s-title">
            Creating Interactive & Responsive <br /> Website Focusing on UI
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, non.
            Suscipit <br /> molestias doloribus minima quibusdam eveniet modi,
            quo consequuntur culpa consectetur laborum eius deserunt <br />{" "}
            perferendis soluta ullam omnis placeat labore.
          </p>
        </div>
        <div className="service-bottom">
          <div className="s-cards">
            <ServiceCard
              icon={<SiAdobeindesign />}
              title="UI/UX Design"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat
          repudiandae aliquam. Vero aliquam delectus voluptas aut error
          "
            />
            <ServiceCard
              icon={<FaReact />}
              title="Web Development"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat
          repudiandae aliquam. Vero aliquam delectus voluptas aut error
          "
            />
            <ServiceCard
              icon={<ImHtmlFive />}
              title="Markup Design"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat
          repudiandae aliquam. Vero aliquam delectus voluptas aut error
          "
            />
            <ServiceCard
              icon={<FaCode />}
              title="Backend Solution"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat
          repudiandae aliquam. Vero aliquam delectus voluptas aut error
          "
            />
          </div>
        </div>
      </div>
    </>
  );
}
