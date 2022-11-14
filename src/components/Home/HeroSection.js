import Slider from "react-slick";
import { heroSection } from "../../data/home";
import HeroSliderEl from "./HeroSliderEl";

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${require("../../images/backgrounds/hero.webp")})`,
        }}
        id="hero"
      >
        <div className="container">
          <div className="row ">
            <div className="hero_slider">
              <Slider {...settings}>
                {heroSection.map((item, index) => (
                  <HeroSliderEl key={index} data={item} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
