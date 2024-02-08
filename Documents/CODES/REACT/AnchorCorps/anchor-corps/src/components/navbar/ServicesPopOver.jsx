import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./service-nav.css";

const ServicesPopOver = ({ setIsHovered, isHovered }) => {
  const ref = useRef();

  useEffect(() => {
    const width = ref.current.getBoundingClientRect().width;

    if (isHovered) {
      gsap.to(ref.current, { duration: .8, right: 0 });
    } else {
      gsap.to(ref.current, { duration: .5, right: `-${width}px` });
    }
  }, [isHovered]);

  return (
    <Flex
      ref={ref}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      textColor={"black"}
      bg={"white"}
      position={"absolute"}
      right={'-100%'}
      bottom={0}
      paddingX={5}
      paddingY={2}
      borderTopLeftRadius={12}
      borderBottomLeftRadius={12}
    >
      <ul className="service-nav">
        <li className="service-list-item">
          <a className="service-link" href="#">
            BRAND BUILDING
          </a>
        </li>
        <li className="service-list-item">
          <a className="service-link" href="#">
            HOME SERVICES
          </a>
        </li>
        <li className="service-list-item">
          <a className="service-link" href="#">
            MARKETING STRATEGIES
          </a>
        </li>
        <li className="service-list-item">
          <a className="service-link" href="#">
            TMJ MARKETING
          </a>
        </li>
        <li className="service-list-item">
          <a className="service-link" href="#">
            VIDEO PRODUCTION
          </a>
        </li>
        <li className="service-list-item">
          <a className="service-link" href="#">
            WEB DEVELOPMENT
          </a>
        </li>
      </ul>
    </Flex>
  );
};

export default ServicesPopOver;
