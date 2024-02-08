import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import Links from "./Links";
import LinksMenu from './LinksMenu'
import useOrientationStore from "../../orientationStore";


const NavBar = () => {
  const {orientation} = useOrientationStore()
  
  return (
    <Flex mb={'20'} h={"20vh"} p={2} bg={'black'} justify={"space-between"} position={'relative'}>
      <Link href="/" h={'100%'}><Image h={'100%'} src="images/AnchorCorpsLogo.png" /></Link>
      {orientation == 'landscape' ? <Links /> : <LinksMenu/>}
      
    </Flex>
  );
};

export default NavBar;
