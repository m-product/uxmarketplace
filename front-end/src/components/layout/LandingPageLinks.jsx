import React from 'react';


function LandingPageLinks() {
    return (
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#!">For UX Professionals</a>
                    </li>

                    <li className="nav-item active">
                        <a className="nav-link" href="#!">Become a Beta Tester</a>
                    </li>

                    <li className="nav-item">
                        <button type="button" className="btn btn-outline-light">Subscribe for Updates</button>
                    </li>
                </ul>
            </div>
      </div>
    );
}

export default LandingPageLinks;
