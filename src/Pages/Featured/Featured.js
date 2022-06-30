import React from 'react';
import Numerical_Analysis_1 from '../../Images/Numerical-Analysis/Numerical_Analysis_1_Ratio.png';
import Great_Wave_1 from '../../Images/Great_Wave_1.png'
import Rocket_Blast_1 from '../../Images/Rocket-Blast/Rocket_Blast_1_Ratio.png'

class Featured extends React.Component {
    render() {
        return (
            <div class="featured">
                <div class="text-box">
                    <div class="centered-content">
                        <h2>Featured</h2>
                    </div>
                </div>
                <div class="image-columns">
                    <div class="cover-image-container">
                        <a href="/portfolio/featured/sea-level-rise">
                            <img src={Numerical_Analysis_1} class="cover-image" alt="Featured"></img>
                            <div class="overlay">
                                <div class="overlay-text">
                                    Sea Level Rise Regression Analysis
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image" alt="Websites"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                5 Letter Word Game
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image" alt="School Projects"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Covid-19 and Flight Trends
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Rocket_Blast_1} class="cover-image" alt="Games"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Rocket Blast
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Numerical_Analysis_1} class="cover-image" alt="Animations/Models"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Space Battle Animation
                            </div>
                        </div>
                    </div>
                    <div class="cover-image-container">
                        <img src={Great_Wave_1} class="cover-image" alt="Art"></img>
                        <div class="overlay">
                            <div class="overlay-text">
                                Maze Madness
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;