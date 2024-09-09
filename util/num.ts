import { PairType } from "../types/pair";

export function generatePair(): [number, number, number] {
  const randomNumberOne = Math.round(Math.random() * 100);
  const randomNumberTwo = Math.round(Math.random() * 100);
  const answer = randomNumberOne + randomNumberTwo;

  return [randomNumberOne, randomNumberTwo, answer];
}

export function generateMonsterFileName() {
  const randomMonsterFileNumber = Math.round(Math.random() * 64);

  const creatureNumber = String(randomMonsterFileNumber).padStart(3, "0");

  return `creature_${creatureNumber}.webp`;
}

export function generatePairs(num: number) {
  const pairs: PairType[] = [];

  for (let i = 0; i < num; i++) {
    const pair: PairType = {
      numOne: generatePair()[0],
      numTwo: generatePair()[1],
      answer: generatePair()[2],
      image: generateMonsterFileName(),
    };
    pairs.push(pair);
  }

  return pairs;
}
