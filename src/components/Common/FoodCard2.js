function FoodCard({data}) {
    return ( 

              <div className="row">
                <div className="col-5">
                  <div className="food_img">
                    <img className="img-fluid" src={require(`../../images/foods/${data.image}`)} alt=""/>
                  </div>
                </div>
                <div className="col-7">
                  <div className="food_details">
                    <h4><a href="../pages/article_details.html">{data.title.length > 30 ?  data.title.substring(0,30)+'...' : data.title}</a></h4>
                    <p>By {data.author} </p>
                  </div>
                </div>
              </div>



     );
}

export default FoodCard;