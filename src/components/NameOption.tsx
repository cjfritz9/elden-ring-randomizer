import React from 'react';
import {
  Divider,
  Link,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text
} from '@chakra-ui/react';
import { createChatPrompt } from '../utils/helpers';

const NameOption: React.FC<{ setOption: Function }> = ({ setOption }) => {
  const handleChange = (val: any) => {
    if (val === 25) {
      setOption('heroic');
    } else if (val === 50) {
      setOption('got');
    } else if (val === 75) {
      setOption('twitch');
    } else if (val === 100) {
      setOption('absurd');
    } else {
      setOption('fantasy');
    }
    console.log(val);
  };

  const markStyles = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    mt: '1rem',
    pb: '2rem'
  };

  return (
    <>
      <Divider />
      <Text fontSize='28px'>Name Theme</Text>
      <Link
        isExternal
        href='https://platform.openai.com/docs/api-reference/chat'
        fontSize='12px'
        fontFamily='Poppins'
        mt='0 !important'
        mb='.5rem !important'
        color='white'
      >
        Powered by ChatGPT
      </Link>
      <Slider
        w='88%'
        mb='2rem !important'
        colorScheme='yellow'
        defaultValue={0}
        max={100}
        step={25}
        onChange={(val) => handleChange(val)}
      >
        <SliderMark value={-6} {...markStyles}>
          Fantasy
        </SliderMark>
        <SliderMark value={21} {...markStyles}>
          Heroic
        </SliderMark>
        <SliderMark value={47} {...markStyles}>
          G.O.T.
        </SliderMark>
        <SliderMark value={71} {...markStyles}>
          Twitch
        </SliderMark>
        <SliderMark value={96} {...markStyles}>
          ???
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  );
};

export default NameOption;
