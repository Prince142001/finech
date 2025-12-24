import React from "react";
import { Card } from "./Card";
import APIRequestTextHorizontalContainer from "../../assets/API Request Text Horizontal Container.png";
import Container from "../../assets/Container.png";
import Card95 from "../../assets/Card95.png";
import Card001 from "../../assets/Card001.png";

function RightContiner() {
  return (
    <div className="">
      <Card
        img={APIRequestTextHorizontalContainer}
        classname="absolute lef-1/2 -translate-x-1/2 rotate-3"
      />
      <div>
        <img src={Container} alt="card" />
      </div>
      <Card img={Card95} classname="rotate-3" />
      <Card img={Card001} classname="rotate-3" />
    </div>
  );
}

export default RightContiner;
