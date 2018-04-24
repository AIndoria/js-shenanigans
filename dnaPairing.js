/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/


function pairElement(str) {
  let fullArray=[];
  let properArray=[];
  
  for(let i=0; i<str.length;i++){
    switch(str[i]){
      case 'G': fullArray.push(str[i]);
                fullArray.push("C");
                break;
      case 'C': fullArray.push(str[i]);
                fullArray.push("G");
                break;
      case 'A': fullArray.push(str[i]);
                fullArray.push("T");
                break;
      case 'T': fullArray.push(str[i]);
                fullArray.push("A");
                break;      
    }
  }
  for(let i=0;i<fullArray.length;i+=2){
    properArray.push(fullArray.slice(i,i+2));
  }
  console.log(fullArray);
  console.log(properArray);
  return properArray;
}

pairElement("GCG");
