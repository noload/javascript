function longestWord(str) {
  let logestWord = "";
  let arr = str.split(" ");
  for (let word of arr) {
    if (word.length > logestWord.length) {
      logestWord = word;
    }
  }
  return logestWord;
}

let sentance = "Hello this is VaibhavKamble . a full stack developer";

let longWord = longestWord(sentance);
console.log(longWord);
