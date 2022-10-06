import { Link } from "react-router-dom";
import { navbar } from "../../data/navbar";
import { recipes } from "../../data/recipes";

function Navbar() {
    return ( 

        <>
    <section id="navbar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="../index.html"><img className="img-fluid" src={require("../../images/logo/logo.png")} alt=""
            srcset=""/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 links mx-auto">


          {
            navbar.map((item) => 
            <li className="nav-item dropdown">
              {item.label ===  'Recipes' &&
              
              (<>
              <Link className="nav-link dropdown-toggle" href="category.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {item.label}
              </Link>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="arrow"></div>
                
                {
                  recipes.cat.map((item) =>
                  <li>
                    <Link to={`filterpage/${item.type}`} className="dropdown-item" >
                  <span dangerouslySetInnerHTML={{__html:item.icon}}>

                  </span>
                  {item.type}</Link>
                  </li>
                  )
                }


              </ul>
              </>)
              }
              
          {
            item.label !==  'Recipes' && 
            (            
            <Link className="nav-link active" aria-current="page" to={item.link}>{item.label}</Link>
            ) 
          } 


            </li>
            )
          }



          </ul>



        </div>
      </div>
    </nav>
  </section>
        </>
     );
}

export default Navbar;