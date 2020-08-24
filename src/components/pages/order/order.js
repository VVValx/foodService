import React, { useState } from "react";
import Burger from "../../images/icons/burger.png";
import OrderHeader from "./orderHeader";
import OrderTable from "./orderTable";
import RecipeList from "./recipeList";
import BtnDiv from "../../../utils/btnDiv";
import "./order.css";

function Order() {
  const [burger] = useState([
    { id: 1, item: "Cheese", price: 0.3 },
    { id: 2, item: "Beef", price: 1.8 },
    { id: 3, item: "Tomato", price: 0.2 },
    { id: 4, item: "Bacon", price: 1 },
    { id: 5, item: "Avocado", price: 0.5 },
  ]);

  const [recipe, setRecipe] = useState([]);

  const addRecipe = (b) => {
    const newRecipe = [...recipe];

    const included = newRecipe.includes(b);
    if (included === false) {
      newRecipe.push(b);
      setRecipe(newRecipe);
    }
  };

  const removeRecipe = (b) => {
    const recipes = [...recipe];
    const index = recipes.indexOf(b);
    if (index !== -1) {
      recipes.splice(index, 1);
      setRecipe(recipes);
    }
  };

  return (
    <div className="builder-container">
      <OrderHeader src={Burger} alt="hamburger" />

      <div className="builder recipe-container">
        <OrderTable
          food={burger}
          addRecipe={addRecipe}
          removeRecipe={removeRecipe}
        />

        <RecipeList recipe={recipe} />

        <BtnDiv divClass="checkout" btnClass="btn add block" label="Order" />
      </div>
    </div>
  );
}

export default Order;
