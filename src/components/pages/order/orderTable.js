import React from "react";

function OrderTable({ food, addRecipe, removeRecipe }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Ingredients</th>
          <th>Price (euros)</th>
          <th>Add</th>
          <th>Remove</th>
        </tr>
      </thead>

      <tbody>
        {food.map((f, index) => (
          <tr key={index}>
            <td>{f.item}</td>
            <td>{f.price}</td>
            <td>
              <button onClick={() => addRecipe(f)} className="btn add">
                +
              </button>
            </td>
            <td>
              <button onClick={() => removeRecipe(f)} className="btn delete">
                -
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrderTable;
