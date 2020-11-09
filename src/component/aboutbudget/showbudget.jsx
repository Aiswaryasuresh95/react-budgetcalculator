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
         <div>
             {total>=0? <h1>{total}</h1>
             :
             <h1>look like your expense exceed your budget...<Emoji symbol="😔"/></h1>
            
            }
            <h1>{inc}</h1>
            <h1>{exp}</h1>
             
         </div>

    )
}
export default ShowBudget;