//TODO:
//Return all the values from argument[0] which are not part of the consecutive arguments;


function destroyer(arr){
  var firstArg=[];
  var valuesToSplice=[];
  
  for(let i of arguments){
    if(i==arguments[0])
      firstArg=arguments[0];
    else
      valuesToSplice.push(i);
  }
  console.log(firstArg); //debug
  console.log(valuesToSplice); //debug
  var filtered=firstArg.filter(function(val){
    return !valuesToSplice.includes(val);
  });
  return filtered;
}

destroyer([1,2,3,4,1,2,3,4],3,4,1);
