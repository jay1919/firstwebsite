let input = document.getElementById("displaybox");
var myInputs = [];
var opreators = ["/", "x", "+" ,  "-" , "=" , "%" , "x²" ];
function onNumpadClick(e) {
  var currentInput = e.target.innerText;
  if (currentInput.length > 2) {
    return;
  }
  if (currentInput == "C") {
    return;
  }
  if (myInputs.length > 0) {
    var lastElement = myInputs[myInputs.length - 1];
    if (!opreators.includes(currentInput)) {
      if (opreators.includes(lastElement)) {
        myInputs.push(currentInput);
      }
      if (!opreators.includes(lastElement)) {
        if(lastElement.includes(".") && currentInput === ".") {
          return;
        }
        var newElement = lastElement + currentInput;
        myInputs[myInputs.length - 1] = newElement;
      }
    }
  }
  if (myInputs.length == 0) {
    if (!opreators.includes(currentInput)) {
      myInputs.push(currentInput);
    }
  }
  if (currentInput == "="){
    percentage();
    square();
      division();
      multiplication();
      sumation();
      subtraction();
      return;
  }
  if (opreators.includes(currentInput)) {
    if (myInputs.length > 0) {
      if (opreators.includes(lastElement)) {
        myInputs[myInputs.length - 1] = currentInput;
      }
    }
  }
  if (opreators.includes(currentInput)) {
    if (myInputs.length > 0) {
      if (!opreators.includes(lastElement)) {
        myInputs.push(currentInput);
        if (myInputs.includes("=")){
          myInputs.pop();
        }
      }
    }
  }
  setValueForDisplay();
}
function division() {
  var divisonIndex=myInputs.indexOf("/");
  if (divisonIndex>0){
  var dividend=myInputs[divisonIndex-1];
  var divisor=myInputs[divisonIndex+1];
  var quotient = dividend / divisor;
  myInputs.splice(divisonIndex-1,3,quotient);
  setValueForDisplay();
  }
}
function multiplication() {
  var multiplyIndex=myInputs.indexOf("x");
  if (multiplyIndex>0){
  var num1=myInputs[multiplyIndex-1];
  var num2=myInputs[multiplyIndex+1];
  var multiply= num1 * num2;
  myInputs.splice(multiplyIndex-1,3,multiply);
  setValueForDisplay();
  }
}
function sumation() {
  var sumIndex=myInputs.indexOf("+");
  if (sumIndex>0){
    const sum1=myInputs[sumIndex-1];
    const sum2=myInputs[sumIndex+1];
    var sum= Number(sum1) + Number(sum2) ;
    myInputs.splice(sumIndex-1,3,sum);
    setValueForDisplay();
  }
}
function subtraction() {
  var subIndex=myInputs.indexOf("-");
  if (subIndex>0){
    var sub1=myInputs[subIndex-1];
    var sub2=myInputs[subIndex+1];
    var sub= sub1 - sub2;
    myInputs.splice(subIndex-1,3,sub);
    setValueForDisplay();
  }
}
function percentage(){
  var percentageIndex=myInputs.indexOf("%");
  if(percentageIndex>=0){
    var num=myInputs[percentageIndex-1];
    var result=num / 100;
    myInputs.splice(percentageIndex-1,2,result);
    setValueForDisplay();
  }
}
function square(){
  var squareIndex=myInputs.indexOf("x²");
    if (squareIndex>=0){
    var num=myInputs[squareIndex-1];
    var result= num * num;
    myInputs.splice(squareIndex-1,2,result);
    setValueForDisplay();

  }
}
function clr() {
  myInputs = [];
  setValueForDisplay();
}
function setValueForDisplay() {
  input.value = myInputs.join("");
}
