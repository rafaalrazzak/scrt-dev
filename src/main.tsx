import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible';

ReactDOM.render(
  <ChakraProvider resetCSS>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
