import '@fontsource/courier-prime';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Courier Prime', sans-serif`,
    body: `'Courier Prime', sans-serif`,
    p: `'Courier Prime', sans-serif`
  },
  Fade: {
    // Set the default duration for the Fade component
    baseStyle: {
      transitionDuration: "7s", // Set your desired duration
    },
  },
})

export default theme