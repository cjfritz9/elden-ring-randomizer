// NAMES

import {
  uniqueNamesGenerator,
  names,
  adjectives,
  colors,
  starWars,
  countries
} from 'unique-names-generator';

const config1 = {
  dictionaries: [adjectives, names, colors],
  separator: ' ',
  length: 2,
  style: 'capital'
};

const config2 = {
  dictionaries: [names, colors, adjectives],
  separator: ' ',
  length: 2,
  style: 'capital'
};

const config3 = {
  dictionaries: [colors, names, adjectives],
  separator: ' ',
  length: 2,
  style: 'capital'
};

const config4 = {
  dictionaries: [names, names, adjectives],
  separator: ' ',
  length: 2,
  style: 'capital'
};

const config5 = {
  dictionaries: [countries, names, adjectives],
  separator: ' ',
  length: 2,
  style: 'capital'
};

export const randomCharacterNames = () => {
  return {
    characterName1: uniqueNamesGenerator(config1),
    characterName2: uniqueNamesGenerator(config2),
    characterName3: uniqueNamesGenerator(config3),
    characterName4: uniqueNamesGenerator(config4),
    characterName5: uniqueNamesGenerator(config5)
  };
};

// BODY TYPE

export const twoOptions = (...options) => {
  if (options.length !== 2) return;

  const option1 = options[0];
  const option2 = options[1];

  if (Math.ceil(Math.random() * 2) === 1) {
    return option1;
  } else {
    return option2;
  }
};

// AGE

export const ageSelector = () => {
  const option = Math.ceil(Math.random() * 3);

  if (option === 1) return 'Young';
  else if (option === 2) return 'Mature';
  else return 'Aged';
};

export const voiceSelector = () => {
  const option = Math.ceil(Math.random() * 6);

  if (option === 1) return 'Young Voice 1';
  else if (option === 2) return 'Young Voice 2';
  else if (option === 3) return 'Mature Voice 1';
  else if (option === 4) return 'Mature Voice 2';
  else if (option === 5) return 'Aged Voice 1';
  else return 'Aged Voice 2';
};

export const colorSelector = () => {
  const R = Math.ceil(Math.random() * 255);
  const G = Math.ceil(Math.random() * 255);
  const B = Math.ceil(Math.random() * 255);

  return {
    R,
    G,
    B
  };
};
