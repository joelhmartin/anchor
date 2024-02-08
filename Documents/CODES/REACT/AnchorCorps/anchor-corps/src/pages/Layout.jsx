import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer"
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ContactModal from "../components/ContactModal";
import useOrientationStore from "../orientationStore";

const Layout = () => {
  const {orientation} = useOrientationStore()

  return (
    <>
      {/* CONSTANT STICKY NAV BAR */}
      <Box mb={'-10vh'} position={'sticky'} top={0} zIndex={1000} width={'100%'} >
        <NavBar />
      </Box>

      {/* DYNAMIC OUTLET FOR CONTENT */}
      <Outlet />

      {/* CONSTANTS */}
      <ContactModal/>
      <Footer/>
    </>
  );
};

export default Layout;
