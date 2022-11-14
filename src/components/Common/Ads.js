import { ads } from "../../data/home";

function Ads() {
  return (
    <div
      style={{
        backgroundImage: `url(${require(`../../images/foods/${ads.image}`)})`,
      }}
      className="food_add_img"
    ></div>
  );
}

export default Ads;
