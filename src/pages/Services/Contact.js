import "./Contact.css"
import { send } from 'emailjs-com';
import { useState } from 'react'
import { InputGroup, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    subject: 'Choose...',
    email: '',
    message: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_6tk12ho',
      'template_lv8egs8',
      toSend,
      'N32l6UV7oSCfYSsCj'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-content">

      <div className="container">
        <div className="row align-items-stretch no-gutters contact-wrap">
          <div className="col-md-12">
            <div className="form h-100">
              <h3 className="contacth3">I Want To Hear From You</h3>
              <form className="contactform mb-5" onSubmit={onSubmit} id="contactForm" name="contactForm">
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label className="contact-col-form-label">Name *</label>
                    <input type="text" className="form-control contact" value={toSend.from_name} onChange={handleChange} name="from_name" placeholder="Your name" />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label className="contact-col-form-label">Email</label>
                    <input type="text" className="form-control contact" name="email" value={toSend.email}
                      onChange={handleChange} placeholder="Your email" />
                  </div>
                </div>

                <div className="row">
                  <Form.Group className="mb-3">
                    <Form.Label className="contact-col-form-label">Subject</Form.Label>
                    <Form.Select className="custom-select" name="subject" value={toSend.subject} onChange={handleChange}>
                      <option value="Choose.." disabled>Choose...</option>
                      <option>Suggestion</option>
                      <option>Comment</option>
                      <option>Question</option>
                      <option>Other</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group mb-3">
                    <label htmlFor="message" className="contact-col-form-label">Message *</label>
                    <textarea className="form-control contact pb-2 mb-2" name="message" value={toSend.message}
                      onChange={handleChange} cols="30" rows="4"
                      placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <input type="submit" value="Send Email" className="contact-btn btn-primary py-2 px-4" />
                  </div>
                </div>
              </form>



            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Contact;