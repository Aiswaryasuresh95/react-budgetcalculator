import React from 'react';
import { AiFillDelete } from 'react-icons/ai'


const IncItem =({inc,DeleteItem})=>{
    const {id,description,value}=inc;
    const sect="income";

    return( 
        
    
    <div className="income-list">
           <div className="description">{description}</div> 
            <div className="value">{value}</div>
            <div className="icons">
              <AiFillDelete className="icon-style" onClick={()=>{DeleteItem(id,sect,value)}}/></div>
      
      </div>
    )

    
}
export default IncItem;