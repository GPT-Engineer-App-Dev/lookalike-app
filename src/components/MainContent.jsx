import { Box, Text } from "@chakra-ui/react";

const MainContent = () => {
  return (
    <Box flex="1" p={4}>
      <Text fontSize="2xl">Main Content Area</Text>
      <Text>Here you can display tasks or projects.</Text>
    </Box>
  );
};

export default MainContent;