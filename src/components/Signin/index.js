import React from 'react'
import { Container, Form, FormContent, FormInput, FormWrap, FromButton, FromH1, FromLabel, Icon, Text } from './SigninElements'

export default function SignIn() {
    return (
        <>
           <Container>
               <FormWrap>
                   <Icon to="/">Snades</Icon>
                   <FormContent>
                       <Form action="#">
                            <FromH1>Sign in to Your Account..</FromH1>
                            <FromLabel htmlFor="for">Email</FromLabel>
                            <FormInput type="email" required></FormInput>
                            <FromLabel htmlFor="for">Password</FromLabel>
                            <FormInput type="password" required></FormInput>
                            <FromButton type="submit">Continue</FromButton>
                            <Text>Forgot Password?</Text>
                       </Form>
                   </FormContent>
               </FormWrap>
            </Container> 
        </>
    )
}
