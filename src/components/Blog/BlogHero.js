function BlogHero() {
    return ( 
        <>
        <section style={{backgroundImage:`url(${require('../../images/backgrounds/blog_bg.webp')})`}} id="blog_banner">
    <div className="container">
      <div className="heading_desc">
        <h1>Blog & Article</h1>
        <img className="img-fluide" src="../../images/backgrounds/leaf.png" alt=""/>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqut enim ad minim
        </p>

        <div className="subscribe_field">
          <form action="" method="post">
            <input className="form-control input" placeholder="Search article, news or recipe..." type="email"/>
            <button role="button" className="subscribe_btn" type="submit"> Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
        </>
     );
}

export default BlogHero;