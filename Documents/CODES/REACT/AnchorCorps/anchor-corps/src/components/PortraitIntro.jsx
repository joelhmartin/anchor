import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Box, Fade, Flex, Image, VStack, Text } from "@chakra-ui/react";
import ServicePreviewPortrait from "./services/ServicePreviewPortrait";

const PortraitIntro = () => {
  const [isIntro, setIsIntro] = useState(true);
  const ref = useRef();
  const tableRef = useRef();

  useEffect(() => {
    const introAnimation = () => {
      gsap.fromTo(
        ref.current,
        { transform: "rotateX(90deg)" },
        { duration: 2, ease: "power3.out", transform: "rotateX(0deg)" }
      );
      gsap.fromTo(ref.current, { opacity: 0 }, { duration: 3, opacity: 1 });

      gsap.to(ref.current, {
        duration: 1,
        delay: 3,
        scale: 0.7,
        opacity: 0.2,
        zIndex: 0,
      });
    };

    // Run the intro animation
    introAnimation();

    // Set a timeout to mark the end of the intro after 5 seconds (adjust as needed)
    const introTimeout = setTimeout(() => {
      setIsIntro(false); // Update state to indicate that the intro is over
    }, 3000); // 5000 milliseconds (5 seconds)

    // Clear the timeout when the component unmounts
    return () => clearTimeout(introTimeout);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  useEffect(() => {
    if (!isIntro) {
      gsap.to(tableRef.current, { duration: 2, opacity: 1 });
    }
  }, [isIntro]);

  return (
    <Box position={"relative"} backgroundColor={"black"} h={"81vh"} w={"100vw"}>
      <VStack
        opacity={0}
        zIndex={2}
        ref={tableRef}
        h={"80vh"}
        w={"100vw"}
        alignItems={"center"}
      >
        <ServicePreviewPortrait />
      </VStack>

      <Image
        zIndex={0}
        h={"60vh"}
        w={"100vw"}
        ref={ref}
        position={"absolute"}
        bottom={"15vh"}
        right={-2}
        className={"intro"}
        src="images/first-page-iso.png"
      />

      <Text className={"downArrow"}>↓</Text>
    </Box>
  );
};

export default PortraitIntro;
