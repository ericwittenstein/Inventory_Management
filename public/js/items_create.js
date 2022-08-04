const addItBtn = document.querySelector('#addForm');

// Function that adds items to database and renders user back to the items list
const addItemBtn = async (e) => {
    // Prevent default form setting
    e.preventDefault();

    // Bring in input data
    const item_name = document.querySelector('#item_name').value.trim();
   
    const item_description = document.querySelector('#item_descr').value.trim();
    

    // If user inputs data
    if(item_name && item_description) {
        // fetch that calls post route for items
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify({ item_name, item_description }),
            headers: { 'Content-Type': 'application/json'}
        });

        // If user response is accepted...
        if(response.ok) {
            // redirect to items page
            document.location.replace('/items');
        } else (error) => {
            // Error handling
            console.log(error)
        }
    } 
}

// If the button exists...
if(addItBtn) {
    // Event listener for submit button
    addItBtn.addEventListener('submit', addItemBtn);
} else {
    // Error handling
    console.log("button does not exist")
}