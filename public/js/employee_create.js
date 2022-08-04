const { response } = require("express");
const addEmpBtn = document.getElementById('add-employee-btn')

const addEmployeeBtn = async (e) => {
    // Prevent default form setting
    e.preventDefault();

    // Bring in input data
    const firstName = documet.querySelector('#first-name').value.trim();
    const lastName = documet.querySelector('#last-name').value.trim();

    // If user inputs data
    if(firstName && lastName) {
        const response = await fetch('/api/employees', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName }),
            headers: { 'Content-Type': 'application/json'}
        });
    }

    if(response.ok) {
        document.location.replace('/employees');
    }
}

addEmpBtn.addEventListener('click', addEmployeeBtn);