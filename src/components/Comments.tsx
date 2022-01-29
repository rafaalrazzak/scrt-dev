import {
  Box,
  Flex,
  Text,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  Collapse,
  Stack
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import SubmitForm from './SubmitForm'

export default function Comments() {
  const { isOpen, onToggle } = useDisclosure()
  const bgText = useColorModeValue('gray.50', 'gray.700')
  const AllComments = () => {
    return (
      <>
        <Text fontFamily="Poppins" fontSize="md" p="2" backgroundColor={bgText}>
          All Comments:
        </Text>
        <Box
          maxW="xl"
          boxShadow="xs"
          w="full"
          p="3"
          rounded="xl"
          backgroundColor="gray.800"
        >
          <Text backgroundColor="gray.800" color={useColorModeValue('gray.600', 'gray.200')}>Hello</Text>
        </Box>
      </>
    )
  }
  return (
    <>
      <Stack spacing={4} onClick={onToggle}>
        <Flex
          p={2}
          as={Link}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none'
          }}
        >
          <Text
            fontFamily="Poppins"
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            Comment
          </Text>
          {Comment && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: '0!important' }}
        >
          <Stack
            p={2}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}
          >
            <SubmitForm refresher={'hello'} />
            <AllComments />
          </Stack>
        </Collapse>
      </Stack>
    </>
  )
}
