import "../../../i18next";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const ContactForm = () => {
  const { t } = useTranslation();
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
      <h2 className='form-header'>{t("contact.contactForm.formHeader")}</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group
          controlId='validationCustom01'
          className='form-input input-name'
        >
          <Form.Control
            required
            type='text'
            placeholder={t("contact.contactForm.name")}
          />
          <Form.Control.Feedback type='invalid'>
            {t("contact.contactFormError.name")}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className='form-input input-email'
          controlId='exampleForm.ControlInput1'
        >
          <Form.Control
            required
            type='email'
            placeholder={t("contact.contactForm.email")}
          />
          <Form.Control.Feedback type='invalid'>
            {t("contact.contactFormError.email")}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='form-input input-number'>
          <Form.Control
            type='tel'
            value={phoneNumber}
            onChange={handleChange}
            placeholder={t("contact.contactForm.number")}
            pattern='[0-9]{9,}'
            required
          />
          <Form.Control.Feedback type='invalid'>
            {t("contact.contactFormError.number")}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className='form-input textarea-container'
          controlId='exampleForm.ControlTextarea1'
        >
          <Form.Control
            as='textarea'
            rows={3}
            placeholder={t("contact.contactForm.message")}
            required
          />
          <Form.Control.Feedback type='invalid'>
            {t("contact.contactFormError.message")}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='form-input input-check'>
          <Form.Check
            required
            type='switch'
            id='custom-switch'
            label={t("contact.contactForm.check")}
            feedback={t("contact.contactFormError.check")}
            feedbackType='invalid'
          />
        </Form.Group>
        <Button type='submit' className='form-input form-button'>
          {t("contact.contactForm.button")}
        </Button>
      </Form>
    </div>
  );
};
