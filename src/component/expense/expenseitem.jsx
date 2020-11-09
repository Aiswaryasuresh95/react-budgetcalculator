import React from 'react';


const Item =({exp})=>
{
    const {id,description,value}=exp;
    
    return(
    <div>
        <li key={id}>
            <h1>{description}</h1>
            <h1>{value}</h1>
        </li>
         
      </div>
    )
}
export default Item;