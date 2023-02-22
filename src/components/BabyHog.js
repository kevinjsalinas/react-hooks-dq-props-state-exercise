import React, { useState } from "react";
// import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {


  let [weight, setWeight] = useState(200);

  function handleChangeWeight(e) {

    setWeight(e.target.name === "+" ? ++weight : --weight)

    // console.log(setWeight(weight))
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"

  }

  const eyeColorMapper = {
    'blue' : BlueBaby,
    'sun' : SunBaby,
    'glowing' : GlowingBaby
  }


  return (
    <li className="hogbabies">
      <h1>Name: {props.name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eye}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[props.eye]}
          style={{ height: `${weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
