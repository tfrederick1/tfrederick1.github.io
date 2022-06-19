import React from 'react';
import Numerical_Analysis_1 from '../Images/Numerical_Analysis_1.png';

class Portfolio extends React.Component {
    render() {
        return (
            <div class="portfolio">
                <div class="text-box">
                    <div class="centered-content">
                        <h1>Portfolio</h1>
                    </div>
                </div>
                <div class="image-columns">
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Featured
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Websites
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                School Projects
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Games
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Animations/Models
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Art
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;