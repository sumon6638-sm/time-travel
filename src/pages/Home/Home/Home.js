import React from 'react';
import Banner from '../Banner/Banner';
import AskSomething from './AskSomething/AskSomething';
import TourPackages from './TourPackage/TourPackages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TourPackages></TourPackages>
            <AskSomething></AskSomething>
        </div>
    );
};

export default Home;