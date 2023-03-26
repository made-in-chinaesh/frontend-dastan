import { ChakraProvider } from '@chakra-ui/react'

export const withChakra = (component: () => React.ReactNode) => () =>
	<ChakraProvider>{component()}</ChakraProvider>
