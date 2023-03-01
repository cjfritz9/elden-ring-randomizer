import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Tooltip
} from '@chakra-ui/react';
import SwitchOption from './SwitchOption';
import RandomizerResults from '../models/Results';
import {
  colorPickerRGB,
  generateName,
  selectRandomNumber,
  selectRandomOption
} from '../utils/helpers';
import ResultItem from './ResultItem';

const Randomizer: React.FC = () => {
  const [appState, setAppState] = useState<'options' | 'results'>('options');
  const [eyepatchOption, setEyepatchOption] = useState(true);
  const [bigEyesOption, setBigEyesOption] = useState(true);
  const [originOption, setOriginOption] = useState(false);
  const [keepsakeOption, setKeepsakeOption] = useState(false);
  const [results, setResults] = useState<RandomizerResults>();

  useEffect(() => {
    if (appState === 'results') {
      // TODO: set randomizer results
      setResults({
        createCharacter: {
          charName: generateName(),
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
                eyeSize: selectRandomNumber(),
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
              eyepatch: eyepatchOption ? selectRandomNumber(4) : null,
              eyepatchColor: eyepatchOption ? colorPickerRGB() : null
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
      });
    }
  }, [appState]);

  return (
    <Container
      minW='100%'
      m='0'
      px={['1rem', '2rem', '3rem', '4rem', '6rem', '12rem']}
      py={['2rem', '2rem', '3rem', '3rem', '4rem', '6.5rem']}
    >
      {appState === 'options' ? (
        <Stack w='100%' align='center'>
          <Heading variant='heading1'>ELDEN RING CHARACTER RANDOMIZER</Heading>
          <Stack
            pt='4rem'
            maxW='420px'
            w='100%'
            gap={['1rem', '1rem', '2rem', '2rem', '2rem']}
          >
            <Stack align='center'>
              <SwitchOption
                option='Ignore Eyepatches'
                info="Won't generate an eyepatch option - keeps eye randomizations relevant"
                setOption={setEyepatchOption}
                defaultIsChecked
              />
              <SwitchOption
                option='Prefer Large Eyes'
                info='Prevents the character eyes from being too small to see'
                setOption={setBigEyesOption}
                defaultIsChecked
              />
              <SwitchOption
                option='Randomize Origin'
                info='AKA randomize starting stat choice'
                setOption={setOriginOption}
                defaultIsChecked={false}
              />
              <SwitchOption
                option='Randomize Keepsake'
                info='Randomizes the starting keepsake item'
                setOption={setKeepsakeOption}
                defaultIsChecked={false}
              />
            </Stack>
            <Button
              _hover={{ filter: 'brightness(1.2)' }}
              _active={{ transform: 'scale(.98)' }}
              bgColor='#111E2E'
              boxShadow='0 0 4px #EBC691'
              fontWeight='bold'
              letterSpacing='1px'
              onClick={() => setAppState('results')}
            >
              GET SILLY
            </Button>
          </Stack>
        </Stack>
      ) : appState === 'results' && results ? (
        <Stack align='center'>
          <Heading variant='heading1'>YOUR HERO</Heading>
          <Stack w='100%' maxW='640px'>
            <Accordion defaultIndex={0} allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading'>Create Character</Heading>
                    <AccordionIcon fontSize='32px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <Stack gap='1rem'>
                    <ResultItem
                      fieldName='Name:'
                      result={results.createCharacter.charName}
                    />
                    <ResultItem
                      fieldName='Body Type:'
                      result={results.createCharacter.bodyType}
                    />
                    <ResultItem
                      fieldName='Age:'
                      result={results.createCharacter.age}
                    />
                    <ResultItem
                      fieldName='Origin:'
                      result={results.createCharacter.origin}
                    />
                    <ResultItem
                      fieldName='Keepsake:'
                      result={results.createCharacter.keepsake}
                    />
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='flex-end'>
                    <Heading variant='subheading'>Detailed Appearance</Heading>
                    <AccordionIcon fontSize='32px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <Stack gap='1rem'>
                    <ResultItem
                      fieldName='Voice:'
                      result={results.detailedAppearance.voice}
                    />
                    <ResultItem
                      fieldName='Alter Skin Color:'
                      result={results.detailedAppearance.alterSkinColor}
                      colorResult
                    />
                    <Accordion allowToggle></Accordion>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem pointerEvents='none'>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading2'>Alter Face & Hair</Heading>
                  </Flex>
                </AccordionButton>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>
                      Adjust Face Template
                    </Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <Stack>
                    <ResultItem
                      fieldName='Bone Structure:'
                      result={
                        results.detailedAppearance.alterFaceAndHair
                          .adjustFaceTemplate.boneStructure
                      }
                    />
                    <ResultItem
                      fieldName='Form Emphasis:'
                      result={
                        results.detailedAppearance.alterFaceAndHair
                          .adjustFaceTemplate.formEmphasis
                      }
                    />
                    <ResultItem
                      fieldName='Apparent Age:'
                      result={
                        results.detailedAppearance.alterFaceAndHair
                          .adjustFaceTemplate.apparentAge
                      }
                    />
                    <ResultItem
                      fieldName='Facial Aesthetic:'
                      result={
                        results.detailedAppearance.alterFaceAndHair
                          .adjustFaceTemplate.facialAesthetic
                      }
                    />
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Face Structure</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
              </AccordionItem>
            </Accordion>
          </Stack>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(3, 1fr)'
            ]}
          >
            <Stack m='2rem'>
              <Heading variant='subheading2'>Alter Face & Hair</Heading>
              <Heading variant='subheading3'>Adjust Face Template</Heading>
              <ResultItem
                fieldName='Bone Structure:'
                result={
                  results.detailedAppearance.alterFaceAndHair.adjustFaceTemplate
                    .boneStructure
                }
              />
              <ResultItem
                fieldName='Form Emphasis:'
                result={
                  results.detailedAppearance.alterFaceAndHair.adjustFaceTemplate
                    .formEmphasis
                }
              />
              <ResultItem
                fieldName='Apparent Age:'
                result={
                  results.detailedAppearance.alterFaceAndHair.adjustFaceTemplate
                    .apparentAge
                }
              />
              <ResultItem
                fieldName='Facial Aesthetic:'
                result={
                  results.detailedAppearance.alterFaceAndHair.adjustFaceTemplate
                    .facialAesthetic
                }
              />
              <Heading variant='subheading3'>Face Structure</Heading>
              <ResultItem
                fieldName='Bone Structure:'
                result={
                  results.detailedAppearance.alterFaceAndHair.adjustFaceTemplate
                    .boneStructure
                }
              />
            </Stack>
          </Grid>
        </Stack>
      ) : (
        <Stack>
          <Heading>LOADING</Heading>
        </Stack>
      )}
    </Container>
  );
};

export default Randomizer;
