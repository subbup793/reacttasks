import React, { useHistory, useState, Redirect } from "react";

import omegaLogo from "/omega-3.svg";
const HomePageComponent = () => {
  const [auth, setauth] = useState(false);
  if (auth) {
    return <Redirect to="/ProductDisplayPage" />;
  }
  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={omegaLogo} className="logo" alt="Omega3 logo" />
        </a>
      </div>
      <h1>Edible Oils</h1>
      <h3>by</h3>
      <h4>US with</h4>
      <h2>love and safety</h2>
      <div className="explore-btn-card">
        <button
          className="explore-btn"
          onClick={() => {
            setauth(true);
          }}
        >
          Be Healthy..!
        </button>
      </div>
      <p className="suggestion-p">
        Click on {"Be Healthy..!"} to explore our products
      </p>
    </>
  );
};
export default HomePageComponent;
