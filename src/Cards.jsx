import React from "react";
import "./style.css"
function Card(props){
    //  console.log(props);
     return (
    <>
        <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="images" />
            <div className="card_info">
              <span className="card_category">{props.title}</span> <br/><br/>
              <h2 className="card_title">{props.sname}</h2>
              <a href={props.link} target="_black"> <br/>
                <button>Watch Now</button> <br/> <br/>
              </a>
            </div>
          </div>
        </div>
      </>
      )
    }

    export default Card;