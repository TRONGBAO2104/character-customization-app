import React from "react";

function CustomDetail({ item, name, handleClick, setSelected, selected }) {
  // console.log(selected);
  // console.log(item);
  // const bodyItem = item.id.includes("body");
  // const eyesItem = item.id.includes("eyes");
  // const hairItem = item.id.includes("hair");
  // const mouthsItem = item.id.includes("mouths");
  // const clothes1Item = item.id.includes("clothes1");
  // const clothes2Item = item.id.includes("clothes2");
  // const glassesItem = item.id.includes("glasses");

  // const bodySelected = selected.id.includes("body");
  // const eyesSelected = selected.id.includes("eyes");
  // const hairSelected = selected.id.includes("hair");
  // const mouthsSelected = selected.id.includes("mouths");
  // const clothes1Selected = selected.id.includes("clothes1");
  // const clothes2Selected = selected.id.includes("clothes2");
  // const glassesSelected = selected.id.includes("glasses");
  return (
    <div
      // className={`square ${
      //   bodySelected === bodyItem
      //     ? "selected"
      //     : eyesSelected === eyesItem
      //     ? "selected"
      //     : hairSelected === hairItem
      //     ? "selected"
      //     : mouthsSelected === mouthsItem
      //     ? "selected"
      //     : clothes1Selected === clothes1Item
      //     ? "selected"
      //     : clothes2Selected === clothes2Item
      //     ? "selected"
      //     : glassesSelected === glassesItem
      //     ? "selected"
      //     : ""
      // }`}
      // className="square"
      className={`square ${selected ? "selected" : ""}`}
      onClick={() => {
        handleClick(item);
        setSelected(item);
      }}
    >
      <img
        src={item.imgLink}
        alt={`character-${name}-min`}
        className={`character-${name}-min`}
      />
    </div>
  );
}

export default CustomDetail;
