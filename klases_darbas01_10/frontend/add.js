console.log("add.js");

// 2. ivestis -> button -> generate html
// 3. išsaugot.
// //Atlikti visoms CRUD operacijoms to-do sąrašui reikalingas autentifikuotas (prisijungęs) vartotojas;


const inputElement = document.querySelector(".form-control"),
    addButtonElement = document.querySelector(".btn"),
    dynamicTodoListElement = document.querySelector(".all-todos");

addButtonElement.addEventListener("click", () => {
    const todoValue = inputElement.value;

    if (todoValue.trim() !== '') {
        generateTodoHTML(todoValue);
    }
    inputElement.value = '';
});

function generateTodoHTML(todoValue) {
    let dynamicHTML = `<div class="todo justify-content-between draggable" draggable="true" todo-id="1">
                            <input type="checkbox" name="todo"/>
                            <span>${todoValue}</span>
                            <div class="dropdown">
                                <i class="bi bi-three-dots" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu bg-dark">
                                    <li>
                                        <a href="#" todomove="1">Done</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item text-white todo-delete" href="#">Delete</a>
                                    </li>
                                    <li>
                                        <a href="#" todo-update="1">Update</a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;

    dynamicTodoListElement.innerHTML += dynamicHTML;
}

inputElement.value = '';
