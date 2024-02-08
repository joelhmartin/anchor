import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Divider,
  Textarea,
} from "@chakra-ui/react";
import useOrientationStore from "../orientationStore";

const ContactModal = () => {
  const { orientation } = useOrientationStore();

  let [value, setValue] = React.useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const OverlayOne = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
        size={"lg"}
        sx={{
          borderRadius: "0 12px 12px 0",
          writingMode: "vertical-rl",
          transform: `${
            orientation == "landscape" ? "rotate(180deg)" : "rotate(-90deg)"
          }`,
        }}
        bg={"red"}
        position={"absolute"}
        right={orientation == "landscape" ? "15px" : "50vw"}
        top={orientation == "landscape" ? "50vh" : "88vh"}
        zIndex={10000}
        h={"fit-content"}
      >
        CONTACT US
      </Button>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalOverlay />
        <ModalContent bg={'darkred'}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="email" />
              <FormHelperText>Nice to Meet You!</FormHelperText>
              <Divider p={3} />
              <FormLabel pt={3}>Email</FormLabel>
              <Input placeholder="johndoe@abc.com" type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
              <Divider p={3} />

              <FormLabel pt={3}>Phone</FormLabel>
              <Input placeholder="Phone" type="phone" />
              <FormHelperText>We won't bug you unless you ask</FormHelperText>
              <Divider p={3} />
              <FormLabel pt={3}>How Can We Help You?</FormLabel>
              <Textarea
                value={value}
                onChange={handleInputChange}
                placeholder="..."
                size="sm"
                pt={3}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
