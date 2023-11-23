import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import Tour from '../pages/Tour';
import Error from '../pages/Error';
import PrivateRouters from './PrivateRouters';
import Services from '../pages/Services';
import AllServices from '../pages/AllServices';
import ServiceBooking from '../pages/ServiceBooking';
import BookList from '../pages/BookList';
import Destination from '../pages/Destination';

const Routers = createBrowserRouter ([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                index: true,
                element:<Home/>,
            },
            {
                path:'services',
                element:<Services/>
            },
              
            {
                path:'tour',
                element:<Tour/>,
            },
            
            {
                path:'contact',
                element:<Contact/>,
            },
            {
                path:'about',
                element:<About/>,
            },
            {
                path:'/destination/:location',
                element:<Destination/>,
            },
            {
                path:'booklist',
                element:
                <PrivateRouters>
                    <BookList/>
                </PrivateRouters>,
            },
            {
                path:'allservices',
                element:
                <PrivateRouters>
                    <AllServices/>
                </PrivateRouters>,
            },
            {
                path:'booking/:id',
                element:<PrivateRouters><ServiceBooking/></PrivateRouters>,
                loader: ({params})=> fetch(`https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/travel_services/${params.id}`),
                // 
                
                // {/* </PrivateRouters>, */}
            },
            {
                path:'tour/:id',
                element:<PrivateRouters><Tour/></PrivateRouters> ,
                loader: ({params})=> fetch(`https://tour-guid-server-ripo-g4avs4osb-meraz6060.vercel.app/travel_services/${params.id}`),
            
            }
        
        
        ],
    },
    {
        path:'/login',
        element:<Login/>,
    },
    {
        path:'/register',
        element:<Register/>,
    },
    
]);

export default Routers;