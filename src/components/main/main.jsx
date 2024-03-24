import React from "react";
import "./main.css";
import { assets } from "../../assets/assets";
function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How Can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beutiful place to see on upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p> Briefly summerize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readibilty of following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
            <a href="https://support.google.com/gemini/answer/13594961?visit_id=638468749957698438-497984485&p=privacy_notice&rd=1#privacy_notice">
              Your privacy & Gemini Apps
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
