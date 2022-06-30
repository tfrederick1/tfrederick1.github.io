import React from 'react';
import Numerical_Analysis_1 from '../Images/Numerical-Analysis/Numerical_Analysis_1_Ratio.png';
import Great_Wave_1 from '../Images/Great_Wave_1.png'
import Rocket_Blast_1 from '../Images/Rocket-Blast/Rocket_Blast_1_Ratio.png'

class Portfolio extends React.Component {
    render() {
        return (
            <div class="portfolio">
                <div class="text-box">
                    <div class="centered-content">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div class="image-columns">
                    <div class="cover-image-container">
                        <a href="/portfolio/featured">
                            <img src={Numerical_Analysis_1} class="cover-image" alt="Featured"></img>
                            <div class="overlay">
                                <div class="overlay-text">
                                    Featured
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image" alt="Websites"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Websites
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image" alt="School Projects"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                School Projects
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Rocket_Blast_1} class="cover-image" alt="Games"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Games
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image" alt="Animations/Models"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Animations/Models
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Great_Wave_1} class="cover-image" alt="Art"></img>
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