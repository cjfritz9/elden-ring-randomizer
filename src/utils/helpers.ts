import * as UNG from 'unique-names-generator';
import { RGB } from '../models/Results';

const usedDictionaries = [
  UNG.adjectives,
  UNG.animals,
  UNG.colors,
  UNG.countries,
  UNG.languages,
  UNG.names
];

const config: UNG.Config = {
  dictionaries: [
    usedDictionaries[Math.round(Math.random() * (usedDictionaries.length - 1))],
    usedDictionaries[Math.round(Math.random() * (usedDictionaries.length - 1))]
  ],
  length: 2,
  separator: ' ',
  style: 'capital'
};

export const generateName = () => {
  return UNG.uniqueNamesGenerator(config);
};

export const selectRandomOption = (options: any[]) => {
  return options[Math.round(Math.random() * (options.length - 1))];
};

export const selectRandomNumber = (num = 255) => {
  return Math.round(Math.random() * num);
}

export const colorPickerRGB = (): RGB => {
  return {
    red: `${Math.round(Math.random() * 255)}`,
    green: `${Math.round(Math.random() * 255)}`,
    blue: `${Math.round(Math.random() * 255)}`
  };
};

console.log(generateName());
console.log(
  selectRandomOption(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
);
