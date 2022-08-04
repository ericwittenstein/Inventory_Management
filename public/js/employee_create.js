// const { response } = require("express");
const addEmpBtn = document.querySelector('#addForm');

const addEmployeeBtn = async (e) => {
    // Prevent default form setting
    e.preventDefault();

    // Bring in input data
    const first_name = document.querySelector('#first_name').value.trim();
    console.log(first_name);
    const last_name = document.querySelector('#last_name').value.trim();
    console.log(last_name);

    // If user inputs data
    if(first_name && last_name) {
        const response = await fetch('/api/employees', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name }),
            headers: { 'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/employees');
        } else (error) => {
            console.log(error)
        }
    } 

    // if(response.ok) {
    //     document.location.replace('/employees');
    // }
}

if(addEmpBtn) {
    addEmpBtn.addEventListener('submit', addEmployeeBtn);
} else {
    console.log("button does not exist")
}