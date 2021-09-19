const sentence = 'hello there from lighthouse labs';

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    // instead of console.log so each char does NOT print on a new line
    process.stdout.write(char);
  }, delay);

  delay += 50;
}
