let priorityPercentage = 0;

function calculate() {
  calculatePriorityPercentage();
}

function calculatePriorityPercentage() {
  let liVars = document.getElementById("liVars");
  let rows = liVars.children;
  priorityPercentage = 100 / rows.length;
  console.log(priorityPercentage);
}
