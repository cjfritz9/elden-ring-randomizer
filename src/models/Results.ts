export interface RGB {
  red: string;
  green: string;
  blue: string;
}

interface RandomizerResults {
  createCharacter: {
    bodyType: string;
    age: string;
    origin?: string | null;
    keepsake?: string | null;
  };
  detailedAppearance: {
    voice: string;
    alterSkinColor: RGB;
    alterFaceAndHair: {
      adjustFaceTemplate: {
        boneStructure: number;
        formEmphasis: number;
        apparentAge: number;
        facialAesthetic: number;
      };
      faceStructure: {
        facialBalance: {
          noseSize: number;
          noseForeheadRatio: number;
          faceProtrusion: number;
          vertFaceRatio: number;
          facialFeatureSlant: number;
          horizFaceRatio: number;
        };
        foreheadGlabella: {
          foreheadDepth: number;
          foreheadProtrusion: number;
          noseBridgeHeight: number;
          bridgeProtrusion1: number;
          bridgeProtrusion2: number;
          noseBridgeWidth: number;
        };
        browRidge: {
          browRidgeHeight: number;
          innerBrowRidge: number;
          outerBrowRidge: number;
        };
        eyes: {
          eyePosition: number;
          eyeSize: number;
          eyeSlant: number;
          eyeSpacing: number;
        };
        noseRidge: {
          noseRidgeDepth: number;
          noseRidgeLength: number;
          nosePosition: number;
          noseTipHeight: number;
          noseProtrusion: number;
          noseHeight: number;
          noseSlant: number;
        };
        nostrils: {
          nostrilSlant: number;
          nostrilSize: number;
          nostrilWidth: number;
        };
        cheeks: {
          cheekboneHeight: number;
          cheekboneDepth: number;
          cheekboneWidth: number;
          cheekboneProtrusion: number;
          cheeks: number;
        };
        lips: {
          lipShape: number;
          mouthExpression: number;
          lipFullness: number;
          lipSize: number;
          lipProtrusion: number;
          lipThickness: number;
        };
        mouth: {
          mouthProtrusion: number;
          mouthSlant: number;
          occlusion: number;
          mouthPosition: number;
          mouthWidth: number;
          mouthChinDistance: number;
        };
        chin: {
          chinTipPosition: number;
          chinLength: number;
          chinProtrusion: number;
          chinDepth: number;
          chinSize: number;
          chinHeight: number;
          chinWidth: number;
        };
        jaw: {
          jawProtrusion: number;
          jawWidth: number;
          lowerJaw: number;
          jawContour: number;
        };
      };
      hair: {
        hair: number;
        hairColor: RGB;
        luster: number;
        rootDarkness: number;
        whiteHairs: number;
      };
      eyebrows: {
        brow: number;
        browColor: RGB;
        luster: number;
        rootDarkness: number;
        whiteHairs: number;
      };
      facialHair: {
        beard: number;
        beardColor: RGB;
        luster: number;
        rootDarkness: number;
        whiteHairs: number;
        stubble: number;
      };
      eyelashes: {
        eyelashes: number;
        eyelashColor: RGB;
      };
      eyes: {
        rightIrisSize: number;
        rightIrisColor: RGB;
        rightEyeClouding: number;
        rightCloudingColor: RGB;
        rightEyeWhiteColor: RGB;
        rightEyePosition: number;
        leftIrisSize: number;
        leftIrisColor: RGB;
        leftEyeClouding: number;
        leftCloudingColor: RGB;
        leftEyeWhiteColor: RGB;
        leftEyePosition: number;
      };
      skinFeatures: {
        pores: number;
        skinLuster: number;
        darkCircles: number;
        darkCircleColor: RGB;
      };
      cosmetics: {
        eyeliner: number;
        eyelinerColor: RGB;
        eyeshadowUpper: number;
        eyeshadowColorUpper: RGB;
        eyeshadowLower: number;
        eyeshadowColorLower: RGB;
        cheeks: number;
        cheekColor: RGB;
        lipstick: number;
        lipstickColor: RGB;
      };
      tattooMarkEyepatch: {
        tattooMark: number;
        tattooMarkColor: RGB;
        tweakTattooMark: {
          positionVert: number;
          positionHoriz: number;
          angle: number;
          expansion: number;
          flip: string;
        };
        eyepatch: number | null;
        eyepatchColor: RGB | null;
      };
    };
    alterBody: {
      head: number;
      chest: number;
      abdomen: number;
      arms: number;
      legs: number;
      bodyHair: number;
      bodyHairColor: RGB;
      musculature: string;
    };
  };
}

export default RandomizerResults;
