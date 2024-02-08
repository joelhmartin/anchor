import { Box, HStack, Image } from "@chakra-ui/react";
import React from "react";
import useOrientationStore from "../../orientationStore";
import ServiceList from "./ServiceList";

const Services = () => {
  const { orientation } = useOrientationStore();
  return (
    <HStack backgroundColor={'white'}>
      <Image
        w={orientation == "landscape" ? "50%" : "100%"}
        src="images/vr.jpeg"
      />

      <Box w={"50%"} backgroundColor={'white'}>
        <ServiceList orientation={orientation} />
      </Box>

    </HStack>
  );
};

export default Services;
