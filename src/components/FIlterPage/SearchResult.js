import { recipes } from "../../data/recipes";
import FoodCard from "../Common/FoodCard";

function SearchResult({cat}) {

    const filtered = recipes.recipe.filter((item) => { return item.cat === cat})
    console.log(filtered);
    return ( 
        
        <div className="search_results">
        <p>{cat}</p>

                            <div id="food_cards">
                            <div className="row">
                               {
                                filtered.map((item)=>
                                <div className="col-6 ">
                                  <FoodCard data={item}/>
                                </div>
                            )
                               }
            
                                
        
        
                                <nav aria-label="Page navigation example pagination">
                                    <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        </a>
                                    </li>
                                    </ul>
                                </nav>
                            </div>
        
                            </div>
                            
        </div>
                        
     );
}

export default SearchResult;