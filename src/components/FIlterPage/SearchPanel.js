import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

function SearchPanel() {


    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
}


    return ( 

        <>
        <div className="search_panel">
                            <form action="" method="post">
                                <h5>Search Recipe</h5>
                                <input placeholder="Search...." className="form-control search_box" type="text" name="" id=""/>
                            </form>
        
                        <div className="filter">
                            <div className="price_heading">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 9.375V16.875" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10 3.125V6.875" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.625 15.625V16.875" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.625 3.125V13.125" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.5 13.125H13.75" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.375 13.125V16.875" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.375 3.125V10.625" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.5 10.625H6.25" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.875 6.875H8.125" stroke="#FF7426" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
            
                                    <div>
                                    <span><h5>Filter by Price</h5></span>
                                    </div>
        
        
                                    <div className="recipie_panel">
                            
                                    
                                        <br />
                                    <div className="a"></div>
                                    
                                </div>
                            </div>
        


                            {/* Range slider react  yyy*/}
                            <div className="App">
		<MultiRangeSlider
			min={10}
			max={1000}
            ruler={false}
			step={5}
            label={true}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>
	</div>

        
                            <div className="gap_48"></div>
                            <div className="categories">
                                <h5>Categories</h5>
                                <div className="button_groups">
                                    <button className="filter_btn" >1 layer</button>
                                    <button className="filter_btn active" >2 layer</button>
                                    <button className="filter_btn" >3 layer</button>
                                    <button className="filter_btn" >4 layer</button>
                                    <button className="filter_btn" >5 layer</button>
                                    <button className="filter_btn" >6 layer</button>
                                    <button className="filter_btn" >7 layer</button>
                                </div>
                            </div>
        
        
        
                            {/* <div className="sub_categories">
                                <h5>Sub Categories</h5>
                                <div className="button_groups">
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                    <button className="filter_btn" >2 layer</button>
                                </div>
                            </div> */}
        
        
        
                            <div className="select_options">
                                <h5>Cooking Method</h5>
                                <div className="checkbox_group">
        
                                    <div className="method_checkbox">
                                        <p>Grilling</p>
                                        <input className="theme_checkbox" type="checkbox" name="" id=""/>
                                    </div>
        
                                    <div className="method_checkbox">
                                        <p>Roasting</p>
                                        <input className="theme_checkbox" type="checkbox" name="" id=""/>
                                    </div>
        
        
                                    <div className="method_checkbox">
                                        <p>Searing</p>
                                        <input className="theme_checkbox" type="checkbox" name="" id=""/>
                                    </div>
        
        
        
                                    <div className="method_checkbox">
                                        <p>Steaming</p>
                                        <input className="theme_checkbox" type="checkbox" name="" id=""/>
                                    </div>
        
        
                                    <div className="method_checkbox">
                                        <p>Tossing</p>
                                        <input className="theme_checkbox" type="checkbox" name="" id=""/>
                                    </div>
        
                                </div>
                            </div>
        
        
                                
                        </div>
        
                        </div>
        </>
     );
}

export default SearchPanel;