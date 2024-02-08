import { Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import "./links.css";
import ServicesPopOver from "./ServicesPopOver";

const Links = () => {
  const [isHovered, setIsHovered] = useState();

  const [leaveDirection, setLeaveDirection] = useState(null);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left; // mouse position relative to the left edge
    const y = event.clientY - rect.top; // mouse position relative to the top edge

    // Check which edge the mouse is closest to
    if (x < 5) {
      setLeaveDirection("left");
    } else if (y < 5) {
      setLeaveDirection("top");
    } else if (x > rect.width - 5) {
      setLeaveDirection("right");
    } else if (y > rect.height - 5) {
      setLeaveDirection("bottom");
    }
  };

  const handleMouseLeave = () => {
    // Use the leaveDirection state to determine the edge the mouse left from
    if (leaveDirection === "bottom") {
      setLeaveDirection(null);
    } else {
      setLeaveDirection(null);
      setIsHovered(false);
    }
  };

  return (
    <>
      <Flex h="100%" alignItems="center" justifyContent="center">
        <nav>
          <ul className="navbar">
            <li className="navbar-item">
              <a className="navbar-link" href="/about">ABOUT US</a>
            </li>
            <div className="spacer"></div>
            <li className="navbar-item">
              <a className="navbar-link"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                href="/services"
              >
                SERVICES
              </a>
            </li>
            <div className="spacer"></div>
            <li className="navbar-item">
              <a className="navbar-link" href="/billpay">PAY MY BILL</a>
            </li>
            <div className="spacer"></div>
            <li className="navbar-item">
              <a className="navbar-link" href="/contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </Flex>
      <ServicesPopOver setIsHovered={setIsHovered} isHovered={isHovered} />
    </>
  );
};

export default Links;
