//OBJECTIVE: Make the given string TitleCase;
//INDORIA,A.

//changed it to a function
function titleCase(str) {
  var strArray=str.split(" ");
  var finalArray=[];

  for(var i=0;i<strArray.length;i++){
    var elementOfArray=strArray[i].toLowerCase(); //Fixed an instance to account for Capital letters in middle of string

    var unchangedFLetter=elementOfArray[0];

    var changedUpperCase=unchangedFLetter.toUpperCase();

    var changed=elementOfArray.replace(/./,changedUpperCase);
  
    finalArray.push(changed);
  }
  return finalArray.join(" ");
}

titleCase("I'm a little tea pot");




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
