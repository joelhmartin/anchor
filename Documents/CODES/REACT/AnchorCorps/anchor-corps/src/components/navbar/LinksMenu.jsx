import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  VStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaGratipay } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const LinksMenu = () => {
  return (
    <VStack px={6}>
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          colorScheme="red"
        >
          <GiHamburgerMenu/>
        </MenuButton>
        <MenuList>
          <MenuItem as={"a"} icon={<FaPeopleGroup />}>
            ABOUT US
          </MenuItem>
          <MenuItem as={"a"} icon={<MdOutlineMiscellaneousServices />}>
            Services
          </MenuItem>
          <MenuItem as={"a"} icon={<FaGratipay />}>
            Pay My Bill
          </MenuItem>
          <MenuItem as={"a"} icon={<MdOutlineContactPhone />}>
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
    </VStack>
  );
};

export default LinksMenu;
