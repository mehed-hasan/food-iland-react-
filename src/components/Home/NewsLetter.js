import { newsLetter } from '../../data/home';

function NewsLetter() {
    return ( 

        <>
        
  <div className="gap"></div>


<section id="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="newsletter_left">
            <h2 dangerouslySetInnerHTML={{__html:newsLetter.heading}}></h2>
            <p>{newsLetter.desc}</p>
            <a href="">view More</a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="newsletter_right">
              <div style={{backgroundImage:`url(${require(`../../images/backgrounds/${newsLetter.image}`)})`}} className="news_letter_bg">

              </div>
          </div>
        </div>
      </div>
    </div>
</section>
        </>
     );
}

export default NewsLetter;