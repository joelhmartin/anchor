import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { LuMousePointerClick } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { GiMegaphone } from "react-icons/gi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { IoNewspaperOutline } from "react-icons/io5";

import "./service.css";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Link,
} from "@chakra-ui/react";

const entries = [
  {
    icon: <IoNewspaperOutline />,
    title: "Content Marketing",
    description:
      "Strategically create and share valuable content to attract and retain a defined audience and drive profitable customer action.",
  },
  {
    icon: <IoShareSocialOutline />,
    title: "Social Media",
    description:
      "Leverage various social platforms to build and engage with an audience and promote products or services.",
  },
  {
    icon: <AiOutlineMail />,
    title: "Email Campaigns",
    description:
      "Create and send targeted messages to subscribers in order to achieve specific marketing goals.",
  },
  {
    icon: <LuMousePointerClick />,
    title: "Pay Per Click",
    description:
      "Advertising model in which advertisers pay each time a user clicks an ad, often used in search engine advertising.",
  },
  {
    icon: <TbSeo />,
    title: "S.E.O.",
    subtitle: "Search Engine Optimization",
    description:
      "Improve website visibility and ranking on search engine results pages through various techniques such as keyword optimization and link building.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight />,
    title: "Influencer Marketing",
    description:
      "Partner with influential people in a particular industry or niche to promote a brand, product, or service.",
  },
  {
    icon: <GiMegaphone />,
    title: "Advertising",
    description:
      "Promote products, services, or brands through paid channels such as display ads, social media ads, and search engine ads.",
  },
  {
    icon: <IoCloudDownloadOutline />,
    title: "Inbound Marketing",
    description:
      "Customer-focused approach to marketing that seeks to attract, engage, and delight customers by providing helpful and informative content.",
  },
];

const ServiceCard = (data) => {
  const entry = data.entry;

  return (
    <AccordionItem bg={"rgba(1,1,1,.5)"}>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              _expanded={{ bg: "rgba(1,1,1,1)", color: "white" }}
            >
              <Box as="span" fontWeight={"xl"} flex="1" textAlign="left">
                {entry.title}
              </Box>

              {!isExpanded ? (
                entry.icon
              ) : (
                <Link
                  sx={{ lineHeight: "1" }}
                  fontSize={"smaller"}
                  background={"#d91820"}
                  borderRadius={7}
                  noOfLines={2}
                  w={"20%"}
                  href="/"
                >
                  Learn More
                </Link>
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel bg={"rgba(1,1,1,1)"}>
            {entry.description}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const ServicePreview = () => {
  return (
    <>
      <Text
        letterSpacing={3}
        fontSize={"xxx-large"}
        textColor={"white"}
        textAlign={"center"}
        mt={"5vh"}
        w={"100%"}
      >
        WHAT WE DO
      </Text>

      <Accordion zIndex={2} w={"80vw"}>
        {entries.map((entry, index) => (
          <ServiceCard entry={entry} key={index} />
        ))}
      </Accordion>
    </>
  );
};

export default ServicePreview;
