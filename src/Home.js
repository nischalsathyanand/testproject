import React from "react";
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
  Icon
} from "semantic-ui-react";

const Home = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          <Image size="mini" src="" style={{ marginRight: "1.5em" }} />
          Stock Marketing
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: "7em" }}>
      <StepGroup>
        <Step>
          <Icon name='truck' />
          <StepContent>
            <StepTitle>Shipping</StepTitle>
            <StepDescription>Choose your shipping options</StepDescription>
          </StepContent>
        </Step>

        <Step active>
          <Icon name='payment' />
          <StepContent>
            <StepTitle>Billing</StepTitle>
            <StepDescription>Enter billing information</StepDescription>
          </StepContent>
        </Step>

        <Step disabled>
          <Icon name='info' />
          <StepContent>
            <StepTitle>Confirm Order</StepTitle>
          </StepContent>
        </Step>
      </StepGroup>
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
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
              Extra space for a call to action inside the footer that could help
              re-engage users.
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
);

export default Home;
