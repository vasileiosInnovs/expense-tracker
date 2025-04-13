import React, { useState } from 'react';
import './FormExpense.css'

function AddExpense() {
    const [formData, setFormData] = useState({
        expense: "",
        description: "",
        category: "",
        amount: "",
        date: ""

    })

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
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

            <button type='submit' value='Add Expense' className="submit-btn">Submit</button>
        </form>
    )
}

export default AddExpense;