import React from "react";

function BtnDiv({ divClass = null, btnClass = null, label }) {
  return (
    <div className={divClass}>
      <button className={btnClass}>{label}</button>
    </div>
  );
}

export default BtnDiv;
