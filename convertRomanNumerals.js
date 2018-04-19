function romanConverter(num){
  let decimalNo=[1000,900,500,400,100,90,50,40,10,9, 5,4,1]
  let romanNo=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  let result="";
  for(let i=0;i<decimalNo.length;i++){
    while(num%decimalNo[i]<num){
      result=result+romanNo[i];
      num=num-decimalNo[i];
    }
  }
  return result;
}

romanConverter(36);