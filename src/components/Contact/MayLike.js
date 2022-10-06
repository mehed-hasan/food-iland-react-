import { recipes } from "../../data/recipes";
import FoodCard from "../Common/FoodCard";

function MayLike() {
    return ( 

        <>
<div className="gap_64"></div>
<section id="you_may_like">
  <h2 className="text-center">Check out the delicious recipe</h2>
  <div className="gap_64"></div>
   <div id="food_cards" className="container">
    <div className="food_card_wrapper">
      <div className="row">
        {
            recipes.recipe.slice(0,3).map((item,index)=>
            <div className="col-12 col-md-6 col-lg-4">
                <FoodCard key={index} data={item}/>
            </div>

            )
        }


      </div>
     </div>
   </div>
</section>
        </>
     );
}

export default MayLike;