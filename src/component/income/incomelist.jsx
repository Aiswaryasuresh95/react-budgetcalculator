import React from 'react';
import IncItem from './incomeitem';


const IncomeList =({income,DeleteItem}) =>{

      return(

              <ul>
                  {income.map((inc) => {
                      return <IncItem key={inc.id} inc={inc} DeleteItem={DeleteItem}/>
                  })}
            </ul>
      )
        }
    export default IncomeList;    