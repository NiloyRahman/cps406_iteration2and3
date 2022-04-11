import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FcGoogle } from 'react-icons/fc'
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  ButtonGroup
  
} from '@chakra-ui/react'
function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/dashboard')
  }, [user, loading])
  return (
    
    <Container
      
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
      
    >
      <Stack spacing='8'
        boxShadow="lg"
        rounded="xl"
        flexDir="column"
        justifyContent="center">
        
        <Stack spacing='6'>
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading color='gray.700' marginTop='2rem' marginBottom='-1rem'>
              Welcome back.
            </Heading>
           </Stack>
        </Stack>
        <Box
          minW={{ base: "90%", md: "50px" }}
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing='7'>
            <Stack spacing='12'>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='E-mail Address'
                />
                <FormLabel htmlFor='email'>Password</FormLabel>
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder='Password'
                />
              </FormControl>
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultIsChecked>Remember me</Checkbox>
              <Button variant='link' colorScheme='blue' size='sm'>
                <Link to='/reset'>Forgot Password?</Link>
              </Button>
            </HStack>
            <Stack spacing='6'>

            <ButtonGroup marginTop={2.5} spacing={4}>
                <Button
                  borderRadius={5}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="inherit"
                  onClick={() => logInWithEmailAndPassword(email, password)}
                  fontSize="sm"

                >
                  Member Login
                </Button>

                <Button
                  borderRadius={5}
                  type="submit"
                  variant="solid"
                  colorScheme="yellow"
                  width="inherit"
                  fontSize="sm"

                >
                  Treasurer Login
                </Button>
                <Button
                  display="inline-flex"
                  borderRadius={5}
                  type="submit"
                  variant="solid"
                  colorScheme="green"
                  width="inherit"
                  fontSize="sm"
                >
                  Coach Login
                </Button>
              </ButtonGroup>
              
              <Center>
              <Box>
                New member?{" "}
                <Link color="blue.200" 
                to="/register"
                 >
                Sign up
                </Link>
                </Box>
              </Center>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
export default Login
