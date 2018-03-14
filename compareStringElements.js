//TODO


/*
Return true if the string in the first element of the array
contains all of the letters of the string in the second element
of the array.

For example, ["hello", "Hello"], should return true because
all of the letters in the second string are present in the
first, ignoring case.

*/


//Begin


/*

STEPS:

  Cut second element into individual letters
  pass each letter in an "Indexof" (probably loop-nested);
  if all are true, match
  otherwise, no match.

*/

function mutation(arr) {
  var betterArray = arr.map(function (e) { return e.toLowerCase();});
  var str=betterArray[1].toString();

  var arr2=str.split('');
  var val;

  for(var i=0; i<betterArray[0].length;i++){
  
    for(var j=0;j<arr2.length;j++){
    
      val=betterArray[0].indexOf(arr2[j]);
      console.log("j loop val: "+val);
      if(val==-1)
        return false;

    }
  
  }
  return true;

}

mutation(["hello", "hey"]);



