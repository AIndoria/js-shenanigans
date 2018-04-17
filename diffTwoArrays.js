
/*TODO:

Take each array. Compare each element with every element of the other array, push if not equal.

*/

arr1=[1,2,3,4,5];
arr2=[2,4,6,8];
finArray=[];

for(let i=0; i<arr1.length;i++){
  for(let j=0; j<arr2.length;j++){
    var check1=arr1.indexOf(arr2[j]);
    var check2=arr2.indexOf(arr1[i]);
    while(check1==-1){
      while(finArray.indexOf(arr2[j])==-1){
        finArray.push(arr2[j]);
        break;
      }
      break;
    }
  }
  while(check2==-1){
    while(finArray.indexOf(arr1[i])==-1){
      finArray.push(arr1[i]);
      break;
    }
    break;
  }
}
finArray.sort((a,b)=>a-b);
console.log(finArray);

//This apparently doesn't work for empty arrays. Also, too many "while" statements.