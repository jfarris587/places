import React from "react";

const Item = (props) => {
  console.log(props.info);
  return (
    <div className="item">
      <h4>{props.info[0]}</h4>
      <p>{props.info[1]}</p>
    </div>
  );
}


export default Item;
