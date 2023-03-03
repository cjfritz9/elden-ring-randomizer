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
  Grid,
  Heading,
  Stack
} from '@chakra-ui/react';
import SwitchOption from './SwitchOption';
import RandomizerResults from '../models/Results';
import { fetchRandomName } from '../openai/api';
import { createChatPrompt, generateCharData } from '../utils/helpers';
import ResultItem from './ResultItem';
import NameOption from './NameOption';
import { getRandomName, nameList } from '../db/names';

const Randomizer: React.FC = () => {
  const [appState, setAppState] = useState<'options' | 'results'>('options');
  const [eyepatchOption, setEyepatchOption] = useState(true);
  const [bigEyesOption, setBigEyesOption] = useState(true);
  const [originOption, setOriginOption] = useState(false);
  const [keepsakeOption, setKeepsakeOption] = useState(false);
  const [results, setResults] = useState<RandomizerResults>();
  const [prompt, setPrompt] = useState<nameList>('fantasy');
  const [charName, setCharName] = useState<string>();
  const [fetchingName, setFetchingName] = useState(true);

  // const fetchNewName = async () => {
  //   setFetchingName(true);
  //   const name = await fetchRandomName(prompt);
  //   setCharName(name);
  //   setFetchingName(false);
  // };

  useEffect(() => {
    if (appState === 'results') {
      setCharName(getRandomName(prompt))
      setResults(
        generateCharData(
          originOption,
          keepsakeOption,
          eyepatchOption
          // bigEyesOption
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
              <AccordionItem>
                <AccordionButton>
                  <Flex w='100%' justify='space-between' align='center'>
                    <Heading variant='subheading'>Create Character</Heading>
                    <AccordionIcon fontSize='32px' />
                  </Flex>
                </AccordionButton>
                <AccordionPanel>
                  <Stack gap='1rem'>
                      <ResultItem fieldName='Name:' result={
                        // fetchingName ? 'loading' :
                          charName} />
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
