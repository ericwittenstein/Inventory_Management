// const { response } = require("express");
const addEmpBtn = document.querySelector('#add-employee-btn');

const addEmployeeBtn = async (e) => {
    // Prevent default form setting
    e.preventDefault();

    // Bring in input data
    const firstName = document.querySelector('#first-name').value;
    console.log(firstName);
    const lastName = document.querySelector('#last-name').value.trim();
    console.log(lastName);

    // If user inputs data
    if(firstName && lastName) {
        const response = await fetch('/employees', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName }),
            headers: { 'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/employees');
        }
    } else {
        console.log("first name and last name not entered")
    }

    // if(response.ok) {
    //     document.location.replace('/employees');
    // }
}

if(addEmpBtn) {
    addEmpBtn.addEventListener('click', addEmployeeBtn);
} else {
    console.log("button does not exist")
}