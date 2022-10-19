import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./style.css"
import Sdata from "./Sdata"
// import meh , {vill ,muName,muNames} from "./App";    or

// console.log(Sdata[0]);
function ncard(val){
  return (
    <Card
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />
  );
}

ReactDOM.render(
  <>
    <h1 className="heading_style"> List of Top 6 Netflix Series in 2022</h1>

    {Sdata.map(ncard)}

    <h1 className="footer_style"> </h1>
   
  </>,
  document.getElementById("root")
);