import React from 'react';


const BudgetForm =({type,
    description,
    value,
    handleType,
    handleDescription,
    handleValue,
    handleSubmit
}) =>{

    return(
         <div className="form-conatiner">
             <form onSubmit={handleSubmit}>
                 <select  onChange={handleType}>
                     <option hidden disabled selected value> -- select an option -- </option>
                     <option value="income">Income</option>
                     <option value="expense">Expense</option>
                 </select>
                 <input
                    type="text"
                    id="description"
                    name="description"
                    className="form-description"
                    placeholder="e.g rent"
                    value={description}
                    onChange={handleDescription}
                 />
                  <input
                    type="number"
                    id="value"
                    name="value"
                    className="form-value"
                    placeholder="e.g 20000"
                    value={value}
                    onChange={handleValue}
                 />
                 <button type="submit">click</button>
             </form>

         </div>
    )

}
export default BudgetForm;