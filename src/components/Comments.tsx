import {
  Box,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  useDisclosure,
  Collapse,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SubmitForm from "./SubmitForm";
import { useState } from 'react'
export default function Comments() {
  const [data, setData] = useState<any[]>()
  const refreshData = () => {
    Fetcher('messages').then((x: any) => setData(x))
  }
  const { isOpen, onToggle } = useDisclosure();
  const bgText = useColorModeValue("gray.50", "gray.700");
  const AllComments = () => {
    return (
      <>
        <Text fontFamily="Poppins" fontSize="md" p="2" backgroundColor={bgText}>
          All Comments:
        </Text>
        <Box
          maxW="xl"
          boxShadow="xs"
          p="3"
          w="full"
          rounded="xl"
          backgroundColor={useColorModeValue("gray.600", "gray.800")}
        >
          <Text color={useColorModeValue("gray.200", "gray.100")}>Hello</Text>
        </Box>
      </>
    );
  };
  return (
    <>
      <Stack spacing={4}>
        <Box maxW="xl" w="full">
          <Flex p={2} justify={"space-between"} align={"center"}>
            <Text
              fontFamily="Poppins"
              _hover={{
                cursor: "none",
                textDecoration: "none",
              }}
            >
              Comment
            </Text>
            {Comment && (
              <Icon
                onClick={onToggle}
                as={ChevronDownIcon}
                transition={"all .25s ease-in-out"}
                transform={isOpen ? "rotate(180deg)" : ""}
                w={6}
                h={6}
                _hover={{
                  cursor: "pointer",
                }}
              />
            )}
          </Flex>
          <Collapse
            in={isOpen}
            animateOpacity
            style={{ marginTop: "0!important" }}
          >
            <Stack
              p={2}
              borderLeft={1}
              borderStyle={"solid"}
              borderColor={useColorModeValue("gray.200", "gray.700")}
              align={"start"}
            >
              <SubmitForm refresher={refreshData} to="comment" dataMsg={data} />
              <AllComments />
            </Stack>
          </Collapse>
        </Box>
      </Stack>
    </>
  );
}
