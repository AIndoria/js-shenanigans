//Perform a search and replace on the sentence using the arguments provided and return the new sentence.


function myReplace(str, before, after) {
  if(before[0]==before[0].toUpperCase()){
    return str.replace(before,after.replace(after[0],after.slice(0,1).toUpperCase()));
  }
  else{
    console.log("Lowercase");
    return str.replace(before,after);
  }
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
