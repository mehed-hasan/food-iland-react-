import { cat } from "../../data/home";
import CatCard from "./CatCard";

function CatSection() {
  return (
    <>
      <div className="gap"></div>

      <section id="category">
        <div className="container">
          <div className="cat_heading">
            <h1>{cat.heading}</h1>
            <p>{cat.subHeading}</p>
          </div>

          <div className="food_cats">
            <div className="row">
              {cat.cats.map((item, index) => (
                <CatCard key={index} id={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CatSection;
