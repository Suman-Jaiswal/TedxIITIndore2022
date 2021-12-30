import React from "react";

import "./TeamCard.css";


const TeamCard = ({person}) => {

    const {name,image} = person

    return (
  
              <div className="card" style={{backgroundColor:"grey"}}>
                <div className="card-body">
                <div className="avatar">
                    <img
                      src={image}
                      className="card-img-top"
                      alt="was"
                    />
                  </div>
                  <h5 className="card-title">
                
                   {name}
                   </h5>
                </div>
              </div>
             
       
        
    );
}

export default TeamCard;