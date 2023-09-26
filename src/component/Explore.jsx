import {
    Heading,    
    Text, 
    Box,
    Container,VStack
} from '@chakra-ui/react'
import bg12 from '../assets/explore.png'

export default function Explore(){
  return(
    <>
      <Box
      backgroundAttachment={'fixed'}
      backgroundColor="blackAlpha.600"
      backgroundImage={bg12}
      backgroundPosition="center"
      backgroundRepeat={'no-repeat'}
      backgroundSize="cover"
      >
      <VStack
        w={'full'}
        bgGradient={'linear(to-r, blackAlpha.700, blackAlpha.300)'}>
      <Box pt={'5%'} pb={'5%'}>
      <Box pt={14}pb={[0,14]} >
        <Container>
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            <Text fontWeight="700"  fontSize={['35','45']} color={'white'}>
              Our Approach
            </Text>
          </Heading>
        </Container>
      </Box>
      <Box px={'15%'}>
        <Text fontSize={'22px'} color={'white'}>
        At 9 Direction Studio, our approach to interior design is guided by three core principles:<br/><br/>

        1. <b>Inspiration</b>: We believe that inspiration can be found everywhere. Our design team draws inspiration from nature, culture, art, and the individuality of each client. We aim to create spaces that resonate with your spirit and stimulate your senses.<br/><br/>

        2. <b>Innovation</b>: Our commitment to innovation drives us to explore cutting-edge materials, technologies, and design trends. We blend traditional craftsmanship with modern techniques to deliver spaces that are both timeless and contemporary.<br/><br/>

        3. <b>Inclusivity</b>: We take pride in being a design studio that listens. We collaborate closely with our clients to understand their unique needs, preferences, and visions. Your ideas are an integral part of the design process, ensuring that the final result is a true reflection of your style.<br/><br/>

        </Text>
        </Box>
      

      
      
      <Box pt={14}pb={[0,14]}>
        <Container>
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            <Text fontWeight="700"  fontSize={['35','45']} color={'white'}>
              Our Service
            </Text>
          </Heading>
        </Container>
      </Box>
      <Box px={'15%'}>
        <Text fontSize={'22px'} color={'white'}>
        9 Direction Studio offers a comprehensive range of interior design services tailored to suit your residential and commercial needs:<br/><br/>

        1. <b>Residential Design</b>: Elevate your home with our expert residential design services. From cozy living rooms to luxurious bedrooms, we create spaces that radiate warmth and personality.<br/><br/>

        2. <b>Commercial Design</b>: Transform your business space into an inviting and functional environment that leaves a lasting impression on clients and employees alike.<br/><br/>

        3. <b>Hospitality Design</b>: We specialize in crafting memorable experiences for hotels, restaurants, and resorts. Our designs enhance guest satisfaction and promote brand loyalty.<br/><br/>

        4. <b>Retail Design</b>: Create visually stunning and practical retail spaces that drive foot traffic, engage customers, and boost sales.<br/><br/>

        5. <b>Interior Remodeling</b>: Whether it's a single room or an entire property, we breathe new life into existing spaces, maximizing their potential while preserving their character<br/><br/>
        </Text>

      </Box>
      <Box pt={14}pb={[0,14]}>
        <Container>
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            <Text fontWeight="700"  fontSize={['35','45']} color={'white'}>
            Why Choose Us?
            </Text>
          </Heading>
        </Container>
      </Box>
      <Box px={'15%'}>
        <Text fontSize={'22px'} color={'white'}>
        <b>Dedicated Team</b>: Our team of talented designers, architects, and craftsmen is committed to bringing your vision to life.<br/><br/>

         <b>Customized Solutions</b>: We don't believe in one-size-fits-all design. Each project is approached with fresh ideas and tailored solutions.<br/><br/>

         <b>Transparency</b>: We keep you involved at every stage of the design process, ensuring your project stays on track and within budget.<br/><br/>

         <b>Quality Assurance</b>: Our rigorous quality control measures ensure that every detail is perfected, from concept to completion.<br/><br/>

         <b>Sustainability</b>: We are committed to eco-friendly design practices, sourcing sustainable materials and promoting energy-efficient solutions.<br/><br/>

        </Text>

      </Box>
      <Box pt={14}pb={[0,14]}>
        <Container>
          <Heading as="h1" size="2xl" mb={8} textAlign="center">
            <Text fontWeight="700" fontSize={['35','45']} color={'white'}>
            Let's Create Together
            </Text>
          </Heading>
        </Container>
      </Box>
      <Box px={'15%'}>
        <Text fontSize={'22px'} color={'white'}>
        At 9 Direction Studio, we're excited to embark on a design journey with you. Whether you're seeking a complete home transformation, a modern office upgrade, or a unique commercial space, we're here to make your design dreams a reality. Contact us today to schedule a consultation and discover how we can bring your vision to life.<br/><br/>

        Your space, your story, our design – 9 Direction Studio.
        </Text>

      </Box>
      </Box>
      </VStack>
      </Box>
    </>
  )
}