// script.js
function addFoodItem() {
    const foodName = document.getElementById('foodName').value;
    const category = document.getElementById('category').value;

    const foodList = document.querySelector('.food-list');
    const foodItem = document.createElement('div');
    foodItem.className = 'food-item';
    foodItem.innerHTML = `
        <img src="placeholder.jpg" alt="${foodName}">
        <h2>${foodName}</h2>
        <p>Category: ${category}</p>
    `;
    foodList.appendChild(foodItem);

    // Clear the form inputs
    document.getElementById('foodForm').reset();
}

// Add more JavaScript functions as needed for other pages
