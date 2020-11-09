import React from 'react';
import Item from './expenseitem';


const ExpenseList =({expense}) =>{

    return(
        <div>
            <ul>
                  {expense.map((exp) => {
                      return <Item key={exp.id} exp={exp}></Item>
                  })}
            </ul>
            
      </div>
    )
    
}
export default ExpenseList;