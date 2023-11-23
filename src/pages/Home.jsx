import React from 'react';
import Banner from '../components/Layout/Banner';
import Services from './Services';
import TopService from './TopService';
import GuidBook from './GuidBook';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='pt-[-24px] min-h-[calc(100vh-68px)]'>
            <Helmet>
                <title>Bd Traveling | Home </title>
            </Helmet>
             <Banner/>
             <TopService/>
             <Services/>
             <GuidBook/>
        </div>

    );
};

export default Home;