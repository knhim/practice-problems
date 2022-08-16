Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"


function removeUrlAnchor(url) {
  let newStr = '';
  for (let i = 0; i < url.length; i++) {
    if (url[i] !== '#') {
      newStr += url[i];
    } else {
      return newStr;
    }
  }
  return newStr;
}


//alt solutions

function removeUrlAnchor1(url){
  return url.split('#')[0];
}
