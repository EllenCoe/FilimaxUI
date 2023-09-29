import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const Root = () => (
  <ChakraProvider>
    <App />
  </ChakraProvider>
)

export default Root