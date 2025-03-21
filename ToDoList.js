const inputBox = document.getElementById("input-box");
const listConta = document.getElementById("list-container");
const btn = document.getElementById("btn");
console.log(btn);

function addTask() {
    if (inputBox.value === "") {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConta.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}
listConta.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData() {
    localStorage.setItem("data", listConta.innerHTML);
}
function displayData() {
    listConta.innerHTML = localStorage.getItem("data");
}
displayData();