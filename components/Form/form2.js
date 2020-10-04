import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const Form2 = () => {
  const { name, setName } = useState(null);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setName(data);
  };

  return (
    <div className="form1">
      <div className="form-text">
        <h1>What kind of patio door configuration do you need?</h1>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="form">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="username"
            defaultValue={name}
            ref={register({ required: true })}
            placeholder="Enter your name"
          />
          {errors.username && (
            <span className="font-weight-bold text-danger">
              This field is required
            </span>
          )}
        </Form.Group>
        <Button variant="danger" type="button">
          Next
        </Button>
      </Form>
    </div>
  );
};

export default Form2;
