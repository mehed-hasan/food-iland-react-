import BlogArticle from "../../components/Blog/BlogArticle";
import BlogArticleList from "../../components/Blog/BlogArticleList";
import BlogHero from "../../components/Blog/BlogHero";
import BlogList from "../../components/Blog/BlogList";
import { title } from "../../js/title";
import BlogDetails from "./details";

function BlogPage() {

    title("Blogs")
    return ( 
        <>
        <BlogHero/>
        <BlogList/>
        </>
     );
}

export default BlogPage;