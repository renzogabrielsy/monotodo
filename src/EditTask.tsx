import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  Input,
  Flex,
  useToast,
  IconButton,
} from "@chakra-ui/react";
import useInputHook from "./hooks/useInputHook";
import { EditIcon } from "@chakra-ui/icons";

interface Props {
  id?: number;
  dueDate?: string;
  taskName?: string;
  taskDesc?: string;
  completed?: boolean;
  editTodo: (
    todoID?: string,
    newTask?: string,
    newDate?: string,
    newDesc?: string,
    newCompleted?: boolean
  ) => void;
}

export default function EditTask(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newName, handleNameChange, resetName] = useInputHook(props.taskName);
  const [newDueDate, handleDueDateChange, resetDueDate] = useInputHook(
    props.dueDate
  );
  const [newDesc, handleDescChange, resetDesc] = useInputHook(props.taskDesc);
  const editAlert = useToast({
    title: "Task Edited",
    description: "Your task has been successfully edited!",
    status: "success",
    duration: 5000,
    isClosable: true,
  });
  return (
    <>
      <IconButton
        aria-label="Delete entry"
        size="xs"
        variant="outline"
        icon={<EditIcon />}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
        <ModalOverlay />
        <ModalContent fontFamily="Roboto Mono">
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.editTodo(
                props.id?.toString(),
                newName,
                newDueDate,
                newDesc,
                props.completed
              );
            }}
          >
            <ModalBody>
              <FormLabel>Task</FormLabel>
              <Input
                type="text"
                placeholder="Task"
                value={newName}
                onChange={handleNameChange}
              />
              <Flex
                marginTop={5}
                marginBottom={5}
                justify="space-between"
                direction="row"
                height="5em"
              >
                <FormControl>
                  <FormLabel>Date Due</FormLabel>
                  <Input
                    placeholder="Date Due"
                    size={{ base: "sm", md: "sm" }}
                    type="date"
                    value={newDueDate}
                    onChange={handleDueDateChange}
                  />
                  <FormHelperText fontSize="xs">
                    Input the task's date due.
                  </FormHelperText>
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Input type description here..."
                  value={newDesc}
                  onChange={handleDescChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                colorScheme="teal"
                mr={3}
                onClick={() => {
                  onClose();
                  editAlert();
                }}
              >
                Edit Task
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
