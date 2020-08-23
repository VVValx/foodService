import React from "react";
import nat1 from "../../images/nat-1.jpg";
import "./home.css";

function home() {
  return (
    <div className="home_wrapper">
      <header className="header">
        <div className="center">
          {/* <span class="heading-top">OUTDOORS</span>
          <span class="heading-bottom">IS WHERE LIFE HAPPENS</span> */}

          <h1>OUTDOORS</h1>
          <h4>IS WHERE LIFE HAPPENS</h4>
          <button>ORDER NOW</button>
        </div>
      </header>

      <section className="section-1">
        <div className="section-wrapper">
          <div className="section-left"></div>
          <div className="section-right">
            <div className="img-1">
              <img src={nat1} alt="food1" />
            </div>
            <div className="img-2">
              <img src={nat1} alt="food1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
