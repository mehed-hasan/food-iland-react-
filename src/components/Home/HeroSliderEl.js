function HeroSliderEl({data}) {
    return ( 

        <div className=" d-flex align-items-center hero_row">
            <div className="col-12 col-lg-6">
              <div className="hero_left">
                <h2>{data.title}</h2>
                  <p>
                    {data.moto}
                  </p>
      
                  <a href=""> Save More</a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="hero_right">
                <div style={{backgroundImage:`url(${require(`../../images/backgrounds/${data.sliderImage[0]}`)})`}} className="hero_img1"></div>
                <div style={{backgroundImage: `url(${require(`../../images/backgrounds/${data.sliderImage[1]}`)})`}} className="hero_img2"></div>
              </div>
            </div>
          </div>
     );
}

export default HeroSliderEl;