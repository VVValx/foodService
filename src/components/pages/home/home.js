import React from "react";
import Burger from "../../images/icons/burger.png";
import Fries from "../../images/icons/fries.png";
import Chicken from "../../images/icons/chicken-wing.png";
import Pizza from "../../images/icons/pizza-slice.png";
import FoodItems from "../../../utils/foodItems";
import "./home.css";

function home() {
  return (
    <div className="home_wrapper">
      <header className="header">
        <div className="center">
          {/* <span class="heading-top">OUTDOORS</span>
          <span class="heading-bottom">IS WHERE LIFE HAPPENS</span> */}

          <h1>FOOD</h1>
          <h4>SERVICE AT ITS BEST</h4>
          <button>ORDER NOW</button>
        </div>
      </header>

      <section className="section-wrapper">
        <div className="section-left"></div>
        <div className="section-right">
          <div className="section-center">
            <h2>Download our app</h2>
            <p>
              Download our app for easy access, monthly rewards, one-click
              orders, complaints, games and loads of customer benefits meant for
              you
            </p>

            <button>Download App</button>
          </div>
        </div>
      </section>

      <section className="grid-wrapper">
        <div className="food-container">
          <FoodItems src={Burger} alt="burger" />
          <FoodItems src={Fries} alt="fries" />
          <FoodItems src={Chicken} alt="chicken" />
          <FoodItems src={Pizza} alt="pizza" />
        </div>
      </section>

      <footer className="footer">
        <nav>
          <ul>
            <p>Contact</p>
            <li>Faq</li>
            <li>Feedback</li>
            <li>live Chat</li>
          </ul>

          <ul>
            <p>Food</p>
            <li>Salad</li>
            <li>Chicken</li>
            <li>Chips</li>
            <li>Nuggets</li>
          </ul>

          <ul>
            <p>About us</p>
            <li>Job seekers</li>
            <li>Media</li>
            <li>Our history</li>
          </ul>

          <ul>
            <p>Locations</p>
            <li>Finland</li>
            <li>Norway</li>
            <li>Sweden</li>
            <li>United Kingdom</li>
          </ul>
        </nav>

        <div className="line"></div>

        <div className="sub">
          <div className="sub-left">
            <input type="text" name="subscribe" placeholder="Subscribe" />
          </div>

          <div className="sub-right">
            <button>Subscibe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default home;
