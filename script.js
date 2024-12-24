function firstNonRepeatedChar(str) {
 // Write your code here
	  let input = str.split("");
  let res = "";

  for (let i = 0; i < input.length; i++) {
    let isRepeated = false;
    for (let j = 0; j < input.length; j++) {
      if (i !== j && input[i] === input[j]) {
        isRepeated = true;
        break;
      }
    }
    if (!isRepeated) {
      res = input[i];
      break; // Stop at the first non-repeated character
    }
  }

  return res ? `First non-repeated character is: ${res}` : "No non-repeated character found";
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
