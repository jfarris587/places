import React from "react";
import Item from "./Item";

const Image = (props) => {
  var random = Math.floor(Math.random() * 7) + 1;
  var backgroundImage = "img/"+random+".jpg";

  return (
    <div className="image" style={{ background: `url(${backgroundImage})`}}>
      <div className="overlay">
        <div className="dashboard">

          {props.array.map((item, index) => (
            <Item
              key={index}
              info={item}
            />
          ))}


        </div>
      </div>
    </div>
  );
}


export default Image;
