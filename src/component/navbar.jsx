import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Link,
  useDisclosure,
  Button,
  Stack,
  Image,
  IconButton
} from "@chakra-ui/react";
import logo from '../assets/logo.jpg'

function Navbar() {
  
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      height='73px'
      position="fixed"
      top={['0' , '0']}
      left={["0",'0']}
      right={["0",'0']}
      zIndex="999"
      bg="#3D0C11"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      border='1px'
      p="2"
    >
      <Flex maxW="6xl" mx="auto" alignItems="center">
        {/* <Link href="/"><Image src={logo} height='50px' /></Link> */}
        <Spacer />
        <Stack
          spacing={4}
          isInline
          align="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="Explore" ><Button bg={"transparent"}color='white' _hover={{bg:'transparent'}}>Explore More</Button></Link>
          <Link href="Explore" ><Button bg={"transparent"}color='white' _hover={{bg:'transparent'}}>About Us</Button></Link>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'black'}
            bg={'white'}
            href={'#'}
            _hover={{
              bg: '#1D2939',
              color:'white'
            }}>
            Contact Us
          </Button>
        </Stack>
        <IconButton
          display={{ base: "inline-block", md: "none" }}
          variant="ghost"
          onClick={onToggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          color={'white'}
        />
        
      </Flex>
    </Box>
  );
}

export default Navbar;