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
  Divider,
} from "@chakra-ui/react";
import useInputHook from "./hooks/useInputHook";

interface Props {
  addToDo: (
    newKey: number,
    newName: string,
    newDueDate: string,
    newDesc: string
  ) => void;
}

export default function AddTask(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newName, handleNameChange, resetName] = useInputHook("");
  const [newDueDate, handleDueDateChange, resetDueDate] = useInputHook("");
  const [newDesc, handleDescChange, resetDesc] = useInputHook("");
  return (
    <>
      <Button margin={4} colorScheme="teal" onClick={onOpen}>
        Add New Task
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "md" }}>
        <ModalOverlay />
        <ModalContent fontFamily="Roboto Mono">
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              props.addToDo(
                Date.now(),
                newName,
                newDueDate,
                newDesc
              );
            }}
          >
            <ModalBody>
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
                    size={{ base: "xs", md: "sm" }}
                    type="date"
                    value={newDueDate}
                    onChange={handleDueDateChange}
                  />
                  <FormHelperText fontSize="2xs">
                    Input the task's date due.
                  </FormHelperText>
                </FormControl>
              </Flex>
              <FormLabel>Task</FormLabel>
              <Input
                type="text"
                placeholder="Task"
                value={newName}
                onChange={handleNameChange}
              />
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
                  resetName();
                  resetDueDate();
                  resetDesc();
                }}
              >
                Add Task
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
