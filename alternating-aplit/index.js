/*
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

*/

// my solution (wasn't able to solve it. on the test cases I got 17/18 but on the actualy attempt i got something like 60/80)
function encrypt(text, n) {
    let newText = text;
    let newString = '';
    
    if (text === '' || text === null || n <= 0) {
      return text;
    } 
    
    for (let loop = 0; loop < n; loop++) { 
      newString = '';
      //these two for loops to loop over the string once
      for (let i = 1; i < newText.length; i+=2) {
        newString += newText[i];
      }
    
      for (let j = 0; j < newText.length; j+=2) {
        newString += newText[j];
      }
      newText = newString;
    }
    return newString;
  
  }
  
  function decrypt(encryptedText, n) {
     if (encryptedText === '' || encryptedText === "null" || n <= 0) {
      return encryptedText;
    }
  
    return encrypt(encryptedText, 4 - n);
  }

// best practices
function encrypt2(text, n) {
    console.log(text, n);
    if (!text || n <= 0) return text; 
    while (n--) {
      let ans = '';
      for (let i = 1; i < text.length; i += 2) {
        ans += text[i];
      }
      for (let i = 0; i < text.length; i += 2) {
        ans += text[i];
      }
      text = ans;
    }
    return text;
  }
  
  function decrypt2(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
      let j = 0;
      for (let i = 1; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      for (let i = 0; i < ans.length; i += 2) {
        ans[i] = encryptedText[j++];
      }
      encryptedText = ans.join('');
    }
    return encryptedText;
  }