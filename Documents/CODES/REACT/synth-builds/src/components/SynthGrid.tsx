import { SimpleGrid, Text } from "@chakra-ui/react";
import SynthCard from "./SynthCard";
import usePatches from "../hooks/usePatches";

const SynthGrid = () => {
  const { patches, error } = usePatches();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {patches.map((patch) => (
          <SynthCard key={patch.id} patch={patch} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default SynthGrid;
