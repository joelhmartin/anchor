import { Box, Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import logo from "./assets//images/logo.png";
import SynthGrid from "./components/SynthGrid";
import "./App.css";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <div className="bg-image">
      <Grid
        templateAreas={{
          base: `"header" "main"`,
          lg: `"header header" "nav main" "nav footer"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "1fr 3fr",
        }}
      >
        <GridItem pl="2" area={"header"}>
          <HStack>
            <Box boxSize={200}>
              <Image src={logo} />
            </Box>
          </HStack>
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          Nav
        </GridItem>
        <GridItem pl="2" area={"main"}>
          <SynthGrid />
        </GridItem>
        <GridItem pl="2" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
