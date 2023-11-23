import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const Destination = () => {
  const { location } = useParams();
  const [services, setServices] = useState([]);
  const [displayedServices, setDisplayedServices] = useState([]);

  useEffect(() => {
    // Fetch services related to the specified location
    fetch(`https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/travel_services?location=${location}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);

        const userBookings = services.filter(
          (service) => service.distric === location
        );
        setDisplayedServices(userBookings);
      });
  }, [location]);

  return (
    <div className="pb-28">
            <Helmet>
                <title>Bd Traveling | Destination </title>
            </Helmet>
      <div
        className="w-full h-1/3" >
        <img
          className="w-full h-5/6 object-cover"
          src="https://www.tourtoday.com.bd/shop/wp-content/uploads/2018/05/banner-photo.jpg"
          alt=""
        />
      </div>
      <h1 className="text-3xl text-black font-bold">
        {location} Destination
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {displayedServices.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Destination;
