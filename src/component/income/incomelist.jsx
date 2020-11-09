import React from 'react';
import IncItem from './incomeitem';


const IncomeList =({income}) =>{

      return(

              <ul>
                  {income.map((inc) => {
                      return <IncItem key={inc.id} inc={inc}/>
                  })}
            </ul>
      )
        }
    export default IncomeList;    