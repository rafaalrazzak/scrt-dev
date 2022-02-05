import { FC, useState } from 'react'
import {
  Box,
  Textarea,
  Text,
  Button,
  VStack,
  FormControl,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { SubmitPost } from '../libs/fetchData'
import { IoSend } from 'react-icons/io5'

const SubmitForm: FC<{ refresher: any, to: any, dataMsg: any }> = ({ refresher, to, dataMsg }) => {
  const [msg, setMsg] = useState('')
  const [disabled, setDisabled] = useState(true)
  const clearState = () => {
    setMsg('')
  }
  const SubmitFunc = async () => {
    let data = await SubmitPost('messages', dataMsg)

    if ((data = '' || null)) {
      return
    } else {
      refresher()
      data != null ? setMsg('') : ''
      clearState()
    }
  }

  const updateValue = (e: any) => {
    setMsg(e.target.value)

    let eventMsg = e.target.value
    if (eventMsg != '' || null) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <>
      <Box w="full" my="4">
        <VStack spacing="4" align="start">
          <FormControl>
            <Textarea
              isRequired={true}
              mb="4"
              value={msg}
              onChange={updateValue}
              w="full"
              placeholder="Enter your message here...."
            />
            <Button
              rightIcon={<IoSend />}
              boxShadow="xs"
              isDisabled={disabled}
              onClick={SubmitFunc}
              size="md"
              rounded="lg"
            >
              Submit
            </Button>
          </FormControl>
        </VStack>
      </Box>
    </>
  )
}

export default SubmitForm
