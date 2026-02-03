// -- Create elements
const createDiv = (className, text) => {
    const div = document.createElement("div");

    $(div).addClass(className);
    $(div).text(text);
    $(div).click(function () {
        if (confirm(`Do you want to remove this TO DO? (${$(this).text()})`)) {
            $(this).remove();
            saveTodos();
        }
    });

    return div;
};

// -- Action functions
const addTodoToFtList = (element) => {
    $("#ft_list").prepend(element);
    saveTodos();
};

$(document).ready(function () {
    loadTodos();
    // -- Event listeners
    $("#add-todo").click(function () {
        const todo = prompt("Enter new task");

        if (!todo || todo.trim() === "") return;

        addTodoToFtList(createDiv("todo", todo));
    });
});

// -- Save and load TODO to/from cookie
const saveTodos = () => {
    const todos = [];

    $("#ft_list .todo").each(function () {
        todos.push($(this).text());
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
