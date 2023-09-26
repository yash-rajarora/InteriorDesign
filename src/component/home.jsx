
import {
  Stack, Flex, Button, Text, VStack, useBreakpointValue,Box,Heading,GridItem,Container,SimpleGrid,Image,Grid
} from '@chakra-ui/react'
import bg1 from '../assets/bg1.jpg'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/6.png'
import img7 from '../assets/7.png'
import img8 from '../assets/8.png'
import img9 from '../assets/9.png'
import { Link } from 'react-router-dom'





export default function Home() {
  return (
    <>
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={bg1}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.700, blackAlpha.300)'}>
        <Stack maxW={'6xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={'65'}>
            Welcome to 9 Direction Studio
          </Text>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Where Dreams Meet Design
          </Text>
          <Stack direction={'row'} >
            <Link to='Explore'>
            <Button
              bg="#3D0C11"
              rounded={'xl'}
              color={'white'}
              _hover={{
                bg:"#3D0C11"
              }}
              >
              Explore More
            </Button>
            </Link>
            {/* <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    <Box height={'90vh'} pt={'10%'}>
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          {/* <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Vision
          </Text> */}
          <Heading>Our Vision</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          At 9 Direction Studio, our vision extends far beyond mere aesthetics. We envision a world where interior design becomes a transformative force, enriching the lives of individuals and communities alike. Our aim is to create spaces that tell compelling stories, evoke deep emotions, and inspire a sense of belonging. We seek to revolutionize the way people interact with their environments, fostering harmony, creativity, and well-being in every space we touch. Through innovative design, meticulous craftsmanship, and unwavering dedication, we aspire to leave a lasting legacy of beauty, functionality, and inspiration.
          </Text>
          
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    </Box>
    <Box>
      <Box pt={14}pb={[0,14]}>
        <Container>
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            <Text fontWeight="700" color={"Black"} fontSize={['35','45']}>
              Our Portfolio
            </Text>
          </Heading>
        </Container>
      </Box>
          <Box py={14} px={"17%"} textAlign="center">
            <Grid templateColumns={["repeat(3,1fr)","repeat(3, 1fr)"] } gap={'10'}>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img1} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img2} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img3} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img4} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img5} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img6} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img7} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img8} />
                </Box>
              </GridItem>
              <GridItem>
                <Box
                  as="div"
                  _hover={{ transform: "scale(1.1)" }}
                  _active={{ transform: "scale(0.9)" }}
                  transition="transform 0.3s"
                >
                  <Image src={img9} />
                </Box>
              </GridItem>
            </Grid>
          </Box>
    </Box>
    <Box>
    </Box>
  </>
  )

}
