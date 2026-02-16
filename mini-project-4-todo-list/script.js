/**
 * 1. SELECTORS & STATE
 * Grabbing UI elements and initializing our data source.
 */
let addBtn = document.querySelector('.addBtn');
let addInput = document.querySelector('#addInput');
let listContainer = document.querySelector('.listContainer');
let list = []; // This array holds our "Source of Truth"

/**
 * 2. RENDER FUNCTION
 * Responsible for clearing the UI and redrawing the list 
 * based on the current state of the 'list' array.
 */
function renderList(arr) {
    // Clear existing HTML to prevent duplicates
    listContainer.innerHTML = '';

    arr.map(obj => {
        // Create the wrapper div
        let divElem = document.createElement('div');
        divElem.classList.add('list');
        divElem.innerHTML = `<p>${obj.text}</p>`;

        // Create the delete button
        let buttonEl = document.createElement('button');
        buttonEl.classList.add('delBtn');
        buttonEl.innerText = 'delete';

        // ATTACH DELETE LOGIC
        // Note: We attach the listener directly to the button here
        buttonEl.onclick = (e) => {
            e.stopPropagation(); // Prevents the click from bubbling up
            handledeleteList(obj.id);
        };

        divElem.appendChild(buttonEl);
        listContainer.append(divElem);
    });
}

/**
 * 3. ADD ITEM HANDLER
 * Creates a new object, pushes it to the array, and re-renders.
 */
function handleAddlist() {
    if (addInput.value.trim() === "") return; // Don't add empty items

    let obj = {
        id: Date.now(), // Unique ID based on timestamp
        text: addInput.value,
    };

    list.push(obj);
    renderList(list);
    addInput.value = ''; // Clear input field
}

/**
 * 4. DELETE ITEM HANDLER
 * Filters the array to remove the item with the matching ID.
 */
function handledeleteList(id) {
    // Return all items EXCEPT the one we want to delete
    let filterList = list.filter(obj => obj.id !== id);
    list = filterList; // Update main state
    renderList(list);  // Refresh UI
}

/**
 * 5. EVENT LISTENERS
 */
addBtn.addEventListener('click', handleAddlist);

// Note: Removed the global delBtn listener because delete buttons 
// are created dynamically inside the renderList function.