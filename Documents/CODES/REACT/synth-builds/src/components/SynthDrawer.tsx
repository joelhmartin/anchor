import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { MutableRefObject, useRef } from "react";
import { Patch } from "../hooks/usePatches";

// Define the interface for the patch object
interface Props {
  patch: Patch;
}

function SynthDrawer({ patch }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef() as MutableRefObject<HTMLButtonElement>;

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        View Patch
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{patch.song}</DrawerHeader>

          <DrawerBody>
            {/* PUT DESCRIPTION HERE */}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Check it out</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SynthDrawer;
