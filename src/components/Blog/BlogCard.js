import { Link } from "react-router-dom";

function BlogCard({data,pattern}) {
    return ( 
      
       <div >
         <div className={pattern === "col" ? 'item flex-column' : 'item d-flex flex-column flex-sm-row ' }>
          <img src={require("../../images/foods/recipie.webp")} alt=""/>
          <div className="about_item">
            <h3>{data.title}</h3>
            <div className="user_info">
              <img src={require("../../images/users/user.svg" )}alt=""/>   
              <p>Jonathon Smith</p>
              <div className="date">{data.date1}</div>
            </div>
            <p className="blog_short_desc">
              {data.details.substring(0,200) }{data.details.length > 200 ? '.....' :''}
            </p>

           <Link className="see_more" to={`/blogDetails/${data.id}/${data.title}`}>See More </Link>
          </div>
        </div>
       </div>
     );
}

export default BlogCard;