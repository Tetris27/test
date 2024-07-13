// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const itemList = document.getElementById('itemList');

    toggleButton.addEventListener('click', () => {
        // Toggle the visibility of the list
        if (itemList.classList.contains('hidden')) {
            itemList.classList.remove('hidden');
            toggleButton.textContent = '-'; // Change button text to "-"
        } else {
            itemList.classList.add('hidden');
            toggleButton.textContent = '+'; // Change button text to "+"
        }
    });
});
