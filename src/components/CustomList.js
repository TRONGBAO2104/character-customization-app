import React from "react";
import CustomDetail from "./CustomDetail";

function CustomList({ name, total, link, handleClick }) {
  const items = [];
  for (let i = 1; i <= total; i++) {
    items.push({ id: `${name}-${i}`, imgLink: `./character/${link}/${i}.png` });
  }
  return (
    <div className="list-custom">
      <h3>{name}</h3>
      <div className="list-custom-detail">
        {items.map((item) => (
          <CustomDetail
            key={item.id}
            item={item}
            name={name}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomList;
