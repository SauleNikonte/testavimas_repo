console.log("add.js");

// 2. ivestis -> button -> generate html
// 3. išsaugot.
// //Atlikti visoms CRUD operacijoms to-do sąrašui reikalingas autentifikuotas (prisijungęs) vartotojas;


const inputElement = document.querySelector(".form-control"),
    addButtonElement = document.querySelector(".btn"),
    dynamicTodoListElement = document.querySelector(".all-todos");

let todoCounter = 1; // Initialize a counter variable

addButtonElement.addEventListener("click", () => {
    const todoValue = inputElement.value;

    if (todoValue.trim() !== '') {
        generateTodoHTML(todoValue, todoCounter);
        todoCounter++; // Increment the counter for the next todo
    }
    inputElement.value = '';
});

function generateTodoHTML(todoValue, todoId) {
    let dynamicHTML = `<div class="todo justify-content-between draggable" draggable="true" todo-id="${todoId}">
                            <input type="checkbox" name="todo"/>
                            <span>${todoValue}</span>
                            <div class="dropdown">
                                <i class="bi bi-three-dots" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul class="dropdown-menu bg-dark">
                                    <li>
                                        <a class="dropdown-item text-white todomove="${todoId}" href="#">Done</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item text-white todo-delete="${todoId}" href="#">Delete</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item text-white todo-update="${todoId}" href="#" ">Update</a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;

    dynamicTodoListElement.innerHTML += dynamicHTML;
}


// inputElement.value = '';
// async function add() {
// 	const promise = await fetch("http://localhost:3000/todos", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify({
// 			//username: usernameField.value, //kaip man gauti ta username?
// 			todo: inputElement.value,
// 		}),
// 	});
// 	const response = await promise.text();
// 	console.log(response);
// }
// addButtonElement.onclick = add;
