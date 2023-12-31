import "./Hero.css";
import HeroImage from './../../../public/images/rahed.png';
import HeroBG from './../../../public/images/hero_bg.webp';


export default function Hero() {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero-left">
          <div className="hl-content">
            {" "}
            <h1>Hey! welcome</h1>
            <h1>I'm <span>MD RAHED MIA</span></h1>
            <h3>Junior web developer. Front end specialist.</h3>
          </div>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="" className="hero-img1"/>
          <img src={HeroBG} alt="" className="hero-bg"/>
        </div>
      </div>
    </>
  );
}
