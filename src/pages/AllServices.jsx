import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Helmet } from 'react-helmet-async';

const AllServices = () => {
    const [services, setServices] = useState([]);


    useEffect(() =>{
      fetch('https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/travel_services')
      .then(res => res.json())
      .then(data => setServices(data));
  
    },[])

    
    return (
      <div>
            <Helmet>
                <title>Bd Traveling | All Service </title>
            </Helmet>
          <div>
            <h3 className="text-3xl font-bold my-4 pt-20">Our All Features Tours</h3>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
            
          </div>
  
      </div>
    );
  };

export default AllServices;