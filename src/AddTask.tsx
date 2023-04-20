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
  Spacer,
} from "@chakra-ui/react";

export default function AddTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button margin={4} colorScheme="teal" onClick={onOpen}>
        {" "}
        Add New Task{" "}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size={{base: "xs", md: "md"}}>
        <ModalOverlay />
        <ModalContent fontFamily="Roboto Mono" >
          <ModalHeader>Add Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex marginTop={5} marginBottom={5} justify="space-between" direction="row" height="5em">
              <FormControl>
                <FormLabel>Date Added</FormLabel>
                <Input placeholder="Date Added" size={{base: "xs", md: "sm"}} type="date" />
                <FormHelperText fontSize="2xs">Input the task's date added.</FormHelperText>
              </FormControl>
              <Divider orientation="vertical" marginLeft={2} marginRight={2}/>
              <FormControl>
                <FormLabel>Date Due</FormLabel>
                <Input placeholder="Date Due" size={{base: "xs", md: "sm"}} type="date" />
                <FormHelperText fontSize="2xs">Input the task's date due.</FormHelperText>
              </FormControl>
            </Flex>

            <Divider marginBottom={4} />
            <FormLabel>Task</FormLabel>
            <Input placeholder="Task" />

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Input type description here..." />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Add Task
            </Button>
            <Button variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
