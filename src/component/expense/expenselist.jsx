import React from 'react';
import Item from './expenseitem';


const ExpenseList =({expense,DeleteItem}) =>{

    return(
        <div>
            <ul>
                  {expense.map((exp) => {
                      return <Item key={exp.id} exp={exp} DeleteItem={DeleteItem}></Item>
                  })}
            </ul>
            
      </div>
    )
    
}
export default ExpenseList;