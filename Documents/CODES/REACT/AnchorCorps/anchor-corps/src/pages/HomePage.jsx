import { Image } from "@chakra-ui/react";
import Services from "../components/services/Services";
import CustomSpacer from "../components/CustomSpacer";
import Intro from "../components/Intro";
import PortraitIntro from "../components/PortraitIntro";
import useOrientationStore from "../orientationStore";


const HomePage = () => {
  const {orientation} = useOrientationStore()

  return (
    <>
      {orientation == "landscape" ? <Intro /> : <PortraitIntro/>}
      
      <CustomSpacer />
      <Image src="images/Anchor-TMJ.jpg" />
      <CustomSpacer />
      <Image src="images/dental_on.jpg" />
      <CustomSpacer />
      <Image src="images/National_Brands-ON.png" />
      <CustomSpacer />
      <Image src="images/tull_on.png" />
      <CustomSpacer />
      <Image src="images/video_prod_on.jpg" />
    </>
  );
};

export default HomePage;
