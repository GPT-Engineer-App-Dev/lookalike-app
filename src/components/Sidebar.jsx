import { Box, VStack, Text, Collapse, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const SidebarSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={4} bg="gray.700" color="white" cursor="pointer" onClick={() => setIsOpen(!isOpen)}>
        <Text fontSize="lg">{title}</Text>
        <IconButton
          icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          variant="ghost"
          color="white"
          aria-label="Toggle Section"
        />
      </Box>
      <Collapse in={isOpen}>
        <VStack align="start" p={4} bg="gray.800" color="white">
          {children}
        </VStack>
      </Collapse>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <Box width={{ base: "full", md: "250px" }} bg="gray.900" color="white" height="100vh" overflowY="auto">
      <SidebarSection title="Section 1">
        <Text>Item 1</Text>
        <Text>Item 2</Text>
      </SidebarSection>
      <SidebarSection title="Section 2">
        <Text>Item 3</Text>
        <Text>Item 4</Text>
      </SidebarSection>
    </Box>
  );
};

export default Sidebar;