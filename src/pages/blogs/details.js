import { useParams } from "react-router";
import BlogArticle from "../../components/Blog/BlogArticle";
import BlogArticleList from "../../components/Blog/BlogArticleList";
import BlogDetailsHero from "../../components/Blog/BlogDetailsHero";
import { title } from "../../js/title";

function BlogDetails() {

    const {id,blogTitle} = useParams();

    title(blogTitle)
    return ( 

        <>
        

<BlogDetailsHero/>
<BlogArticle id={id} />
<BlogArticleList/>
</>
     );
}

export default BlogDetails;