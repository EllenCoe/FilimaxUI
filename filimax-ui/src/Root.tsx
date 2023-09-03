import { ChakraProvider } from '@chakra-ui/react'
import App from './App'

const Root = () => (
  <ChakraProvider>
    <App />
  </ChakraProvider>
)

export default Root