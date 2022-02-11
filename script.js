function displayNum(num){
    result.value+=num
}
 function clearBox(){
     result.value=""
 }
 function evaluateExpression(){
    //  let expr=result.value
    //  let res=eval(expr)
    //  result.value=res
    result.value=eval(result.value)
 }

 function backSpace(){
    //  let curValue=result.value
    //  result.value=curValue.slice(0,-1)
     result.value=result.value.slice(0,-1)
 }