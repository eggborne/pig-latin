// window.onload = () => {
//   document.querySelector('button').onclick = () => {
//     let userInput = parseInt(document.querySelector('input').value)
//     for (let i=0; i<=userInput; i++) {
//       let binaryResult = reversedBinary(i);
//       document.querySelector('.column:first-of-type').innerHTML += `<div>${i}</div>`;
//       document.querySelector('.column:last-of-type').innerHTML += `<div>${binaryResult.join('')}</div>`;
//     }
//   }
// }

function translateWord(inputString){
  let outputString = '';
  //check first letter
  if(isVowel(inputString[0])){
    outputString = inputString + 'way';
  }else{
    let firstConsonants = getConsecutiveConsonants(inputString);
    outputString = inputString.substring(firstConsonants.length) + firstConsonants + 'ay';
  }
  return outputString;
}

function isVowel(inputCharacter){
  const vowels = ['a', 'e,', 'i', 'o', 'u'];
  if(vowels.indexOf(inputCharacter.toLowerCase()) !== -1){
    return true;
  }else{
    return false;
  }
}

function getConsecutiveConsonants(word) {
  let consonants = '';
  for (let i=0; i<word.length; i++) {
    let currentLetter = word[i];
    if (!isVowel(currentLetter)) {
      consonants += currentLetter;
    } else {
      if (i > 0 && currentLetter.toLowerCase() === 'u') {
        let previousLetter = word[i-1];
        if (previousLetter.toLowerCase() === 'q') {
          consonants += 'u';
        }
      }
      break;
    }
  }
  return consonants;
}

// function takeInBinary(inputDecimalNumber){
//   let returnBinaryArray = ['0'];
//   for (let i = 0; i<inputDecimalNumber; i++){
//     if(returnBinaryArray[returnBinaryArray.length - 1] == '0'){
//       returnBinaryArray[returnBinaryArray.length - 1] = '1';
//     }else{
//       returnBinaryArray[returnBinaryArray.length - 1] = '1';
//       let reversedDigitArray = returnBinaryArray.reverse();
//       for (let k=0; k<reversedDigitArray.length; k++) {
//         let currentDigit = reversedDigitArray[k];
//         if (currentDigit === '0') {
//           // change to one and end
//           reversedDigitArray[k] = '1'
//           break;
//         } else {

//         }
//         // 
//       }
//     }
//   }
//   return returnBinaryArray.join('');
// }

// function reversedBinary (inputNumber){
//   let returnBinary = ['0']
//   for (let i = 0; i <= inputNumber-1; i++){
//     let found = false;
//     for(let j = 0; j <= returnBinary.length -1; j++){
//       if(returnBinary[j] == '0'){
//         returnBinary[j] = '1';  //done with searching
//         found = true;
//         break;
//       }else{
//         returnBinary[j] = '0';
//       }
//     }
//     if (!found){
//     returnBinary.push('1')
//     }
//   }
//   return returnBinary.reverse();
// }