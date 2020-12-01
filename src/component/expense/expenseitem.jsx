import React from 'react';
import { AiFillDelete } from 'react-icons/ai'


const Item =({exp,DeleteItem})=>
{
    const {id,description,value}=exp;
    const sect="expence";
    
    return(
    <div className="expence-list">
    
            <div className="description">{description}</div>
            <div className="value">{value}</div>
            <div className="icons">
            
                <AiFillDelete className="icon-style"  onClick={()=>{DeleteItem(id,sect,value)}}/></div>

        
      </div>
    )
}
export default Item;