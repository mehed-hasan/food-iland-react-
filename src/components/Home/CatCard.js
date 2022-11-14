import { Link } from "react-router-dom";

function CatCard({ data }) {
  return (
    <>
      <div className="col-6 col-md-3">
        <Link to="pages/category.html">
          <div
            style={{
              backgroundImage: `url(${require(`../../images/category/${data.image}`)})`,
            }}
            className="cat_card"
          >
            <h4>{data.catName}</h4>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CatCard;
