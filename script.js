// Ambil elemen
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filterOption = document.getElementById("filter");

// Tambah To-Do
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Validasi
    if (todoInput.value === "" || dateInput.value === "") {
        alert("Tugas dan tanggal harus diisi!");
        return;
    }

    // Buat elemen li
    const li = document.createElement("li");

    // Buat span untuk teks
    const span = document.createElement("span");
    span.innerText = `${todoInput.value} - ${dateInput.value}`;

    // Klik teks = tandai selesai
    span.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Tombol delete
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Gabungkan
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Reset input
    todoInput.value = "";
    dateInput.value = "";
});

// Filter
filterOption.addEventListener("change", function() {
    const todos = todoList.childNodes;

    todos.forEach(function(todo) {
        if (todo.nodeType === 1) { // pastikan elemen li
            switch (filterOption.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
                    break;
            }
        }
    });
});
