import React from 'react';


const IncItem =({inc})=>{
    const {id,description,value}=inc;

    return( 
    
    <div>
        <li key={id}>
            <h1>{description}</h1>
            <h1>{value}</h1>
        </li>
         
      </div>
    )

    
}
export default IncItem;