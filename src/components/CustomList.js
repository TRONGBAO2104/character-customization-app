import React from "react";
import CustomDetail from "./CustomDetail";

function CustomList({ name, total, link, handleClick, setSelected, selected }) {
  const items = [];
  for (let i = 1; i <= total; i++) {
    items.push({ id: `${name}-${i}`, imgLink: `./character/${link}/${i}.png` });
  }

  const isSelected = (selectedItem, item) => {
    console.log(selectedItem);
    if (selectedItem.body === null || selectedItem.eyes === null) return false;
    else if (name === "body") {
      return selectedItem.body.id === item.id;
    } else if (name === "eyes") {
      return selectedItem.eyes.id === item.id;
    } else return false;
  };

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
            setSelected={setSelected}
            selected={isSelected(selected, item)}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomList;
