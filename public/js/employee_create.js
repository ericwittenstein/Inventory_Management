const addEmpBtn = document.querySelector('#addForm');

// Function that adds employee to database and renders user back to the employees list
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
        // fetch that calls post route for employees
        const response = await fetch('/api/employees', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name }),
            headers: { 'Content-Type': 'application/json'}
        });

        // If user response is accepted...
        if(response.ok) {
            // redirect to employees page
            document.location.replace('/employees');
        } else (error) => {
            // Error handling
            console.log(error)
        }
    } 
}

// If the button exists...
if(addEmpBtn) {
    // Event listener for submit button
    addEmpBtn.addEventListener('submit', addEmployeeBtn);
} else {
    // Error handling
    console.log("button does not exist")
}