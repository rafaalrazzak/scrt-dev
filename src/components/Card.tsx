import { FC } from 'react'
import { Box, Stack, Text, Divider } from '@chakra-ui/react'
import Comments from './Comments'
const Card: FC<{ message: string; bgColor: any; id: number }> = ({
  message,
  bgColor,
  id
}) => {
  return (
    <>
      <Box
        maxW="xl"
        boxShadow="xs"
        w="full"
        p="4"
        rounded="xl"
        backgroundColor={bgColor}
        key={id.toString()}
      >
        <Stack direction="column">
          <Text fontFamily="Poppins" fontSize="md" p="2">
            Message
          </Text>
          <Text fontFamily="Poppins" fontSize="sm" px="2">
            {message}
          </Text>
          <Divider orientation="horizontal" w="full" my="8" py="2" />
          <Comments />
        </Stack>
      </Box>
    </>
  )
}

export default Card
