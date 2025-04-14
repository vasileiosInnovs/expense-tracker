import React, { useState } from 'react';
import './FormExpense.css'

function AddExpense({onSubmit}) {
    const [formData, setFormData] = useState({
        expense: "",
        description: "",
        category: "",
        amount: "",
        date: ""

    })

    const [errors, setErrors] = useState("")

    function validateForm() {
        if(formData.expense && formData.description && formData.category && formData.amount && formData.date)
            return true;
        else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formData)){
                if(!value){
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (validateForm()) return;
        onSubmit(formData)
    }

    function handleChange(event) {
        const key = event.target.id;
        setFormData({ 
            ...formData, 
            [key]: event.target.value 
        })
    }

    return (
        <form onSubmit={handleSubmit} className="expense-form">
            <h1>Add Expense</h1>
            <p>Enter your expense details below</p>

            <input 
                type='text' 
                id='expense' 
                placeholder='Enter expense name'
                value={formData.expense}
                onChange={handleChange}
                className="form-input"
            />

            <input 
                type='text' 
                id= 'description' 
                placeholder='Enter expense description'
                value={formData.description}
                onChange={handleChange}
                className="form-input"
            />
            
            <input 
                type='text' 
                id='category' 
                placeholder='Enter expense category'
                value={formData.category}
                onChange={handleChange}
                className="form-input"
            />
           
           <input 
                type='number' 
                id='amount' 
                placeholder='Enter amount'
                value={formData.amount}
                onChange={handleChange}
                className="form-input"
            />

            <input 
                type='date' 
                id='date'
                selected={formData.date} 
                onChange={handleChange}
                className="form-input"
            />
            {errors && <div className='error'>{`Please include: ${errors}`}</div>}
            <button type='submit' value='Add Expense' className="submit-btn" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default AddExpense;