import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  VStack,
  Spacer,
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
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          variant="outline"
        />
        <MenuList>
          <MenuItem as={"a"} icon={<FaPeopleGroup />} command="⌘T">
            ABOUT US
          </MenuItem>
          <MenuItem
            as={"a"}
            icon={<MdOutlineMiscellaneousServices />}
            command="⌘N"
          >
            Services
          </MenuItem>
          <MenuItem as={"a"} icon={<FaGratipay />} command="⌘⇧N">
            Pay My Bill
          </MenuItem>
          <MenuItem as={"a"} icon={<MdOutlineContactPhone />} command="⌘O">
            Contact
          </MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
    </VStack>
  );
};

export default LinksMenu;
