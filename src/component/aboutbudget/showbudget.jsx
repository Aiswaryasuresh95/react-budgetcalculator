import React from 'react';

const ShowBudget =({total,inc,exp}) =>{


    const Emoji = props => (
        <span
          className="emoji"
          role="img"
          aria-label={props.label ? props.label : ""}
          aria-hidden={props.label ? "false" : "true"}
        >
          {props.symbol}
        </span>
      )
    return(
         <div className="budget-container">
           <div className="available-budget">
           <p>Available Budget</p>
             <h1>{total}</h1>
            {/* //  :
            //  <h1>look like your expense exceed your budget...<Emoji symbol="😔"/></h1> */}
            
            {/* // } */}
            </div>
            <div className="income-container">
              <p>Total Income</p>
              <p>{inc}</p>
              
            </div>
            <div className="expence-container">
              <p>Total Expence</p>
               <p>{exp}</p>
            </div>
             
         </div>

    )
}
export default ShowBudget;