import { FC, useState, useEffect } from 'react'
import {
  Container,
  Text,
  useColorModeValue,
  Divider,
  Stack
} from '@chakra-ui/react'
import Navbar from './Navbar'
import SubmitForm from './SubmitForm'
import Card from './Card'
import Footer from './Footer'
import Fetcher from '.././libs/fetchData'

const Layout: FC = () => {
  const [data, setData] = useState<any[]>()
  const bgText = useColorModeValue('gray.50', 'gray.700')
  useEffect(() => {
    refreshData()
  }, [])

  const refreshData = () => {
    Fetcher('messages').then((x: any) => setData(x))
  }
  return (
    <>
      <Container maxW="xl" my="4">
        <Navbar />
        <Text
          textAlign="center"
          backgroundColor={bgText}
          py="8"
          rounded="xl"
          w="full"
          fontSize="md"
          fontWeight="normal"
          letterSpacing="0.5px"
          fontStyle="italic"
        >
          Tell something you always want to say
        </Text>
        <Text fontFamily="Poppins" fontSize="md" my="4">
          Message
        </Text>
        <SubmitForm refresher={refreshData} to="message" dataMsg={data} />
        <Divider orientation="horizontal" w="full" my="8" />
        <Stack spacing="6" direction="column-reverse">
          {data ? (
            data.map(x => (
              <Card message={x.message} bgColor={bgText} />
            ))
          ) : (
            <Text>Loading..</Text>
          )}
        </Stack>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
