import { Box, Container, keyframes, Text, Link, useColorMode, Button} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { useAuth } from 'redux/hooks/useAuth';


const animationTyping = keyframes`
   from {
    width: 0;
   }
`;

const animationBlinkCaret = keyframes`
    50% {
        border-color: transparent;
    }
`;

export default function Home () {
    const { isLoggedIn } = useAuth()
    const { colorMode } = useColorMode();
    const animation = `${animationTyping} 2s steps(13, end), ${animationBlinkCaret} 0.5s step-end infinite alternate`;
    return (<Box as="main">
        <Container maxW="container.xl" pt="40">
            <Text fontFamily="Droid Sans" 
                  fontSize={140} 
                  w="10.5ch" 
                  borderRight="4px" 
                  whiteSpace="nowrap" 
                  m="auto"
                  mb="6" 
                  overflow="hidden" 
                  animation={animation} 
                  p="0">WELCOME</Text>
                  {isLoggedIn ? '' : <Button display="flex" alignItems="center" borderRadius="50" size="lg" colorScheme="pink" m="auto"><Link as={ReachLink} to="/login" color={colorMode === "light" ? "white" : "black"} _hover={{borderBottom: "none"}}>Get started</Link></Button>}
            
        </Container>
    </Box>)
} 