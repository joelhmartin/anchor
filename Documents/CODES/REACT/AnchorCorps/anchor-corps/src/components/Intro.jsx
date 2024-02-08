import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Box, Fade, Flex, Image, VStack, Text } from "@chakra-ui/react";
import ServicePreview from "./services/ServicePreview";

const Intro = () => {
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
        duration: 2,
        delay: 2,
        scale: 0.5,
        top: "9vh",
        right: "-10vw"
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

  return (
    <Box position={"relative"} backgroundColor={"black"} h={"81vh"} w={"100vw"}>
        <Fade in={!isIntro}>
          <VStack ref={tableRef} h={"80vh"} w={"100vw"} alignItems={"left"}>
            <ServicePreview />
          </VStack>
        </Fade>

        <Image
          h={"80vh"}
          w={"70vw"}
          ref={ref}
          position={"absolute"}
          bottom={0}
          right={'15%'}
          className={"intro"}
          src="images/first-page-iso.png"
        />

      <Text className={'downArrow'}>↓</Text>
    </Box>
  );
};

export default Intro;
