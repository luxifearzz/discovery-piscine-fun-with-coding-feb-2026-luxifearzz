const ftList = document.getElementById("ft_list");

// -- Create elements
const createDiv = (className, text) => {
    const div = document.createElement("div");
    div.className = className;
    div.textContent = text;

    div.addEventListener("click", (e) => {
        if (
            confirm(
                `Do you want to remove this TO DO? (${e.currentTarget.textContent})`,
            )
        ) {
            ftList.removeChild(e.currentTarget);
            saveTodos();
        }
    });

    return div;
};

// -- Action functions
const addTodoToFtList = (element) => {
    ftList.prepend(element);
    saveTodos();
};

// -- Event listeners
document.getElementById("add-todo").addEventListener("click", () => {
    const todo = prompt("Enter new task");

    if (!todo || todo.trim() === "") return;

    addTodoToFtList(createDiv("todo", todo));
});

// -- Save and load TODO to/from cookie
const saveTodos = () => {
    const todos = [];
    document.querySelectorAll("#ft_list .todo").forEach((todo) => {
        todos.push(todo.textContent);
    });

    todos.reverse();
    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
};

const loadTodos = () => {
    const cookies = document.cookie.split("; ");
    const todoCookie = cookies.find((cookie) => cookie.startsWith("todos="));

    if (!todoCookie) return;

    const todos = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));

    todos.forEach((todo) => {
        addTodoToFtList(createDiv("todo", todo));
    });
};

window.onload = loadTodos;
