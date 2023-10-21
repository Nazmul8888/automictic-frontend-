

const Banner = () => {
    return (
        <div >
          {/* <img src="https://i.ibb.co/pZ4RCpv/benjamin-child-7-Cdw956m-Z4w-unsplash.jpg" alt="" /> */}



          <div className="carousel h-[80vh] mx-auto">
      <div id="slide1" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/48kGmSj/joey-banks-YApi-Wyp0lqo-unsplash.jpg" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
     </div> 
    <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/h8pzhmp/serge-kutuzov-1-K9-Tb-JWs2-U-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div> 
  
  
    </div>
        </div>
    );
};

export default Banner;