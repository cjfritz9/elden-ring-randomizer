import names from './names.json';

export type nameList = 'fantasy' | 'heroic' | 'got' | 'twitch' | 'absurd';

export const getRandomName = (nameType: nameList) => {
  const categoryNames = names[nameType];
  const indices = categoryNames.length - 1;
  return categoryNames[Math.round(Math.random() * indices)];
};
