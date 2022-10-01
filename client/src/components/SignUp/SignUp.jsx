import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { signupUser } from '../../redux/actions/userActions';

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Row>
      <Col>
        <br />
        <Form onSubmit={(e) => {
          console.log(Object.fromEntries(new FormData(e.target)));
          dispatch(signupUser(e, Object.fromEntries(new FormData(e.target))));
          navigate('/');
        }}
        >
          <FormGroup floating>
            <Input
              name="name"
              placeholder="Name"
              type="text"
              autoComplete="off"
              required
            />
            <Label for="exampleName">
              Имя
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="email"
              placeholder="Email"
              type="email"
              autoComplete="off"
              required
            />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            <Label for="examplePassword">
              Пароль
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="photo"
              placeholder="Photo"
              type="text"
              required
            />
            <Label>
              Фото
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="bday"
              placeholder="Birthday"
              type="date"
            />
            <Label>
              День Рождения
            </Label>
          </FormGroup>
          <FormGroup floating>
            <Input
              name="description"
              placeholder="Description"
              type="text"
            />
            <Label>
              Описание профиля
            </Label>
          </FormGroup>
          <Button>
            Зарегистрироваться
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
