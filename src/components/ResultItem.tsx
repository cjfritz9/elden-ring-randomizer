import React from 'react';
import { Badge, Flex, Skeleton, SkeletonText, Text, Tooltip } from '@chakra-ui/react';
import { ResultItemProps } from '../models/Props';
import { RGB } from '../models/Results';

const ResultItem: React.FC<ResultItemProps> = ({
  fieldName,
  result,
  colorResult = false
}) => {
  if (colorResult && result && typeof result === 'object') {
    return (
      <Flex justify='space-between' align='baseline'>
        <Text>{fieldName}</Text>
        <Flex gap='.5rem'>
          <Tooltip fontFamily='Poppins' label='Red'>
            <Badge
              _hover={{ bgColor: 'black', color: 'white' }}
              cursor='default'
              variant='outline'
              bgColor='#00000040'
              py='4px'
              w='3rem'
              textAlign='center'
              fontSize='14px'
              fontFamily='Poppins'
              colorScheme='red'
            >
              {result.red}
            </Badge>
          </Tooltip>
          <Tooltip fontFamily='Poppins' label='Green'>
            <Badge
              _hover={{ bgColor: 'black', color: 'white' }}
              cursor='default'
              variant='outline'
              bgColor='#00000040'
              py='4px'
              w='3rem'
              textAlign='center'
              fontSize='14px'
              fontFamily='Poppins'
              colorScheme='green'
            >
              {result.green}
            </Badge>
          </Tooltip>
          <Tooltip fontFamily='Poppins' label='Blue'>
            <Badge
              _hover={{ bgColor: 'black', color: 'white' }}
              cursor='default'
              variant='outline'
              bgColor='#00000040'
              py='4px'
              w='3rem'
              textAlign='center'
              fontSize='14px'
              fontFamily='Poppins'
              colorScheme='blue'
            >
              {result.blue}
            </Badge>
          </Tooltip>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex justify='space-between' align='center'>
      <Text>{fieldName}</Text>
      {result && typeof result !== 'object' ? (
        
          result === 'loading' ?
          <Skeleton>
            <Text variant='randomOption'>NewNameGoesHere</Text> 
          </Skeleton>
         : <Text variant='randomOption'>{result}</Text> 

        
      ) : (
        <Tooltip
          label='You chose not to randomize this'
          fontFamily='Poppins'
          fontSize='16px'
        >
          <Text variant='randomOption'>N/A</Text>
        </Tooltip>
      )}
    </Flex>
  );
};

export default ResultItem;
