import React from "react";

function RecipeList({ recipe }) {
  return (
    <div className="recipe-items">
      {recipe.map((r, index) => (
        <p key={index}>{`${r.item} ${r.price}`}</p>
      ))}

      <h4>
        Price:{" "}
        {recipe
          .map((r) => r.price)
          .reduce((total, current) => total + current, 0)}
      </h4>
    </div>
  );
}

export default RecipeList;
