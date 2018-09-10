import React from "react";

const Information = (props) => {

  return (
    <div className="information">
      <h2 className="logo">Places.</h2>

      <div className="information_country">
        <h1>{props.name}</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


        <div className="flag" style={{ background: `url(${props.flag})`}}></div>

      </div>

      <div className="information_menu">
        <div className="explore">
          EXPLORE
        </div>

        <div className="more">
          more
        </div>
      </div>
    </div>

  );
}


export default Information;
