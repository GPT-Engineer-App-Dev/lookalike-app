import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Index = () => {
  return (
    <Flex height="100vh">
      <Sidebar />
      <MainContent />
    </Flex>
  );
};

export default Index;