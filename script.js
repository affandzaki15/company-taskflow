const tasks = [
  "Membuat navbar",
  "Membuat halaman login",
  "Memperbaiki bug tombol",
  "Membuat fitur pencarian",
  "Menguji responsive layout",
];

const searchInput = document.querySelector("#searchInput");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");

function renderTasks(items) {
  taskList.innerHTML = "";
  taskCount.textContent = `Total tugas ditemukan: ${items.length}`;

  if (items.length === 0) {
    taskList.textContent = "Tugas tidak ditemukan.";
    return;
  }

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