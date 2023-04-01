import { Box, Fade, Text } from "@chakra-ui/react";
import HeroForm from "../HeroForm";

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{base:"110vh", md:"60vh"}}
        backgroundImage={`url('./hero/heroBg.jpeg')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
      >
        <Box 
          position="absolute" 
          width="100%" 
          height="100%" 
          opacity="0.85"
          backgroundColor="green.900"
        >
        </Box>
        <Box
          display="flex"
          flexDirection={{base:"column",md:"row"}}
          alignItems="center"
          justifyContent={{base:"flex-start",md:"space-between"}}
          maxWidth="1280px"
          position="absolute"
          color="white"
          fontWeight="light"
          left="0"
          right="0"
          bottom="0"
          top="0"
          margin="0 auto"
          padding="2rem"
        >
          <Box width={{base:"100%", md:"50%"}}>
            <Text 
              fontSize={{base:"4xl", md:"5xl"}}
              lineHeight="shorter"
              marginBottom="1.5rem"
            >
              Download out new <strong>Property Buying Guide</strong> today ...
            </Text>
            <Text
              fontSize={{base:"lg", md:"2xl"}}
            >
              A free PDF with out best secrets for evaluating a property purchase, calculating profit, and so much more
            </Text>
          </Box>
          <Box
            width={{base:"100%", md:"auto"}}
            marginTop={{base:"2rem", md:"0"}}
          >
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  )
}

export default HeroBanner;