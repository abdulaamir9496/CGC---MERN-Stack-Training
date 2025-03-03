// Add a new task function for adding a new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", function () {
        li.classList.toggle("Completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        li.remove();
        saveTasks(); // Save tasks after deletion
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";

    saveTasks(); // Save tasks after adding
}

// Save tasks to localStorage
function saveTasks() {
    let tasks = [];
    let taskList = document.getElementById("taskList").getElementsByTagName("li");
    for (let task of taskList) {
        tasks.push(task.textContent.replace("Delete", "").trim());
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage when the page loads
window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    tasks.forEach(taskText => {
        let li = document.createElement("li");
        li.textContent = taskText;
        li.addEventListener("click", function () {
            li.classList.toggle("Completed");
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function () {
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
};

// Change background color
function changeBackgroundColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
    //normal color's code display on screen
    document.getElementById("normalColor").textContent = `${red} ${green} ${blue}`;
}

// Change background color to a gradient
function changeGradientColor() {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let color1 = getRandomColor();
    let color2 = getRandomColor();

    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.backgroundSize = "200% 200%"; // Optional: animation of gradient movement
    document.body.style.transition = "background 0.5s ease";  // Smooth transition effect

    //gradient color's code display on screen
    document.getElementById("normalColor").textContent = color1;
    document.getElementById("gradientColor").textContent = color2;
}
