import React from "react";

function CustomDetail({ item, name, handleClick }) {
  return (
    <div className="square" onClick={() => handleClick(item)}>
      <img
        src={item.imgLink}
        alt={`character-${name}-min`}
        className={`character-${name}-min`}
      />
    </div>
  );
}

export default CustomDetail;
