import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const accordion = definePartsStyle({
 
})

const accordionTheme = defineMultiStyleConfig({
  variants: { accordion },
})

export default accordionTheme;