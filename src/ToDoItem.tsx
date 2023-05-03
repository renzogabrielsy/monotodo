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
  IconButton,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, ChevronRightIcon } from "@chakra-ui/icons";
import useToggleHook from "./hooks/useToggleHook";
import EditTask from "./EditTask";

type Props = {
  key: number;
  id: number;
  dueDate: any;
  taskName: string;
  taskDesc: string;
  completed: boolean;
  removeTodo: (todoID: number) => void;
  editTodo: (
    todoID: number,
    newKey: number,
    newID: number,
    newTask: string,
    newDate: string,
    newDesc: string,
    newCompleted: boolean
  ) => void;
};

export default function ToDoItem(props: Props) {
  const [toggleCheck, handleCheck, resetCheck] = useToggleHook(props.completed);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteAlert = useToast({
    title: "Task Deleted",
    description: "Your task has been successfully deleted.",
    status: "warning",
    duration: 5000,
    isClosable: true,
  });

  return (
    <>
      <AccordionItem width="16em" padding={1}>
        <Flex align="center">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text
                textDecoration={toggleCheck ? "line-through" : "none"}
                fontSize="0.8em"
              >
                {props.taskName}
              </Text>
            </Box>
            <AccordionIcon margin={1} />
          </AccordionButton>
          <Checkbox
            colorScheme="teal"
            isChecked={toggleCheck}
            marginRight={4}
            onChange={() => {
              handleCheck();
              console.log(!props.completed);
            }}
          />
          <IconButton
            aria-label="Delete entry"
            size="xs"
            variant="outline"
            icon={<DeleteIcon />}
            onClick={onOpen}
          />
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            size={{ base: "xs", md: "md" }}
          >
            <ModalOverlay />
            <ModalContent fontFamily="Roboto Mono">
              <ModalCloseButton />
              <ModalBody margin={5}>
                <Text textAlign="center">Are you sure you want to delete:</Text>
                <Text
                  margin={5}
                  textAlign="center"
                  fontStyle="italic"
                  fontWeight="bold"
                >
                  {props.taskName}
                </Text>
                <Text
                  textAlign="center"
                  fontSize="lg"
                  textColor="red.500"
                  fontWeight="bold"
                >
                  This action cannot be undone.
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="red"
                  mr={3}
                  onClick={() => {
                    onClose();
                    props.removeTodo(props.id);
                    deleteAlert();
                  }}
                >
                  Delete
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>

        <AccordionPanel pb={2} fontSize="1rem">
          <Divider variant="dashed" />
          <Flex
            justify="space-evenly"
            align="center"
            direction="row"
            padding={0}
            height="2em"
          >
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
                {props.dueDate}
              </Text>
            </Flex>
          </Flex>
          <Divider variant="dashed" marginBottom={2} />
          <Flex align="row" maxWidth="19em" justify="center">
            <ChevronRightIcon margin={2} />
            <Flex
              flex="initial"
              fontStyle="italic"
              fontSize="xs"
              textAlign="start"
              wrap="wrap"
              justify="flex-start"
              margin={2}
              textDecoration={toggleCheck ? "line-through" : "none"}
            >
              {props.taskDesc}
            </Flex>
            <Spacer />
            <Flex flex="flex-end" justify="center" align="center">
              <EditTask
                id={props.id}
                dueDate={props.dueDate}
                taskName={props.taskName}
                taskDesc={props.taskDesc}
                completed={props.completed}
                editTodo={props.editTodo}
              />
            </Flex>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}
