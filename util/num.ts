import { PairType } from "../types/pair";

export function generatePair(): [number, number, number] {
  const randomNumberOne = Math.round(Math.random() * 100);
  const randomNumberTwo = Math.round(Math.random() * 100);
  const answer = randomNumberOne + randomNumberTwo;

  console.log(randomNumberOne);
  console.log(randomNumberTwo);
  console.log(answer);

  return [randomNumberOne, randomNumberTwo, answer];
}

export function generateMonsterFileName() {
  const randomMonsterFileNumber = Math.round(Math.random() * 63) + 1;

  const creatureNumber = String(randomMonsterFileNumber).padStart(3, "0");

  return `creature_${creatureNumber}.webp`;
}

export function generatePairs(num: number) {
  const pairs: PairType[] = [];

  for (let i = 0; i < num; i++) {
    const generatedPair = generatePair();
    const pair: PairType = {
      numOne: generatedPair[0],
      numTwo: generatedPair[1],
      answer: generatedPair[2],
      image: generateMonsterFileName(),
    };
    pairs.push(pair);
  }

  return pairs;
}
