const tasks = [
  "Membuat navbar",
  "Membuat halaman login",
  "Memperbaiki bug tombol",
  "Membuat fitur pencarian",
  "Menguji responsive layout",
];

const searchInput = document.querySelector("#searchInput");
const taskList = document.querySelector("#taskList");

function renderTasks(items) {
  taskList.innerHTML = "";

  items.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    taskList.appendChild(li);
  });
}

searchInput.addEventListener("input", (event) => {
  const keyword = event.target.value.toLowerCase();

  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(keyword)
  );

  renderTasks(filteredTasks);
});

renderTasks(tasks);