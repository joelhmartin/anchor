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
  SimpleGrid,
  Box,
  Flex,
  VStack,
  Text,
  Spacer,
  Button,
  Fade,
} from "@chakra-ui/react";
import gsap from "gsap";

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

const ServiceCard = (data, mottoRef) => {
  const [isHovered, setIsHovered] = useState();
  const titleContainerRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();

  const entry = data.entry;

  const handleHover = (event) => {
    setIsHovered(true);

    const width = titleRef.current.offsetHeight;
    const containerWidth = titleContainerRef.current.offsetHeight;

    gsap.to(titleContainerRef.current, {
      duration: 1,
      y: "-140%",
      rotate: "-90deg",
    });
    gsap.to(textRef.current, { duration: 1, opacity: 1 });
    gsap.to(titleRef.current, {
      duration: 1,
      y: `${(containerWidth - width) / 2}px`,
    });
    gsap.to(mottoRef.current, { duration: 1, opacity: 0 });
  };
  const handleHoverOut = () => {
    setIsHovered(false);
    gsap.to(titleContainerRef.current, {
      duration: 1,
      y: 0,
      rotate: "0deg",
      x: "0%",
    });
    gsap.to(titleRef.current, { duration: 1, y: "0%" });
    gsap.to(textRef.current, { duration: 1, opacity: 0 });
  };

  return (
    <VStack
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      position={"relative"}
      h={"80%"}
      className="article group"
    >
      <Flex flexDir={"column"} h={"50%"} className="num">
        <Spacer />
        <Text pb={4} fontSize={50}>
          {entry.icon}
        </Text>
      </Flex>
      <VStack
        ref={textRef}
        h={"50%"}
        w={"90%"}
        opacity={0}
        className="title-container"
      >
        <Text
          textAlign={"center"}
          lineHeight={4}
          fontSize={12}
          className="title"
        >
          {entry.description}
        </Text>
        <Spacer />
        {isHovered ? (
          <Fade in={isHovered}>
            <Button w={"fit-content"}>Learn More</Button>
          </Fade>
        ) : (
          <Button w={"fit-content"} opacity={0}>
            Learn More
          </Button>
        )}
      </VStack>
      <Flex
        ref={titleContainerRef}
        position={"absolute"}
        bottom={0}
        pt={2}
        h={"50%"}
        w={"100%"}
        zIndex={10}
        align={"center"}
        background={"black"}
        className="stretch uppercase"
      >
        <Text ref={titleRef} textAlign={"left"} className="title">
          {entry.title}
        </Text>
      </Flex>
    </VStack>
  );
};

const ServicePreview = () => {
  const mottoRef = useRef();

  return (
    <>
      <Text
        ref={mottoRef}
        letterSpacing={3}
        fontSize={"xxx-large"}
        textColor={"white"}
        textAlign={"center"}
        pl={"10vw"}
        mt={"15vh"}
        w={"50%"}
      >
        WHAT WE DO
      </Text>

      <SimpleGrid
        pl={"4vw"}
        w={"50vw"}
        minChildWidth="90px"

        columns={4}
      >
        {entries.map((entry, index) => (
          <Box key={index}>
            <ServiceCard entry={entry} mottoRef={mottoRef} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ServicePreview;
