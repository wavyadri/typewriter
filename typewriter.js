const sentence = 'hello there from lighthouse labs';
// instead of console.log so each char does NOT print on a new line

let delay = 0;

for (let i = 0; i <= sentence.length - 1; i++) {
  setTimeout(() => {
    if (i === sentence.length - 1) {
      // add new line after last character
      process.stdout.write(sentence[i] + '\n');
    } else {
      process.stdout.write(sentence[i]);
    }
  }, delay);

  delay += 50;
}
