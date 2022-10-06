import { ads, popular } from '../../data/home';
import { recipes } from '../../data/recipes';
import Ads from '../Common/Ads';
import FoodCard from '../Common/FoodCard';

function PopularSection() {
    return ( 
        <>
  <div className="gap"></div>
  <section id="food_cards">
    <div className="container">
      <div className="card_heading">
        <h1>{recipes.heading}</h1>
        <p>
            {recipes.subheading}
        </p>
      </div>

        <div className="row">
           
        {
            
            recipes.recipe.slice(0,5).map((item,index) =>
            <div className="col-6 col-lg-4">
                <FoodCard key={index} data={item} />
            </div>
          )
        }

            


           <div className="col-6 col-lg-4">
            <div className="food_card ads">
               <Ads/>
           </div>
           </div>
        </div>
      
    </div>
  </section>

        </>
     );
}

export default PopularSection;