import { Box, FormControl, Input, Textarea, Button, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const ContactForm = () => {

  const { register, handleSubmit, formState:{ errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Box
      width="100%"
      borderRadius="sm"
      backgroundColor="white"
      color="gray.700"
    >
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
          <Input 
            marginTop="1.3rem"
            id="email"
            type="text"
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
          <Textarea
            marginTop="1.3rem"
            id="message"
            type="textarea"
            placeholder="Message"
            {...register("message", {required:true})}
          />
          {errors.message && (
            <Text fontSize="xs" color="red.400">{errors.message.type}</Text>
          )}           
        </FormControl>
        <Button
          type="submit"
          colorScheme="green"
          fontSize="xl"
          padding="2rem"
          marginTop="2rem"
        >
          Send Message
        </Button>
      </form>
    </Box>
  )
}

export default ContactForm;