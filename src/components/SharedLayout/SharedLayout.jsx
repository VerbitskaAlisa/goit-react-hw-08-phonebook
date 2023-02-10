import { Box, Container, Button, Divider, Flex, Spacer } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'redux/hooks/useAuth';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import { Suspense } from 'react';


export default function SharedLayout () {
    const { toggleColorMode } = useColorMode();
    const { isLoggedIn } = useAuth();
    return (
        <>
        <Box as="header">
            <Container maxW="container.xl" p="10">
                <Flex alignItems="center" mb="6">
                <Logo />
                <Spacer />
                {isLoggedIn ? <Navigation /> : ''}
                <Spacer />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
                <Spacer />
                <Button onClick={toggleColorMode} p='2' size='lg'>
                   <MoonIcon color="pink.500"/>
                 </Button>
                </Flex>
                <Divider />
            </Container>
        </Box>
        <Suspense fallback={null}>
        <Outlet />
        </Suspense>
        </>
    )
}