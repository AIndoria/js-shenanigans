var arr=[[13, 27, 18, 26], [4, 5, 1, 3]];




var largestNum=0;
var largerArray=[];
var largestArray=[];



for(var i=0;i<arr.length;i++){
  
  for(var j=0;j<arr[i].length;j++){
    
    if(arr[i][j]>largestNum){
      largestNum=arr[i][j];
      console.log("Number: "+ largestNum);
      largerArray.push(largestNum);
    }
  }
  largestNum=0;  
  console.log("Larger Array is:");
  console.log(largerArray);
  largestArray.push(largerArray.pop());
  console.log("\n");
  console.log("Largest Array:");
  console.log(largestArray);
}

