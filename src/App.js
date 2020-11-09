import React, { useState } from 'react';
import './App.css';
import BudgetForm from './component/bugetform/budgetform';
import {v4 as uuidv4} from "uuid";
import ExpenseList from './component/expense/expenselist';
import IncomeList from './component/income/incomelist';
import ShowBudget from './component/aboutbudget/showbudget';



function App() {




  /**********state values **********/
  
  //income or expense
  const [type,setType]=useState("");

  //Description of income or expence
  const [description,setDescription]=useState("");

  //Amount of money in income or expence
  const [value,setValue]=useState("");

  // income and expence
  const [income,setIncome] = useState([]);

  const [expense,setExpense]=useState([]);

  //Total amount of savings including total 
  //  expense and total income
  
  const [total,setTotal] = useState(0);
  const [exp,setExp] =useState(0);
  const [inc,setInc] =useState(0);




  /*************functionality************/

  const handleType = event =>{
   setType(event.target.value)
   };


   const handleDescription=event =>
   {
     setDescription(event.target.value);
   };


   const handleValue=event =>
   {
     setValue(event.target.value);
   };
   
   const handleSubmit=(event)=>{
     event.preventDefault();
     if(description!==""&&value!==""){
       if(type==="income"){
            
            const singleincome={id:uuidv4(),description,value};
            setIncome([...income,singleincome]);
            const val=parseInt(value);
            setTotal(total+val);
            setInc(inc+val);
            setValue("");
            setDescription("");
  
       }else if(type==="expense"){
            const singleexpense={id:uuidv4(),description,value};
            setExpense([...expense,singleexpense]);
            const val=parseInt(value);
            setTotal(total-val);
            setExp(exp+val);
            setValue("");
            setDescription("");
            
       }
     }else{
       console.log("yaay")
     }
     console.log(total);
   }
  



  return (
    <div className="App">
      <ShowBudget total={total} inc={inc} exp={exp}/>
        
        <BudgetForm
         type={type}
         description={description}
         value={value}
         handleType={handleType}
         handleDescription={handleDescription}
         handleValue={handleValue}
         handleSubmit={handleSubmit}
        
        />
        <ExpenseList expense={expense}/>
        <IncomeList  income={income}/>

      

      
    </div>
  );

  }
export default App;
