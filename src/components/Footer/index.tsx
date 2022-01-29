import { Box, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { SocialMediaLinks } from './SocialMediaLinks'

export default function Footer(){
return(
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction={{ base: 'column-reverse', md: 'row' }}
        justifyContent="space-between"
        alignSelf={{ base: 'center' }}
      >
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: 'center' }} />
    </Stack>
  </Box>
 )
}
