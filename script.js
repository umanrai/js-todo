const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
var toggle = document.getElementById("box");

function toggles() {
    // if (toggle.style.display === "none") {
    //     toggle.style.display = "block";
    // } else {
    //     toggle.style.display = "none";
    // }
    toggle.style.display = toggle.style.display === "none" ? "block" : "none";
}

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!")
    }
    else {
        li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

document.addEventListener('keydown', function (event) {
    // console.log(event.keyCode)
    // Check if Control key (Ctrl) and Down arrow key are pressed together
    // if (event.ctrlKey && event.keyCode === 38) {
    //     // Ctrl + Down arrow pressed
    //     $('#display').val('')
    // }
    // console.log(event.key, event.code)
    // console.log(event)
    // if (event.keyCode === 13) {
    if (event.key === "Enter") {
        // Ctrl + Down arrow pressed
        addTask();
    }

    if (event.ctrlKey && event.key === "Delete") {
        localStorage.setItem("data", '');
        listContainer.innerHTML = '';
    }

    if (event.shiftKey && event.key === "?") {
        toggles()
    }

    // console.log(event.altKey, event.key)
    // if (event.altKey && event.key === 't') {
    //     toggleTheme()
    // }

});

document.getElementById('theme-toggle').addEventListener('click', function (event) {

    var isDarkTheme = document.body.classList.contains('theme-dark');

    if (isDarkTheme) {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
        localStorage.setItem("theme", 'theme-light');
    } else {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
        localStorage.setItem("theme", 'theme-dark');
    }

    toggleTheme()
})

function toggleTheme()
{
    var selectedTheme = localStorage.getItem('theme');

    var daySelector = document.getElementById('sun');
    var nightSelector = document.getElementById('moon');

    if (selectedTheme === 'theme-dark') {
        daySelector.style.display = 'block'
        nightSelector.style.display = 'none'
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    } else {
        daySelector.style.display = 'none'
        nightSelector.style.display = 'block'
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
    }
}

toggleTheme()