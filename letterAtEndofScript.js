// Find if the string ends with the target word in a given function
// Use substr if possible


function confirmEnding(str, target) {
  //I decided to be creative instead.
  var regex=new RegExp(target+'$');

  var endValue=str.match(regex);
  if(endValue==target)
    return true;
  else
    return false;

}

confirmEnding("Bastian", "n");
