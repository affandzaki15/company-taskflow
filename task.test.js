
const test = require("node:test");
const assert = require("node:assert/strict");

function countTasks(tasks) {
  return tasks.length;
}

test("menghitung jumlah task", () => {
  assert.equal(countTasks(["Belajar Git", "Belajar CI"]), 2);
});

test("mengembalikan 0 jika tidak ada task", () => {
  assert.equal(countTasks([]), 0);
});
