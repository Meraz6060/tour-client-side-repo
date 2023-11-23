import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

const TopService = () => {
  const [travel_services, setServices] = useState([]);
  const url = `https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/travel_services`;
  // const initialDisplayCount = 6;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [url]);
  const topservice = travel_services
    .filter((book) => book.Rating >= 6)
    .slice(0, 4);

  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold my-4">Our Top Features Tours</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {topservice.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default TopService;
