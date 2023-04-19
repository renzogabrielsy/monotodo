import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Spacer,
  Text,
  Divider,
} from "@chakra-ui/react";

import {
  DeleteIcon,
  EditIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { FaItalic } from "react-icons/fa";

type Props = {};

export default function ToDoItem() {
  return (
    <AccordionItem width="17em">
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            Task Title
          </Box>
          <AccordionIcon margin={2} />
          <CheckIcon margin={2} />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} fontSize="1rem">
        <Divider />
        <Flex
          justify="space-evenly"
          align="center"
          direction="row"
          padding={1}
          height="2em"
        >
          <Flex justify="space-between">
            <Text fontSize="2xs" fontWeight="bold">
              Date Added:
            </Text>
            <Text
              fontSize="2xs"
              fontWeight="medium"
              fontStyle="italic"
              marginLeft={2}
            >
              1/1/20
            </Text>
          </Flex>
          <Divider orientation="vertical" />
          <Flex direction="row">
            <Text fontSize="2xs" fontWeight="bold">
              Date Due:
            </Text>
            <Text
              fontSize="2xs"
              fontWeight="medium"
              fontStyle="italic"
              marginLeft={2}
            >
              1/1/20
            </Text>
          </Flex>
        </Flex>
        <Divider />
        <Flex align="row" maxWidth="19em">
          <ChevronRightIcon margin={2} />
          <Flex>
            <Flex
              fontStyle="italic"
              fontSize="smaller"
              textAlign="start"
              wrap="wrap"
              justify="flex-start"
            >
              Task Detailss lfsda ljfal jsljfdasljfa jdshfjaslhf alhf alhj
            </Flex>
            <Spacer />
            <Flex flex="flex-end">
              <EditIcon margin={2} />
              <DeleteIcon margin={2} />
            </Flex>
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}
