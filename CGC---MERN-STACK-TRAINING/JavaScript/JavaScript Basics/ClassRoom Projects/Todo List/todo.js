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
l
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
    function getRandomColor() {  //generates a random hexadecimal color
        const letters = '0123456789ABCDEF';  //letters: A string containing all valid hexadecimal digits (0-9 and A-F).
        let color = '#';   //color = '#': Initializes the color string with #, which is required for a valid hex color (e.g., #FF5733).
        for (let i = 0; i < 6; i++) {   //for loop: Repeats 6 times (since hex colors have six characters after #).
            color += letters[Math.floor(Math.random() * 16)];   //Math.floor() rounds down to the nearest whole number. + Math.random() generates a random number between 0 and 1.
        //letters[Math.floor(Math.random() * 16)] picks a random character from the letters string.
        }
        return color;   //return color;: Outputs the generated random color (e.g., #A3B4C5).
    }

    //Calls the getRandomColor() function twice to get two different random colors and stores them in variables color1 and color2.

    let color1 = getRandomColor();
    let color2 = getRandomColor();

    //document.body: Refers to the entire webpage's body element.
    // style.backgroundImage: Sets the background-image CSS property.
    // linear-gradient(to right, ${color1}, ${color2}): Creates a smooth transition from color1 to color2, moving   horizontally (to right).
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    document.body.style.backgroundSize = "200% 200%"; // Optional: animation of gradient movement
    //This line increases the background size to 200% of the viewport in both width and height. It can be used for gradient animation effects by moving the gradient over time.
    document.body.style.transition = "background 0.5s ease";  // Smooth transition effect
    //     This adds a smooth transition when the background changes:
    // background: Targets background-related properties.
    // 0.5s: Duration (0.5 seconds).
    // ease: Starts slow, speeds up, and slows down again.


    //gradient color's code display on screen
    document.getElementById("normalColor").textContent = color1;
    document.getElementById("gradientColor").textContent = color2;
}
