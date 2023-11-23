import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [displayedServices, setDisplayedServices] = useState([]);
  const [showAll, setShowAll] = useState(false);
  // const initialDisplayCount = 6;

console.log(displayedServices);


  useEffect(() => {
    fetch('https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/travel_services')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setDisplayedServices(data.slice(0, 6));
      });
  }, []);

  const handleShowMore = () => {
    if (!showAll) {
      setDisplayedServices(services);
    }
    setShowAll(!showAll);
  };

  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold my-4">Our Features Tours</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {displayedServices.map(service => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      {!showAll && (
        <div className='max-w-screen flex items-center justify-center my-5'>
          <Link to="/allservices">
                <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleShowMore}
        >
          Show More
        </button>
        </Link>
        </div>
      )}
    </div>
  );
};

export default Services;
