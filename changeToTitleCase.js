//OBJECTIVE: Make the given string TitleCase;
//INDORIA,A.

var str="I'm a little teapot.";
console.log(str);
var strArray=str.split(" ");
console.log(strArray);

var finalArray=[];

console.log("\n Loop begins now \n")

for(var i=0;i<strArray.length;i++){
  var elementOfArray=strArray[i];

  var unchangedFLetter=elementOfArray[0];

  var changedUpperCase=unchangedFLetter.toUpperCase();

  var changed=elementOfArray.replace(/./,changedUpperCase);
  console.log("Changed word is: "+changed);
  
  finalArray.push(changed);
  console.log(finalArray);

  
}



/*
What I originally wanted to do:

  Split string into Array
  Begin loop
  Return each element of array
  shift first letter of each element
  x.toUpperCase() that letter
  unshift that letter into the element
  Merge modified array into String
  return String

*/

/*
What I ended up doing:

  Split String into Array
  begin loop
  Return each element of array
  get the first letter of each element
  x.replace() the first letter using regex;
  make them into a new arry
  Merge array into string
  Return String

*/
