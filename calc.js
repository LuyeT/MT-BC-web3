function getOperator(){
  let rbs = document.querySelectorAll('input[name="radio"]');
  let selectedValue;
  for (rb of rbs) {
    if (rb.checked) {
      selectedValue = rb.value;
      break;
    }
  };
  return selectedValue;
}

function addNumbers(v1,v2) {
  let result = 0.0; 
  result = v1+v2;
  let s = `The result of adding ${v1} and ${v2} is ${result}`;
  printOutput(s);
}

function subNumbers(v1,v2) {
  let result = 0.0;
  result = v1-v2;
  let s = `The result of subtracting ${v2} from ${v1} is ${result}`;
  printOutput(s);
}

function mulNumbers(v1,v2) {
  let result = 0.0;
  result = v1*v2;
  let s = `The result of multiplying ${v1} with ${v2} is ${result}`;
  printOutput(s);
}

function divNumbers(v1,v2) {
  let result = 0.0;
  if(v2 !== 0) {
    result = v1/v2;
    let s = `The result of dividing ${v1} by ${v2} is ${result}`;
    printOutput(s);
  } else {
    printOutput("division by 0 is not allowed");
  }
}

function printOutput(message) {
  document.getElementById("output_field").innerHTML=message;
}

function submitCalc() {
  let v1,v2;
  let operation=getOperator();
  v1 = parseFloat(document.getElementById("input1").value);
  v2 = parseFloat(document.getElementById("input2").value);
  
  if(!Number.isSafeInteger(v1)){
    printOutput("input 1 has to be a number"); 
  }
  if(!Number.isSafeInteger(v2)){
    printOutput("input 2 has to be a number"); 
  }
  switch (operation){
    case "add":
      addNumbers(v1,v2);
      break;
    case "subtract":
      subNumbers(v1,v2);
      break;
    case "multiply":
      mulNumbers(v1,v2);
      break;
    case "divide":
      divNumbers(v1,v2);
      break;
    default:
      printOutput("Please select an operator");
  };
}

function clearEverything(){
  document.getElementById("input1").value ="";
  document.getElementById("input1").focus();
  document.getElementById("input2").value ="";
  document.getElementById("operator_add").checked=false;
  document.getElementById("operator_subtract").checked=false;
  document.getElementById("operator_multiply").checked=false;
  document.getElementById("operator_divide").checked=false;
  document.getElementById("output_field").innerHTML = `Welcome, please enter 2 numbers in the respective fields and select your desired operation. <br> Remember, you may not divide by 0.`;
}
