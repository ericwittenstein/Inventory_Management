const { response } = require("express");
const addItBtn = document.getElementById('add-item-btn')

const addItemBtn = async (e) => {
    // Prevent default form setting
    e.preventDefault();

    // Bring in input data
    const itemName = documet.querySelector('#item_name').value.trim();
    const itemDescr = documet.querySelector('#item_descr').value.trim();

    // If user inputs data
    if(itemName && itemDescr) {
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify({ itemName, itemDescr }),
            headers: { 'Content-Type': 'application/json'}
        });
    }

    if(response.ok) {
        document.location.replace('/items');
    }
}

addItBtn.addEventListener('click', addItemBtn);