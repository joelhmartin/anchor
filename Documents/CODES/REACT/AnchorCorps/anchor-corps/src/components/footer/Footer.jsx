import React, { useEffect } from "react";
import "./footer.css";
import { Flex } from "@chakra-ui/react";
import useOrientationStore from "../../orientationStore";
import LandscapeFooter from "./LandscapeFooter";
import PortraitFooter from "./PortraitFooter";

const Footer = () => {
  const { orientation } = useOrientationStore();

  return (
    <Flex p={5} pb={'50px'} backgroundColor={"black"} justify={"center"}>
      {orientation == "landscape" ? <LandscapeFooter /> : <PortraitFooter />}
    </Flex>
  );
};

export default Footer;
