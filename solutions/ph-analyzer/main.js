function phAnalyzer (pH) {
  if (pH >= 0 && pH <= 6) {
    return console.log('acidic');
  } else if (pH === 7) {
      return console.log('neutral');
  } else if (pH > 7 && pH <= 14) {
    return console.log('alkaline');
  } else {
    return console.log('invalid pH value');
  }
}
console.log(phAnalyzer(7));
console.log(phAnalyzer(4));
console.log(phAnalyzer(12));
console.log(phAnalyzer(25));
