// -------------------------- UTILS -------------------------- //

function getOptionListError() {
  return document.getElementById("optionsError");
}

function getVarListError() {
  return document.getElementById("varsError");
}

// -------------------------- VALIDATE -------------------------- //

function validator(site) {
  let valuesList;
  site === "options"
    ? (valuesList = getOptionListElement().children)
    : (valuesList = document.getElementsByClassName('input-vars'))
  let valuesLength = 0;
  let inputLength = 0;
  for (let i = 0; i < valuesList.length; i++) {
    if (!valuesList[i].length !== 0){
      let input
      site === "options"
      ? (input = valuesList[i].lastElementChild.firstElementChild.value)
      : (input = valuesList[i].value) 
      inputLength++;
      if (input.length !== 0) 
      valuesLength++;
    }
  }

  if (inputLength !== valuesLength) {
    site === "options" ? showErrorInOptions() : showErrorInVars();
    showErrorInOptions();
  } else {
    runNextStepSite(site);
  }
}


function validatePriority(){

let varsPorcent = document.getElementById('liVars').children

for (const vars of varsPorcent) {

  let zelda = vars.children

  for (let index = 1; index < zelda.length; index++) {
    console.log(zelda[index].firstElementChild.firstElementChild)
    
  }
}




}




// -------------------------- NEXTSTEPS -------------------------- //

function runNextStepSite(site) {
  switch (site) {
    case "options":
      setUpOptionList();
      makeVisibleStep(2);
      break;
    case "vars":
      setUpVarList();
      makeVisibleStep(3);
    default:
      break;
  }
}

// -------------------------- ERRORS -------------------------- //

function showErrorInOptions() {
  getOptionListError().hidden = false;
  getOptionListError().innerHTML = "No podés continuar con opciones vacías.";
}

function showErrorInVars() {
  getVarListError().hidden = false;
  getVarListError().innerHTML = "No podés continuar con variables vacías.";
}
