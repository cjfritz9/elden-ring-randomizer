import React, { useState } from 'react';
import { Button, Container, Flex, Heading, Stack } from '@chakra-ui/react';
import SwitchOption from './SwitchOption';

const Randomizer: React.FC = () => {
  const [appState, setAppState] = useState<'options' | 'results'>('options');
  const [eyepatchOption, setEyepatchOption] = useState(true);
  const [bigEyesOption, setBigEyesOption] = useState(true);
  const [originOption, setOriginOption] = useState(true);
  const [keepsakeOption, setKeepsakeOption] = useState(true);

  return (
    <Container
      minW='100%'
      m='0'
      px={['1rem', '2rem', '3rem', '4rem', '6rem', '12rem']}
      py={['2rem', '2rem', '3rem', '3rem', '4rem', '6.5rem']}
    >
      {appState === 'options' ? (
        <Stack w='100%' align='center'>
          <Heading
            w='100%'
            fontSize='56px'
            fontWeight='400'
            textAlign='center'
            fontFamily='Cormorant Garamond'
            textShadow='0 0 3px #122244'
          >
            ELDEN RING CHARACTER RANDOMIZER
          </Heading>
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
      ) : appState === 'results' ? (
        <Stack>
          <Heading
            w='100%'
            fontSize='56px'
            fontWeight='400'
            textAlign='center'
            fontFamily='Cormorant Garamond'
            textShadow='0 0 3px #122244'
          >
            YOUR HERO
          </Heading>
          <Flex>
            <Stack></Stack>
          </Flex>
        </Stack>
      ) : (
        <Stack>
          <Heading
            w='100%'
            fontSize='56px'
            fontWeight='400'
            textAlign='center'
            fontFamily='Cormorant Garamond'
            textShadow='0 0 3px #122244'
          >
            LOADING
          </Heading>
        </Stack>
      )}
    </Container>
  );
};

export default Randomizer;
