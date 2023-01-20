function displayNum(num){
console.log(num);
result.value+=num;
}
//clear text box
function clearBox(){
    result.value="";
}
//evaluvate expression
function evaluvateExpression(){
    expression= result.value;
    output=eval(expression)
    result.value=output;
}
//removing last item
function removalLastItem(){
    currentExpression = result.value;
    result.value=currentExpression.slice(0,-1);
}