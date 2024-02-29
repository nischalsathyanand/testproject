import React from 'react'
import { useState } from 'react'
import Order from './Order'
import Position from './Position'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Step,
  StepTitle,
  StepGroup,
  StepDescription,
  StepContent,
  Icon,
} from 'semantic-ui-react'

function Home() {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepClick = (index) => {
    setActiveStep(index)
  }

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image size="mini" src="" style={{ marginRight: '1.5em' }} />
            Stock Marketing
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '7em' }}>
        <StepGroup>
          <Step active={activeStep === 0} onClick={() => handleStepClick(0)}>
            <Icon name="money" />
            <StepContent>
              <StepTitle>Order</StepTitle>
              <StepDescription>Choose your order</StepDescription>
            </StepContent>
          </Step>

          <Step active={activeStep === 1} onClick={() => handleStepClick(1)}>
            <Icon name="payment" />
            <StepContent>
              <StepTitle>Position</StepTitle>
              <StepDescription>Update Your orders</StepDescription>
            </StepContent>
          </Step>
        </StepGroup>
        {activeStep === 0 && (
          <Segment>
            <Order handleStepClick={handleStepClick} />
          </Segment>
        )}
        {activeStep === 1 && (
          <Segment>
            <Position />
          </Segment>
        )}
      </Container>

      <Segment
        inverted
        vertical
        style={{ margin: '2em 0em 0em', padding: '2em 0em' }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 1" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 2" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Group 3" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Footer Header" />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image centered size="mini" src="/logo.png" />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  )
}

export default Home
