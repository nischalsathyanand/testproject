import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  MessageHeader,
} from 'semantic-ui-react'
function LoginForm() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)
  const handleLogin = (event) => {
    event.preventDefault()
    const username = event.target[1].value
    const password = event.target[2].value
    if (username == 'nischal' && password == '1234') {
      console.log('authenticated')
      setAuthenticated(true)
    } else {
      console.log('error')
      setAuthenticated(false)
    }
  }
  if (authenticated) {
    return <Navigate to="/home" />
  }

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Login Page
        </Header>
        <Form size="large" onSubmit={handleLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="key"
              iconPosition="left"
              placeholder="API KEY"
              type="text"
            />

            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="USER NAME"
              type="password"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="PASSWORD"
              type="password"
            />
            <Form.Input
              fluid
              icon="key"
              iconPosition="left"
              placeholder="TOTP KEY"
              type="number"
            />

            <Button color="teal" fluid size="large" type="submit">
              Login
            </Button>
          </Segment>
          <Message negative hidden={!loginFailed}>
            <MessageHeader>Failed to login</MessageHeader>
            <p>Check you email or password</p>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm
