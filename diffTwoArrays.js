
/*TODO:

Take each array. Compare each element with every element of the other array, push if not equal.

*/

//This works better than my last solution. It's still bad code but hey, it works.


function diffArray(...arrs){
  let filteredArray1=arrs[1].filter(function(element){
    return !arrs[0].includes(element);
  });
  let filteredArray2=arrs[0].filter(function(element){
    return !arrs[1].includes(element)
  });
  return filteredArray1.concat(filteredArray2);
}

diffArray([1,4,5,8], [1,2,3]);