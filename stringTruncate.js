//Program to truncate a string at the given num;
//add "..." to the string, make sure that after ... the string doesn't exceed the num, unless
//the num count is less than or equal to 3;

var str="A-tisket a-tasket A green and yellow basket";
var num=5;

var slicedString="";


console.log(str.length);
console.log(num);

if(num==str.length|num>str.length){
  console.log("if");
  slicedString=str;

}
else{
  if(num>3){
    console.log("elseif");
    slicedString=str.slice(0, num-3);
    slicedString=slicedString.concat("...");

  }
  else{
    console.log("else");
    slicedString=str.slice(0,num);
    slicedString=slicedString.concat("...");

  }
}

console.log(slicedString);
