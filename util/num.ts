export function generatePair() {
  const randomNumberOne = Math.round(Math.random() * 100);
  const randomNumberTwo = Math.round(Math.random() * 100);
  const answer = randomNumberOne + randomNumberTwo;

  return [randomNumberOne, randomNumberTwo, answer];
}

export function generatePairs(num: number) {
  const pairs: number[][] = [];

  for (let i = 0; i < num; i++) {
    const pair = generatePair();
    pairs.push(pair);
  }

  return pairs;
}
