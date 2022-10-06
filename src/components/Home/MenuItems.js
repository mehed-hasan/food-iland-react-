import { menus } from "../../data/home";

function MenuItems() {

  const merged = (item) =>{
    return item.replace(' ', '-' )
  }
    return ( 
        <>
          
  <div className="gap"></div>

<section id="menu_items">
  <div className="container">
    <div className="menu_heading">
      <h1>{menus.heading}</h1>
      <p>
        {menus.desc}
        </p>
    </div>
    

    <div className="tab_btns">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {
          menus.type.map((item) =>
          <li className="nav-item" role="presentation">
          <button className="nav-link " id={`pills-`} data-bs-toggle="pill" data-bs-target={`#pills-${merged(item)}`} type="button" role="tab" aria-controls={`pills-${merged(item)}`} aria-selected="true">{item}</button>
        </li>
          )
        }



      </ul>
    </div>

    <div className="gap"></div>
    <div className="all_items">
      <div className="tab-content" id="pills-tabContent">

        {
          menus.type.map((item) =>
          <div className="tab-pane fade show " id={`pills-${merged(item)}`} role="tabpanel" aria-labelledby={`pills-${merged(item)}-tab`}>
          <div className="row">
            {
              menus.menu.filter((menu) => {return menu.type === item }).map((item) =>
              <div className="col-12 col-md-6">
              <div className="item">
                <img src={require("../../images/foods/mini_food.png")} alt=""/>
                <div className="about_item">
                  <h5>{item.title}</h5>
                  <p>{item.element}</p>
                </div>
      
                <div className="item_price">{item.price}</div>
              </div> 
              </div>
              )
            }

          </div>
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

export default MenuItems;