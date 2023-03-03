import * as UNG from 'unique-names-generator';
import { NamePrompt } from '../models/Prompts';
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

export const validateName = (name: string) => {
  if (name.toLowerCase().includes('sorry')) {
    return 'Error, Try Again';
  }
  if (name.length > 16) {
    name = name.slice(0, 15);
  }
  return name;
};

export const selectRandomOption = (options: any[]) => {
  return options[Math.round(Math.random() * (options.length - 1))];
};

export const selectRandomNumber = (num = 255) => {
  return Math.round(Math.random() * num);
};

export const colorPickerRGB = (): RGB => {
  return {
    red: `${Math.round(Math.random() * 255)}`,
    green: `${Math.round(Math.random() * 255)}`,
    blue: `${Math.round(Math.random() * 255)}`
  };
};

export const createChatPrompt = (promptType: NamePrompt) => {
  if (promptType === 'Fantasy') {
    return 'Medieval Fantasy';
  }
  if (promptType === 'Heroic') {
    return 'Dark Heroic';
  }
  if (promptType === 'GOT') {
    return 'Game of Thrones Characters Combined';
  }
  if (promptType === 'Twitch') {
    return 'Fake BetterTTV Names';
  }

  return 'Absurdity';
};

export const generateCharData = (
  originOption: boolean,
  keepsakeOption: boolean,
  eyepatchOption: boolean,
  bigEyesOption: boolean
) => {
  return {
    createCharacter: {
      bodyType: selectRandomOption(['Type A', 'Type B']),
      age: selectRandomOption(['Young', 'Mature', 'Aged']),
      origin: originOption
        ? selectRandomOption([
            'Vagabond',
            'Warrior',
            'Hero',
            'Bandit',
            'Astrologer',
            'Prophet',
            'Samurai',
            'Prisoner',
            'Confessor',
            'Wretch'
          ])
        : null,
      keepsake: keepsakeOption
        ? selectRandomOption([
            'None (1)',
            'Crimson Amber Medallion (2)',
            'Lands Between Rune (3)',
            'Golden Seed (4)',
            'Fanged Imp Ashes (5)',
            'Cracked Pot (6)',
            'Stonesword Key (7)',
            'Bewitching Branch (8)',
            'Boiled Prawn (9)',
            "Shabiri's Woe (10)"
          ])
        : null
    },
    detailedAppearance: {
      voice: selectRandomOption([
        'Young Voice 1',
        'Young Voice 2',
        'Mature Voice 1',
        'Mature Voice 2',
        'Aged Voice 1',
        'Aged Voice 2'
      ]),
      alterSkinColor: colorPickerRGB(),
      alterFaceAndHair: {
        adjustFaceTemplate: {
          boneStructure: selectRandomNumber(6),
          formEmphasis: selectRandomNumber(),
          apparentAge: selectRandomNumber(),
          facialAesthetic: selectRandomNumber()
        },
        faceStructure: {
          facialBalance: {
            noseSize: selectRandomNumber(),
            noseForeheadRatio: selectRandomNumber(),
            faceProtrusion: selectRandomNumber(),
            vertFaceRatio: selectRandomNumber(),
            facialFeatureSlant: selectRandomNumber(),
            horizFaceRatio: selectRandomNumber()
          },
          foreheadGlabella: {
            foreheadDepth: selectRandomNumber(),
            foreheadProtrusion: selectRandomNumber(),
            noseBridgeHeight: selectRandomNumber(),
            bridgeProtrusion1: selectRandomNumber(),
            bridgeProtrusion2: selectRandomNumber(),
            noseBridgeWidth: selectRandomNumber()
          },
          browRidge: {
            browRidgeHeight: selectRandomNumber(),
            innerBrowRidge: selectRandomNumber(),
            outerBrowRidge: selectRandomNumber()
          },
          eyes: {
            eyePosition: selectRandomNumber(),
            eyeSize: bigEyesOption
              ? selectRandomNumber(130) + 125
              : selectRandomNumber(),
            eyeSlant: selectRandomNumber(),
            eyeSpacing: selectRandomNumber()
          },
          noseRidge: {
            noseRidgeDepth: selectRandomNumber(),
            noseRidgeLength: selectRandomNumber(),
            nosePosition: selectRandomNumber(),
            noseTipHeight: selectRandomNumber(),
            noseProtrusion: selectRandomNumber(),
            noseHeight: selectRandomNumber(),
            noseSlant: selectRandomNumber()
          },
          nostrils: {
            nostrilSlant: selectRandomNumber(),
            nostrilSize: selectRandomNumber(),
            nostrilWidth: selectRandomNumber()
          },
          cheeks: {
            cheekboneHeight: selectRandomNumber(),
            cheekboneDepth: selectRandomNumber(),
            cheekboneWidth: selectRandomNumber(),
            cheekboneProtrusion: selectRandomNumber(),
            cheeks: selectRandomNumber()
          },
          lips: {
            lipShape: selectRandomNumber(),
            mouthExpression: selectRandomNumber(),
            lipFullness: selectRandomNumber(),
            lipSize: selectRandomNumber(),
            lipProtrusion: selectRandomNumber(),
            lipThickness: selectRandomNumber()
          },
          mouth: {
            mouthProtrusion: selectRandomNumber(),
            mouthSlant: selectRandomNumber(),
            occlusion: selectRandomNumber(),
            mouthPosition: selectRandomNumber(),
            mouthWidth: selectRandomNumber(),
            mouthChinDistance: selectRandomNumber()
          },
          chin: {
            chinTipPosition: selectRandomNumber(),
            chinLength: selectRandomNumber(),
            chinProtrusion: selectRandomNumber(),
            chinDepth: selectRandomNumber(),
            chinSize: selectRandomNumber(),
            chinHeight: selectRandomNumber(),
            chinWidth: selectRandomNumber()
          },
          jaw: {
            jawProtrusion: selectRandomNumber(),
            jawWidth: selectRandomNumber(),
            lowerJaw: selectRandomNumber(),
            jawContour: selectRandomNumber()
          }
        },
        hair: {
          hair: selectRandomNumber(32),
          hairColor: colorPickerRGB(),
          luster: selectRandomNumber(),
          rootDarkness: selectRandomNumber(),
          whiteHairs: selectRandomNumber()
        },
        eyebrows: {
          brow: selectRandomNumber(17),
          browColor: colorPickerRGB(),
          luster: selectRandomNumber(),
          rootDarkness: selectRandomNumber(),
          whiteHairs: selectRandomNumber()
        },
        facialHair: {
          beard: selectRandomNumber(17),
          beardColor: colorPickerRGB(),
          luster: selectRandomNumber(),
          rootDarkness: selectRandomNumber(),
          whiteHairs: selectRandomNumber(),
          stubble: selectRandomNumber()
        },
        eyelashes: {
          eyelashes: selectRandomNumber(4),
          eyelashColor: colorPickerRGB()
        },
        eyes: {
          rightIrisSize: selectRandomNumber(),
          rightIrisColor: colorPickerRGB(),
          rightEyeClouding: selectRandomNumber(),
          rightCloudingColor: colorPickerRGB(),
          rightEyeWhiteColor: colorPickerRGB(),
          rightEyePosition: selectRandomNumber(),
          leftIrisSize: selectRandomNumber(),
          leftIrisColor: colorPickerRGB(),
          leftEyeClouding: selectRandomNumber(),
          leftCloudingColor: colorPickerRGB(),
          leftEyeWhiteColor: colorPickerRGB(),
          leftEyePosition: selectRandomNumber()
        },
        skinFeatures: {
          pores: selectRandomNumber(),
          skinLuster: selectRandomNumber(),
          darkCircles: selectRandomNumber(),
          darkCircleColor: colorPickerRGB()
        },
        cosmetics: {
          eyeliner: selectRandomNumber(),
          eyelinerColor: colorPickerRGB(),
          eyeshadowUpper: selectRandomNumber(),
          eyeshadowColorUpper: colorPickerRGB(),
          eyeshadowLower: selectRandomNumber(),
          eyeshadowColorLower: colorPickerRGB(),
          cheeks: selectRandomNumber(),
          cheekColor: colorPickerRGB(),
          lipstick: selectRandomNumber(),
          lipstickColor: colorPickerRGB()
        },
        tattooMarkEyepatch: {
          tattooMark: selectRandomNumber(),
          tattooMarkColor: colorPickerRGB(),
          tweakTattooMark: {
            positionVert: selectRandomNumber(),
            positionHoriz: selectRandomNumber(),
            angle: selectRandomNumber(),
            expansion: selectRandomNumber(),
            flip: selectRandomOption(['On', 'Off'])
          },
          eyepatch: !eyepatchOption ? selectRandomNumber(4) : null,
          eyepatchColor: !eyepatchOption ? colorPickerRGB() : null
        }
      },
      alterBody: {
        head: selectRandomNumber(),
        chest: selectRandomNumber(),
        abdomen: selectRandomNumber(),
        arms: selectRandomNumber(),
        legs: selectRandomNumber(),
        bodyHair: selectRandomNumber(),
        bodyHairColor: colorPickerRGB(),
        musculature: selectRandomOption(['Standard', 'Muscular'])
      }
    }
  };
};
