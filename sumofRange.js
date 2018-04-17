/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
*/

function sumArray(arr){
  var completeArr=[];
  arr.reduce(function(a,b)=>{  
    for(let i=Math.min(a,b); i<=Math.max(a,b);i++){
      completeArr.push(i);
    }
  });
  return completeArr.reduce((a,b)=>a+b);
}
sumArray([1,10]);