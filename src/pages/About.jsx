import React from "react";
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (<>
              <Helmet>
                <title>Bd Traveling | About  </title>
            </Helmet>
     <div>
            <img src="https://tourtoday.com.bd/wp-content/uploads/2017/02/slider.jpg" alt="" />
        </div>
    <div className="px-8 py-4 text-center bg-gray-300 ">
      <h1 className="text-4xl font-bold">About us</h1>
      <p className="my-6 font-thin text-2xl">
      Whether you're fascinated by history, intrigued by nature, or seeking relaxation on pristine beaches, Bangladesh offers a diverse tapestry of experiences for every traveler. Embrace the warmth of the people and the richness of the culture as you explore the hidden gems of this enchanting destination. On the surface, you might think that arranging this site would be a simple process. After all, how difficult could it be to persuade visitors to check out beautiful beaches and hikes through its does this by dividing the various regions into different “Experiences.”
      </p>
      <div className="flex justify-center">
        <img
          src="https://www.tourradar.com/days-to-come/wp-content/uploads/2016/08/fb-Lao-Tzu-1-1024x573.jpg"
          alt=""
        />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* <div className="single-shipping text-center font-bold text-5xl mx-auto">
    
            <h3>30 DAYS RETURN</h3>
          </div>
          <div className="single-shipping text-center font-bold text-5xl mx-auto">
        
            <h3>FREE SHIPPING</h3>
          </div>
          <div className="single-shipping text-center font-bold text-5xl mx-auto">
        
            <h3>SECURE PAYMENT</h3>
          </div> */}
        </div>
      </div>
    </div>
 </> );
};

export default About;
