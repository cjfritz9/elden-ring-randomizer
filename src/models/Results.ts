interface RandomizerResults {
  createCharacter: {
    charName: string;
    bodyType: string;
    age: string;
    origin?: string;
    keepsake?: string;
  };
  detailedAppearance: {
    age: string;
    voice: string;
    alterSkinColor: number;
    alterFaceAndHair: {
      adjustFaceTemplate: {
        boneStructure: number;
        formEmphasis: number;
        apparentAge: number;
        facialAesthetic: number;
      };
      
    }
  }
}

export default RandomizerResults;
