import { Box, Input, InputGroup, InputRightElement, Button, Container, Heading, Divider,Text, Link, useColorMode } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import React from "react";
import { logIn } from "redux/auth/operations";
import { useDispatch } from "react-redux";

export default function Login () {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      const email = form.elements.email.value;
      const password = form.elements.password.value;
      dispatch(logIn({email, password}))
      form.reset();
    }

    return (
        <Box as="main">
            <Container maxW="container.xl" pt="30">
                <Box borderRadius="50" w="sm" m="auto" boxShadow="xl" p="12" backgroundColor={colorMode === "light" ? "white" : "#97266D"}>
                <Heading as='h3' size='xl' mb="4" textAlign="center">Login</Heading>
                    <Divider mb="6"/>
        <Box as="form" display="flex" flexDirection="column" alignItems="center" mb="4" autoComplete="off" onSubmit={handleSubmit}>
           <Input required name="email" type="email" variant='flushed' placeholder='Email' maxW="sm" focusBorderColor='pink.400'mb="8"/>
           <InputGroup size='md' maxW="sm" mb="8">
            <Input
               required
               focusBorderColor='pink.400'
               variant="flushed"
               name="password"
               pr='4.5rem'
               type={show ? 'text' : 'password'}
               placeholder='Enter password'
            />
           <InputRightElement width='4.5rem'>
           <Button h='1.75rem' size='sm' onClick={handleClick}>
               {show ? 'Hide' : 'Show'}
            </Button>
      </InputRightElement>
      </InputGroup>
      <Button colorScheme="pink" type="submit">Login</Button>
        </Box>
        <Text textAlign="center">Not a member?<Link as={ReachLink} to="/register" color={colorMode === "light" ? "#B83280" : "#521B41"} _hover={{borderBottom: "none"}} ml="2">Register</Link></Text>
        </Box>
        </Container>
        </Box>
    )
}