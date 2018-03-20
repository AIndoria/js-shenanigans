//Caesar Cipher: ROT13 CIPHER


function rot13(str) { // LBH QVQ VG!
  var actual="";
  var decrypted;
  var code;

  
  
  console.log("starting now...");
  
  for(var i=0;i<str.length;i++){
    if(str.charCodeAt(i)>90 || str.charCodeAt(i)<65){
      actual=actual.concat(str[i]);


    }
    else if(str.charCodeAt(i)>=78){
      code=str.charCodeAt(i)-13;
      decrypted=String.fromCharCode(code);
      console.log(decrypted);
      actual=actual.concat(decrypted);

      
    }
    else{
      code=str.charCodeAt(i)+13;
      decrypted=String.fromCharCode(code);
      console.log(decrypted);
      actual=actual.concat(decrypted);

    }
  }
  console.log("Decrypted:");
  console.log(actual);
  return actual;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


//TODO PRELIM:
//Take the charCodeAt
//Plug the value to code
//add 13 to each charCode
//convert each to letters
//plug the value in a new string
