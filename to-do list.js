const inputboxi = document.getElementById("inputbox");
const listcontaineri = document.getElementById("listcontainer");

function addTask() {
  if (inputboxi.value === "") {
    alert("Write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputboxi.value;
    listcontaineri.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "x";
    li.appendChild(span);
  }

  inputboxi.value = "";
  saveData();
}

listcontaineri.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listcontaineri.innerHTML);
}

function showTask() {
  listcontaineri.innerHTML = localStorage.getItem("data");
}
showTask();
