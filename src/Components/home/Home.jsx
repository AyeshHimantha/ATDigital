import React from 'react'
import "./home.css";
import image1 from "../../Assets/image1.png"
import image2 from "../../Assets/image2.png"

const Home = () => {
  return (
    <div className="section home">
        <div className="home-container container1">
            <div className="column narrow-column">
                <img className="home-img" src={image2} alt="" />
            </div>
            <div className="column wide-column">
                <h3 className="home-title">Web & Mobile App Development</h3>
                <p className="home-text">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <button className="btn home-btn">Learn More</button>
            </div>
        </div>
        <div className="home-container container2">
            <div className="column wide-column">
                <h3 className="home-title">Digital Strategy Consulting</h3>
                <p className="home-text">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                <button className="btn home-btn">Learn More</button>
            </div>
            <div className="column narrow-column">
                <img className="home-img" src={image1} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Home
