import React, { Component } from 'react'
import InterestForm from './InterestForm'
import Footer from '../layout/Footer'
import ExplainProduct from './ExplainProduct'
import MissionStatement from './MissionStatement'
import UXinfo from './UXinfo'
import BuyerInfo from './BuyerInfo'
import AboutTeam from './AboutTeam'


class Homepage extends Component {
    render() {
        return (
            <div class="container marketing">
                <p></p>
                <ExplainProduct />
                <p></p>
                <MissionStatement />
                <p></p>
                <UXinfo />
                <p></p>
                <BuyerInfo />
                <p></p>
                <AboutTeam />
                <p></p>
                <InterestForm />
                <hr class="featurette-divider" />
                <Footer />
            </div>
        )
    }
}

export default Homepage;