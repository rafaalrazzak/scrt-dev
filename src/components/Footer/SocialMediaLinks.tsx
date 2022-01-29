import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://instagram.com/rafa.ar.id" aria-label="Instagram" icon={<FaInstagram fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/raf-ar" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
  </ButtonGroup>
)
