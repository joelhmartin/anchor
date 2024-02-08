import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
  Link,

  Spacer,
} from "@chakra-ui/react";
import { SiGooglemaps } from "react-icons/si";

const PortraitFooter = () => {
  return (
    <Flex flexDirection={'column'} w={"80%"} alignItems={'center'} justify={"space-evenly"}>
    <Image h={'15rem'} src="images/AnchorCorpsLogo.png" />

    {/* CARD */}
        <Heading textAlign={'center'}  p={10} size={"lg"}>Corporate Locations</Heading>

        <Flex justify={'space-between'} w={'100%'}>
          <HStack align={"left"}>
            <Link
              w={"fit-content"}
              href="https://www.google.com/maps/search/?api=1&query=1315+Walnut+St,+Philadelphia,+PA+19107"
              target="_blank"
            >
              <Flex gap={2} align={"center"}>
                <SiGooglemaps size={'40px'} color="#c31a21" />
                <Text>1315 Walnut St. Philadelphia, PA 19107</Text>
              </Flex>
            </Link>

            <Spacer/>

            <Link
              w={"fit-content"}
              href="https://www.google.com/maps/search/?api=1&query=221+Laurel+Rd,+Voorhees,+NJ+08043"
              target="_blank"
            >
              <Flex gap={2} align={"center"}>
                <SiGooglemaps size={'40px'} color="#c31a21" />
                <Text>221 Laurel Rd. Voorhees, NJ 08043</Text>
              </Flex>
            </Link>
          </HStack>
        </Flex>
    {/* END CARD */}
  </Flex>
  )
}

export default PortraitFooter