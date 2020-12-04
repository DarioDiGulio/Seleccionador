let priorityPercentage = 0;
let indexsPriority = [];
let parts = [];
let valuesParts = [];

function calculate() {
  if (isMatrixValid()) {
    calculatePriorityPercentage();
    setIndexsPriority();
    setParts();
    setMatrixParts();
  }
}

function isMatrixValid() {
  const rows = document.getElementById("liVars").children;
  let valid = true;
  for (let i = 0; i < rows.length; i++) {
    let values = [];
    let selects = rows[i].getElementsByClassName("select");
    for (let j = 0; j < selects.length; j++) {
      values.push(selects[j].value);
    }
    console.log(values)
    let uniqs = values.map(function(item, index, array) {
      return array.indexOf(item) === index;
    })
    valid = !uniqs.includes(true);
  }
  console.log(valid)
  return valid;
}

function calculatePriorityPercentage() {
  let rows = getRows();
  priorityPercentage = 100 / rows.length;
}

function getRows() {
  let liVars = document.getElementById("liVars");
  let rows = liVars.children;
  return rows;
}

function setIndexsPriority() {
  let rows = getRows();
  indexsPriority.push(100);
  for (let i = 1; i < rows.length; i++) {
    let priority = 100 - priorityPercentage * i;
    indexsPriority.push(priority);
  }
}

function getOptionsLength() {
  return getRows()[0].children.length - 1;
}

function setParts() {
  for (let i = 0; i < getRows().length; i++) {
    let part = indexsPriority[i] / getOptionsLength();
    parts.push(part);
  }
}

function setMatrixParts() {
  for (let i = 0; i < getOptionsLength(); i++) {
    let values = [];
    for (let j = 0; j < getRows().length; j++) {
      values[j] = parts[j] * (i + 1);
    }
    valuesParts.push(values);
  }
}
