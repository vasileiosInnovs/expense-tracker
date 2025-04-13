import React from 'react';

function Table({ rows }){
    const newId = rows.map(row => ({
        id: crypto.randomUUID()
    })) 
    console.log(newId) 
    return (
        <table>
            <thead>
                <tr>
                    <th>Expense</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => {
                    return ( <tr key={row.newId} >
                        <td>{row.expense}</td>
                        <td>{row.description}</td>
                        <td>{row.category}</td>
                        <td>{row.amount}</td>
                        <td>{row.date}</td>
                        </tr>)
                })}
            </tbody>
        
        </table>
    )
}

export default Table;