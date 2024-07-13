// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');

    addButton.addEventListener('click', () => {
        // Create a new list item
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemList.children.length + 1}`;

        // Append the new item to the list
        itemList.appendChild(newItem);
    });
});
