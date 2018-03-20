//TODO: Return the lowest index at which a value (second argument)
//should be inserted into an array (first argument) once it has
//been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {

  var firstArr=arr.sort(compare);
  var finalArr=arr.sort(compare);
  console.log(finalArr);
  
  for(let i=0;i<firstArr.length;i++){
    if(num>firstArr[i] && (num<firstArr[i+1] || firstArr[i+1]===undefined)){
      finalArr.splice(i+1,0,num);
    }
    else if(num<firstArr[i] && firstArr[i-1]===undefined){
      finalArr.splice(i,0,num);
    }
  }
  console.log(finalArr);
  return finalArr.indexOf(num);
}

function compare(a,b){
  return a-b;
}
getIndexToIns([2, 5, 10], 15);



/*
Someone told me I could have done this the easier way like this: (GODDAMMIT)

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}

getIndexToIns([10,20,30,40], 50);



/*
