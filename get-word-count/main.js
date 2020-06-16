function getWordCount(sentence) {
  var counter = 1;
  for (var i = 0; i < sentence.length; i++){
    if (sentence[i] === " ") {
      counter++;
    }
  }
  return counter;
}

console.log('This is a sample sentence',getWordCount("This is a sample sentence"));
console.log('Han shot first',getWordCount("Han shot first"));
console.log('I will not fear, fear is the mind killer',getWordCount('I will not fear, fear is the mind killer'));
