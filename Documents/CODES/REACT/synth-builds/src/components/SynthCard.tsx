import { Box, Card, CardBody, Heading, Text } from "@chakra-ui/react";
import SynthDrawer from "./SynthDrawer";
import synth from "../assets/images/synths/jx3p.jpg";
import { Patch } from "../hooks/usePatches";

// Define the interface for the patch object
interface Props {
  patch: Patch;
}

function SynthCard({ patch }: Props) {
  return (
    <div>
      <>
        <Box width="100%" borderRadius={10} overflow="hidden">
          <Card key={patch.id}>
            <img src={synth} />
            <CardBody>
              <Heading>{patch.song}</Heading>
              <Text marginBottom={3} whiteSpace="nowrap">
                {patch.synth}
              </Text>
              <SynthDrawer patch={patch} />
            </CardBody>
          </Card>
        </Box>
      </>
    </div>
  );
}

export default SynthCard;
