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

type Props = {
  inDate: any;
  dueDate: any;
  taskName: string;
  taskDesc: string;
};

export default function ToDoItem({
  inDate,
  dueDate,
  taskName,
  taskDesc,
}: Props) {
  return (
    <AccordionItem width="16em">

        <Flex align="center">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text fontSize="0.8em">{taskName}</Text>
            </Box>
            <AccordionIcon margin={0} />
          </AccordionButton>
          <CheckIcon fontSize="xs" margin={2} />
        </Flex>

      <AccordionPanel pb={2} fontSize="1rem">
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
              {inDate}
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
              {dueDate}
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
              {taskDesc}
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
