import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { ButtonMain } from "../ButtonMain";

export const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, "");
    setPhoneNumber(formattedValue);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div className='form-component-container'>
      <h2 className='form-header'>skontaktuj sie z nami przez formularz</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group
          controlId='validationCustom01'
          className='form-input input-name'
        >
          <Form.Control required type='text' placeholder='Name' />
          <Form.Control.Feedback type='invalid'>
            Please Enter name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className='form-input input-email'
          controlId='exampleForm.ControlInput1'
        >
          <Form.Control required type='email' placeholder='your email' />
          <Form.Control.Feedback type='invalid'>
            Please Enter email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='form-input input-number'>
          <Form.Control
            type='tel'
            value={phoneNumber}
            onChange={handleChange}
            placeholder='Enter number'
            pattern='[0-9]{9,}'
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please Enter phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className='form-input textarea-container'
          controlId='exampleForm.ControlTextarea1'
        >
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Enter text'
            required
          />
          <Form.Control.Feedback type='invalid'>
            Proszę wpisać treść wiadomości.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='form-input input-check'>
          <Form.Check
            required
            type='switch'
            id='custom-switch'
            label='Zapoznałem się z polityką prywatności'
            feedback='You must agree before submitting.'
            feedbackType='invalid'
          />
        </Form.Group>
        <Button type='submit' className='form-input form-button'>
          wyslij wiadomość
        </Button>
      </Form>
    </div>
  );
};
