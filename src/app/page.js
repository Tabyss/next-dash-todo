import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function Home() {
  return (
    <main>
      <Grid
        p="2"
        gap="4"
        h="100%"
        templateAreas={`"header header"
          "nav main"`}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={"auto 1fr"}
      >
        <GridItem area={"header"}>
          <Header />
        </GridItem>
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"main"}>
          <Main/>
        </GridItem>
      </Grid>
    </main>
  );
}
