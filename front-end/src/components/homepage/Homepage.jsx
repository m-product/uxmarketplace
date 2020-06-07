import React from 'react';
import InterestForm from './InterestForm';
import Footer from '../layout/Footer';
import ExplainProduct from './ExplainProduct';
import MissionStatement from './MissionStatement';
import UXinfo from './UXinfo';
import BuyerInfo from './BuyerInfo';
import AboutTeam from './AboutTeam';


function Homepage() {
    return (
        <div className="container marketing">
            <ExplainProduct />
            <MissionStatement />
            <UXinfo />
            <BuyerInfo />
            <AboutTeam />
            <InterestForm />
            <hr className="featurette-divider" />
            <Footer />
        </div>
    );
}

export default Homepage;
