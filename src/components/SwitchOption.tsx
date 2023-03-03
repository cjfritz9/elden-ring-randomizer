import React, { useState } from 'react';
import {
  Flex,
  Switch,
  Icon,
  Text,
  Box,
  Tooltip,
  useMediaQuery
} from '@chakra-ui/react';
import { SwitchOptionProps } from '../models/Props';
import { VscQuestion } from 'react-icons/vsc';

const SwitchOption: React.FC<SwitchOptionProps> = ({
  option,
  info,
  setOption,
  defaultIsChecked
}) => {
  const [isChecked, setIsChecked] = useState(defaultIsChecked);
  const [isInfoShowing, setIsInfoShowing] = useState(false);
  const [isLessThan768] = useMediaQuery(['(max-width: 768px)']);

  const handleChange = () => {
    setOption((prev: any) => !prev);
    setIsChecked((prev) => !prev);
  };

  const handleInfoDisplay = () => {
    setIsInfoShowing((prev) => !prev);
  };

  return (
    <Flex w='100%' justify='space-between' align='center'>
      <Tooltip label={info} fontFamily='Poppins' fontSize='16px'>
        <Text fontSize={['20px','24px','28px']} cursor='help' textShadow='0 0 2px #122244'>
          {option}
        </Text>
      </Tooltip>
      <Flex pos='relative' align='center' gap='.5rem'>
        <Switch
          size='md'
          colorScheme='yellow'
          isChecked={isChecked}
          onChange={handleChange}
        />
        {isLessThan768 && (
          <Flex>
            <Icon
              pt='1px'
              as={VscQuestion}
              fontSize='24px'
              cursor='pointer'
              color='#000000'
              onClick={handleInfoDisplay}
            />
            {isInfoShowing && (
              <Box
                top='24px'
                left='42px'
                pos='absolute'
                w='200px'
                bgColor='#111'
                color='#FFF'
                p='.5rem'
                zIndex={2}
                userSelect='none'
              >
                <Text>{info}</Text>
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default SwitchOption;
