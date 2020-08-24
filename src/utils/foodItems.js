import React from "react";
import { Link } from "react-router-dom";
import BtnDiv from "./btnDiv";

function FoodItems({ src, alt }) {
  return (
    <div className={`food-items ${alt}`}>
      <img src={src} alt={alt} />
      <Link to="/order">
        <BtnDiv btnClass="order-btn" label="Place order" />
      </Link>
    </div>
  );
}

export default FoodItems;
