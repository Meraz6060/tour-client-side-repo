const Banner = () => {
    
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/bd/d1/b9/sajek.jpg?w=1000&h=-1&s=1" className="w-full" />
          <div  className="absolute flex  flex-col justify-center items-center w-full h-full  text-fuchsia-50">
                <h1 className="text-4xl font-bold px-28 justify-center text-rose-500	">Discover the Charms of Bangladesh: A Traveler's Paradise</h1>
                <p className="text-2xl font-semibold px-64 my-9  text-black">Nestled in South Asia, Bangladesh is a land of rich culture, vibrant landscapes, and warm hospitality..</p>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/ccYrrLZ/4.jpg"className="w-full" />

          <div  className="absolute flex  flex-col justify-center items-center w-full h-full  text-fuchsia-50">
                <h1 className="text-4xl font-bold px-28 justify-center text-white	">Discover the Charms of Bangladesh: A Traveler's Paradise</h1>
                <p className="text-2xl font-semibold px-64 my-9  text-white">Nestled in South Asia, Bangladesh is a land of rich culture, vibrant landscapes, and warm hospitality...</p>
            </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/wgspmRR/Sunset-at-Cox-s-Bazar-05.jpg" className="w-full" />
          <div  className="absolute flex  flex-col justify-center items-center w-full h-full  text-fuchsia-50">
                <h1 className="text-4xl font-bold px-28 justify-center text-white	">Discover the Charms of Bangladesh: A Traveler's Paradise</h1>
                <p className="text-2xl font-semibold px-64 my-9  text-black">Nestled in South Asia, Bangladesh is a land of rich culture, vibrant landscapes, and warm hospitality..</p>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/24/92/23/caption.jpg?w=900&h=-1&s=1" className="w-full" />
          <div  className="absolute flex  flex-col justify-center items-center w-full h-full  text-fuchsia-50">
                <h1 className="text-4xl font-bold px-28 justify-center text-rose-500	">Discover the Charms of Bangladesh: A Traveler's Paradise</h1>
                <p className="text-2xl font-semibold px-64 my-9  text-black">Nestled in South Asia, Bangladesh is a land of rich culture, vibrant landscapes, and warm hospitality..</p>
            </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>  
          </div>
        </div>
      </div>
    );
};

export default Banner;