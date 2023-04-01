import { Box, Divider, Text } from "@chakra-ui/react";


const TextContentBox = ({ title, children }) => {
  return (
    <Box
      backgroundColor="#fff"
      padding="1.5rem"
      marginBottom="1rem"
    > 
      <Text 
        fontSize="1.5rem" 
        fontWeight="light" 
        color="grey.600"
        marginBottom="1.5rem"
      >
          {title}
      </Text>
      <Divider marginY="0.7rem"/>
      {children}
    </Box>
  )
}

export default TextContentBox;