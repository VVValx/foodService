import React from "react";

function OrderHeader({ src, alt }) {
  return (
    <header className="builder builder-header">
      <img src={src} alt={alt} />
    </header>
  );
}
export default OrderHeader;
