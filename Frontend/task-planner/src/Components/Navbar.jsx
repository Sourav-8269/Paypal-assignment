import { Box, Button, Flex, IconButton, Link, Text, useColorMode,useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import AddTask from "../Pages/AddTask";
import Search from "../Pages/Search";

function Navbar() {
  const navigate=useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
    position="fixed"
    zIndex="999"
    top="0"
    w="100%"
     h="60px"
     px="50px"
     display="flex"
     justifyContent="space-between"
     alignItems="center"
    //  bg={useColorModeValue('gray.100', 'gray.900')}
     bg={colorMode === "light" ? "#03a9f4" : "rgb(33,33,33)"}
     >
     <Link style={{textDecoration:"none"}} onClick={()=>navigate("/")}><Text cursor="pointer" display={["block","block","block"]} fontFamily="sans-serif" fontSize="30px" fontWeight="bold" color={colorMode=="light"?"#2D3748":"#DD6B20"} >Task Planner</Text></Link>
   <Box display="flex" width="50%" justifyContent="flex-end" >
    <Box mr="4%">
      <Search color={colorMode === "light" ? "black" : "white"} />
    </Box>
    <AddTask/>
    <Button onClick={toggleColorMode} ml="4%" >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
    <Box >
  </Box>
 </Box>
    </Box>
  );
}
export default Navbar;