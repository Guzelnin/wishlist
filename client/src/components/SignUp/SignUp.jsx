import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { signupUser } from '../../redux/actions/userActions';

export default function SignUp() {
  const dispatch = useDispatch();
  return (
    <Row>
      <Col>
        <Form onSubmit={(e) => dispatch(signupUser(e, Object.fromEntries(new FormData(e.target))))}>
          <FormGroup floating>
            <Input
              id="exampleName"
              name="name"
              placeholder="Name"
              type="text"
            />
            <Label for="exampleName">
              Name
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
            />
            <Label for="examplePassword">
              Password
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="photo"
              placeholder="Photo"
              type="text"
            />
            <Label for="examplePassword">
              Photo
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="bday"
              placeholder="Birthday"
              type="text"
            />
            <Label for="examplePassword">
              Bday
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              id="examplePassword"
              name="description"
              placeholder="Description"
              type="text"
            />
            <Label for="examplePassword">
              Description
            </Label>
          </FormGroup>
          <Button>
            Signup
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
