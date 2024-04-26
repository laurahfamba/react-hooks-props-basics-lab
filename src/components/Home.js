
import React from "react";
import user from "../data/user";
function Home(props) {
  const{name, city,color} = props
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;