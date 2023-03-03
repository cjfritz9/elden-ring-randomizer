import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Container,
  Flex,
  Icon,
  Heading,
  Stack,
  Box
} from '@chakra-ui/react';
import SwitchOption from './SwitchOption';
import RandomizerResults from '../models/Results';
import { fetchRandomName } from '../openai/api';
import { createChatPrompt, generateCharData } from '../utils/helpers';
import ResultItem from './ResultItem';
import NameOption from './NameOption';
import { getRandomName, nameList } from '../db/names';
import { VscRefresh } from 'react-icons/vsc';

const Randomizer: React.FC = () => {
  const [appState, setAppState] = useState<'options' | 'results'>('options');
  const [eyepatchOption, setEyepatchOption] = useState(true);
  const [bigEyesOption, setBigEyesOption] = useState(true);
  const [originOption, setOriginOption] = useState(false);
  const [keepsakeOption, setKeepsakeOption] = useState(false);
  const [results, setResults] = useState<RandomizerResults>();
  const [prompt, setPrompt] = useState<nameList>('fantasy');
  const [charName, setCharName] = useState<string>();
  // const [fetchingName, setFetchingName] = useState(true);

  // const fetchNewName = async () => {
  //   setFetchingName(true);
  //   const name = await fetchRandomName(prompt);
  //   setCharName(name);
  //   setFetchingName(false);
  // };

  useEffect(() => {
    if (appState === 'results') {
      setCharName(getRandomName(prompt));
      setResults(
        generateCharData(
          originOption,
          keepsakeOption,
          eyepatchOption,
          bigEyesOption
        )
      );
      // fetchNewName();
    }
  }, [appState]);

  console.log(charName);

  return (
    <Container
      minW='100%'
      m='0'
      px={['0rem', '1rem', '3rem', '4rem', '6rem', '12rem']}
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
              <NameOption setOption={setPrompt} />
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
              <AccordionItem pos='relative'>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading'>Create Character</Heading>
                    <AccordionIcon fontSize='32px' />
                  </Flex>
                </AccordionButton>
                  <Icon
                    _hover={{ transform: 'scale(1.1)'}}
                    transition='transform .5s ease-in-out'
                    cursor='pointer'
                  pos='absolute'
                  top='74px'
                  right='-12px'
                  fontSize='20px'
                  as={VscRefresh}
                  onClick={() => setCharName(getRandomName(prompt))}
                />
                <AccordionPanel>
                  <ResultItem
                    fieldName='Name:'
                    result={
                      // fetchingName ? 'loading' :
                      charName
                    }
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
                  <ResultItem
                    fieldName='Voice:'
                    result={results.detailedAppearance.voice}
                  />
                  <ResultItem
                    fieldName='Alter Skin Color:'
                    result={results.detailedAppearance.alterSkinColor}
                    colorResult
                  />
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
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton pointerEvents='none'>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Face Structure</Heading>
                  </Flex>
                </AccordionButton>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Facial Balance</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Nose Size:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .facialBalance.noseSize
                    }
                  />
                  <ResultItem
                    fieldName='Nose/Forehead Ratio:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .facialBalance.noseForeheadRatio
                    }
                  />
                  <ResultItem
                    fieldName='Face Protrusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .facialBalance.faceProtrusion
                    }
                  />
                  <ResultItem
                    fieldName='Vert. Face Ratio:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .facialBalance.vertFaceRatio
                    }
                  />
                  <ResultItem
                    fieldName='Facial Feature Slant:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .facialBalance.facialFeatureSlant
                    }
                  />
                  <ResultItem
                    fieldName='Horiz. Face Ratio:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .facialBalance.horizFaceRatio
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Forehead/Glabella</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Forehead Depth:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .foreheadGlabella.foreheadDepth
                    }
                  />
                  <ResultItem
                    fieldName='Forehead Protrusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .foreheadGlabella.foreheadProtrusion
                    }
                  />
                  <ResultItem
                    fieldName='Nose Bridge Height:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .foreheadGlabella.noseBridgeHeight
                    }
                  />
                  <ResultItem
                    fieldName='Bridge Protrusion 1:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .foreheadGlabella.bridgeProtrusion1
                    }
                  />
                  <ResultItem
                    fieldName='Bridge Protrusion 2:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .foreheadGlabella.bridgeProtrusion2
                    }
                  />
                  <ResultItem
                    fieldName='Nose Bridge Width:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .foreheadGlabella.noseBridgeWidth
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Brow Ridge</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Brow Ridge Height:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .browRidge.browRidgeHeight
                    }
                  />
                  <ResultItem
                    fieldName='Inner Brow Ridge:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .browRidge.innerBrowRidge
                    }
                  />
                  <ResultItem
                    fieldName='Outer Brow Ridge:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .browRidge.outerBrowRidge
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Eyes</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Eye Position:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .eyes.eyePosition
                    }
                  />
                  <ResultItem
                    fieldName='Eye Size:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .eyes.eyeSize
                    }
                  />
                  <ResultItem
                    fieldName='Eye Slant:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .eyes.eyeSlant
                    }
                  />
                  <ResultItem
                    fieldName='Eye Spacing:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .eyes.eyeSpacing
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Nose Ridge</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Nose Ridge Depth:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .noseRidge.noseRidgeDepth
                    }
                  />
                  <ResultItem
                    fieldName='Nose Ridge Length:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .noseRidge.noseRidgeLength
                    }
                  />
                  <ResultItem
                    fieldName='Nose Position:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .noseRidge.nosePosition
                    }
                  />
                  <ResultItem
                    fieldName='Nose Tip Height:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .noseRidge.noseTipHeight
                    }
                  />
                  <ResultItem
                    fieldName='Nose Protrusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .noseRidge.noseProtrusion
                    }
                  />
                  <ResultItem
                    fieldName='Nose Height:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .noseRidge.noseHeight
                    }
                  />
                  <ResultItem
                    fieldName='Nose Slant:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .noseRidge.noseSlant
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Nostrils</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Nostril Slant:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .nostrils.nostrilSlant
                    }
                  />
                  <ResultItem
                    fieldName='Nostril Size:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .nostrils.nostrilSize
                    }
                  />
                  <ResultItem
                    fieldName='Nostril Width:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .nostrils.nostrilWidth
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Cheeks</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Cheekbone Height:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .cheeks.cheekboneHeight
                    }
                  />
                  <ResultItem
                    fieldName='Cheekbone Depth:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .cheeks.cheekboneDepth
                    }
                  />
                  <ResultItem
                    fieldName='Cheekbone Width:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .cheeks.cheekboneWidth
                    }
                  />
                  <ResultItem
                    fieldName='Cheekbone Protrusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .cheeks.cheekboneProtrusion
                    }
                  />
                  <ResultItem
                    fieldName='Cheeks:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .cheeks.cheeks
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Lips</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Lip Shape:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .lips.lipShape
                    }
                  />
                  <ResultItem
                    fieldName='Mouth Expression:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .lips.mouthExpression
                    }
                  />
                  <ResultItem
                    fieldName='Lip Fullness:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .lips.lipFullness
                    }
                  />
                  <ResultItem
                    fieldName='Lip Size:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .lips.lipSize
                    }
                  />
                  <ResultItem
                    fieldName='Lip Protrusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .lips.lipProtrusion
                    }
                  />
                  <ResultItem
                    fieldName='Lip Thickness:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .lips.lipThickness
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Mouth</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Mouth Protrusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .mouth.mouthProtrusion
                    }
                  />
                  <ResultItem
                    fieldName='Mouth Slant:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .mouth.mouthSlant
                    }
                  />
                  <ResultItem
                    fieldName='Occlusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .mouth.occlusion
                    }
                  />
                  <ResultItem
                    fieldName='Mouth Position:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .mouth.mouthPosition
                    }
                  />
                  <ResultItem
                    fieldName='Mouth Width:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .mouth.mouthWidth
                    }
                  />
                  <ResultItem
                    fieldName='Mouth Chin Distance:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .mouth.mouthChinDistance
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Chin</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Chin Tip Position:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .chin.chinTipPosition
                    }
                  />
                  <ResultItem
                    fieldName='Chin Length:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .chin.chinLength
                    }
                  />
                  <ResultItem
                    fieldName='Chin Protrusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .chin.chinProtrusion
                    }
                  />
                  <ResultItem
                    fieldName='Chin Depth:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .chin.chinDepth
                    }
                  />
                  <ResultItem
                    fieldName='Chin Size:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .chin.chinSize
                    }
                  />
                  <ResultItem
                    fieldName='Chin Height:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .chin.chinHeight
                    }
                  />
                  <ResultItem
                    fieldName='Chin Width:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .chin.chinWidth
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Jaw</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Jaw Protrusion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .jaw.jawProtrusion
                    }
                  />
                  <ResultItem
                    fieldName='Jaw Width:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .jaw.jawWidth
                    }
                  />
                  <ResultItem
                    fieldName='Lower Jaw:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .jaw.lowerJaw
                    }
                  />
                  <ResultItem
                    fieldName='Jaw Contour:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.faceStructure
                        .jaw.jawContour
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Hair</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Hair:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.hair.hair
                    }
                  />
                  <ResultItem
                    fieldName='Hair Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.hair.hairColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Luster:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.hair.luster
                    }
                  />
                  <ResultItem
                    fieldName='Root Darkness:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.hair
                        .rootDarkness
                    }
                  />
                  <ResultItem
                    fieldName='White Hairs:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.hair
                        .whiteHairs
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Eyebrows</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Brow:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyebrows.brow
                    }
                  />
                  <ResultItem
                    fieldName='Brow Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyebrows
                        .browColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Luster:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyebrows
                        .luster
                    }
                  />
                  <ResultItem
                    fieldName='Root Darkness:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyebrows
                        .rootDarkness
                    }
                  />
                  <ResultItem
                    fieldName='White Hairs:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyebrows
                        .whiteHairs
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Facial Hair</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Beard:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.facialHair
                        .beard
                    }
                  />
                  <ResultItem
                    fieldName='Beard Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.facialHair
                        .beardColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Luster:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.facialHair
                        .luster
                    }
                  />
                  <ResultItem
                    fieldName='Root Darkness:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.facialHair
                        .rootDarkness
                    }
                  />
                  <ResultItem
                    fieldName='White Hairs:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.facialHair
                        .whiteHairs
                    }
                  />
                  <ResultItem
                    fieldName='Stubble:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.facialHair
                        .stubble
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Eyelashes</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Eyelashes:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyelashes
                        .eyelashes
                    }
                  />
                  <ResultItem
                    fieldName='Eyelash Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyelashes
                        .eyelashColor
                    }
                    colorResult
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Eyes</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Right Iris Size:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .rightIrisSize
                    }
                  />
                  <ResultItem
                    fieldName='Right Iris Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .rightIrisColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Right Eye Clouding:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .rightEyeClouding
                    }
                  />
                  <ResultItem
                    fieldName='Right Clouding Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .rightCloudingColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Right Eye White Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .rightEyeWhiteColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Right Eye Position:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .rightEyePosition
                    }
                  />
                  <ResultItem
                    fieldName='Left Iris Size:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .leftIrisSize
                    }
                  />
                  <ResultItem
                    fieldName='Left Iris Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .leftIrisColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Left Eye Clouding:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .leftEyeClouding
                    }
                  />
                  <ResultItem
                    fieldName='Left Clouding Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .leftCloudingColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Left Eye White Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .leftEyeWhiteColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Left Eye Position:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.eyes
                        .leftEyePosition
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Skin Features</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Pores:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.skinFeatures
                        .pores
                    }
                  />
                  <ResultItem
                    fieldName='Skin Luster:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.skinFeatures
                        .skinLuster
                    }
                  />
                  <ResultItem
                    fieldName='Dark Circles:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.skinFeatures
                        .darkCircles
                    }
                  />
                  <ResultItem
                    fieldName='Dark Circle Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.skinFeatures
                        .darkCircleColor
                    }
                    colorResult
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Cosmetics</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Eyeliner:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .eyeliner
                    }
                  />
                  <ResultItem
                    fieldName='Eyeliner Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .eyelinerColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Eyeshadow Upper:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .eyeshadowUpper
                    }
                  />
                  <ResultItem
                    fieldName='Eyeshadow Color Upper:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .eyeshadowColorUpper
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Eyeshadow Lower:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .eyeshadowLower
                    }
                  />
                  <ResultItem
                    fieldName='Eyeshadow Color Lower:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .eyeshadowColorLower
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Cheeks:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .cheeks
                    }
                  />
                  <ResultItem
                    fieldName='Cheek Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .cheekColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Lipstick:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .lipstick
                    }
                  />
                  <ResultItem
                    fieldName='Lipstick Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair.cosmetics
                        .lipstickColor
                    }
                    colorResult
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>
                      Tattoo/Mark/Eyepatch
                    </Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Tattoo/Mark:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.tattooMark
                    }
                  />
                  <ResultItem
                    fieldName='Tattoo/Mark Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.tattooMarkColor
                    }
                    colorResult
                  />
                  <ResultItem
                    fieldName='Eyepatch:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.eyepatch
                    }
                  />
                  <ResultItem
                    fieldName='Eyepatch Color:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.eyepatchColor
                    }
                    colorResult
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading3'>Tweak Tattoo/Mark</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Position Vert.:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.tweakTattooMark.positionVert
                    }
                  />
                  <ResultItem
                    fieldName='Position Horiz.:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.tweakTattooMark.positionHoriz
                    }
                  />
                  <ResultItem
                    fieldName='Angle:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.tweakTattooMark.angle
                    }
                  />
                  <ResultItem
                    fieldName='Expansion:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.tweakTattooMark.expansion
                    }
                  />
                  <ResultItem
                    fieldName='Flip:'
                    result={
                      results.detailedAppearance.alterFaceAndHair
                        .tattooMarkEyepatch.tweakTattooMark.flip
                    }
                  />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading2'>Alter Body</Heading>
                    <AccordionIcon fontSize='24px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <ResultItem
                    fieldName='Head:'
                    result={results.detailedAppearance.alterBody.head}
                  />
                  <ResultItem
                    fieldName='Chest:'
                    result={results.detailedAppearance.alterBody.chest}
                  />
                  <ResultItem
                    fieldName='Abdomen:'
                    result={results.detailedAppearance.alterBody.abdomen}
                  />
                  <ResultItem
                    fieldName='Arms:'
                    result={results.detailedAppearance.alterBody.arms}
                  />
                  <ResultItem
                    fieldName='Legs:'
                    result={results.detailedAppearance.alterBody.legs}
                  />
                  <ResultItem
                    fieldName='Body Hair:'
                    result={results.detailedAppearance.alterBody.bodyHair}
                  />
                  <ResultItem
                    fieldName='Body Hair Color:'
                    result={results.detailedAppearance.alterBody.bodyHairColor}
                    colorResult
                  />
                  <ResultItem
                    fieldName='Musculature:'
                    result={results.detailedAppearance.alterBody.musculature}
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
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
