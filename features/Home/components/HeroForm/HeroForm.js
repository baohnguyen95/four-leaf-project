import { Box, Button, Checkbox, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form"

const Form = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Box
      width="100%"
      padding="2rem"
      borderRadius="md"
      backgroundColor="white"
      color="gray.700"
    >
      <Text fontSize="xl" fontWeight="bold">Free PDF Guide</Text>
      <Text fontSize="lg">Complete the form below to download your guide</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input 
            marginTop="1.3rem"
            id="name"
            type="text"
            placeholder="Name"
            {...register("name", {required:true})}
          />
          {errors.name && (
            <Text fontSize="xs" color="red.400">{errors.name.type}</Text>
          )}
          <Flex 
            gap={{base:"0", md:"1rem"}}
            flexDirection={{base:"column", md:"row"}}
          >
            <Input 
              marginTop="1.3rem"
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {required:true})}
            />
            {errors.email && (
              <Text fontSize="xs" color="red.400">{errors.email.type}</Text>
            )}
            <Input 
              marginTop="1.3rem"
              id="phone"
              type="text"
              placeholder="Phone"
              {...register("phone", {required:true})}
            />
            {errors.phone && (
              <Text fontSize="xs" color="red.400">{errors.phone.type}</Text>
            )}
          </Flex>
        </FormControl>
        <Button 
          type="submit" 
          colorScheme="green" 
          width="100%"
          fontSize="xl"
          padding="2rem"
          marginTop="2rem"
        >
          Download Now
        </Button>
      </form>
    </Box>
  )
}

export default Form;