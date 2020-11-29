import { useState } from "react";
import { Button, notification } from "antd";

import axios from "axios";
import cx from "classnames";
import validator from "validator";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const contactForm = {
  name: { value: "", isValid: true, message: null },
  phone: { value: "", isValid: true, message: null },
  message: { value: "", isValid: true, message: null },
};

const formIsValid = (state, setState) => {
  const name = { ...state.name };
  const phone = { ...state.phone };
  const message = { ...state.message };
  let isGood = true;

  if (!validator.isLength(name.value, { min: 3, max: 100 })) {
    name.isValid = false;
    name.message = "Nama harus diantara 3 - 100 karakter";
    isGood = false;
  }

  if (validator.isEmpty(phone.value.toString())) {
    phone.isValid = false;
    phone.message = "No. WhatsApp tidak boleh kosong";
    isGood = false;
  }

  if (!validator.isLength(phone.value.toString(), { min: 3, max: 20 })) {
    phone.isValid = false;
    phone.message = "No. WhatsApp harus diantara 3 - 20 karakter";
    isGood = false;
  }

  if (!validator.isInt(phone.value.toString())) {
    phone.isValid = false;
    phone.message = "No. WhatsApp tidak valid";
    isGood = false;
  }

  if (!validator.isLength(message.value, { min: 3, max: undefined })) {
    message.isValid = false;
    message.message = "Pesan minimal 3 karakter";
    isGood = false;
  }

  if (!isGood) setState({ ...state, name, phone, message });
  return isGood;
};

const ContacUs = () => {
  const [loading, setLoading] = useState(false);
  const [contactUs, setContactUs] = useState(contactForm);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const data = {
      ...contactUs,
      [name]: {
        ...contactUs[name],
        value: value,
        isValid: true,
        message: null,
      },
    };

    setContactUs(data);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formIsValid(contactUs, setContactUs)) {
      const data = {
        name: contactUs.name.value,
        phone: contactUs.phone.value,
        message: contactUs.message.value,
      };

      setLoading(true);

      axios
        .post(`${process.env.NEXT_PUBLIC_API}/send-email`, data)
        .then((res) => {
          setLoading(false);
          notification["success"]({
            message: "Success",
            description: res.data.message,
            placement: "bottomRight",
          });
          setContactUs(contactForm);
        })
        .catch((err) => {
          setLoading(false);
          const errDetail = err.response.data.detail;
          if (typeof errDetail === "string") {
            notification["error"]({
              message: "Error",
              description: errDetail,
              placement: "bottomRight",
            });
          } else {
            const state = JSON.parse(JSON.stringify(contactUs));
            errDetail.map((data) => {
              const key = data.loc[data.loc.length - 1];
              if (state[key]) {
                state[key].value = state[key].value;
                state[key].isValid = false;
                state[key].message = data.msg;
              }
            });
            setContactUs(state);
          }
        });
    }
  };

  const { name, phone, message } = contactUs;
  const invalidName = cx({ "is-invalid": !name.isValid });
  const invalidNoWa = cx({ "is-invalid": !phone.isValid });
  const invalidMessage = cx({ "is-invalid": !message.isValid });

  return (
    <>
      <section>
        <Container>

          <Row className="justify-content-center">
            <Col lg={6} md={12}>
              <Card className="product-item border-0">
                <Card.Body>
                  <h2 className="text-center mb-4">Kontak Kami</h2>
                  <Form>
                    <Form.Group>
                      <Form.Label>Nama</Form.Label>
                      <Form.Control
                        name="name"
                        placeholder="Nama"
                        value={name.value}
                        className={invalidName}
                        onChange={onChangeHandler}
                        type="text"
                      />
                      {!name.isValid && (
                        <Form.Text className="text-muted fs-12 mb-n1 mt-0">
                          {name.message}
                        </Form.Text>
                      )}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>No. WhatsApp</Form.Label>
                      <Form.Control
                        name="phone"
                        placeholder="+62 8123456789"
                        value={phone.value}
                        className={invalidNoWa}
                        onChange={onChangeHandler}
                        type="text"
                      />
                      {!phone.isValid && (
                        <Form.Text className="text-muted fs-12 mb-n1 mt-0">
                          {phone.message}
                        </Form.Text>
                      )}
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Pesan</Form.Label>
                      <Form.Control
                        name="message"
                        placeholder="Pesan"
                        value={message.value}
                        className={invalidMessage}
                        onChange={onChangeHandler}
                        as="textarea"
                        rows={4}
                      />
                      {!message.isValid && (
                        <Form.Text className="text-muted fs-12 mb-n1 mt-0">
                          {message.message}
                        </Form.Text>
                      )}
                    </Form.Group>

                    <div className="text-center">
                      <Button
                        block
                        size="large"
                        type="danger"
                        className="px-5"
                        onClick={!loading && onSubmitHandler}
                      >
                        {loading ? (
                          <>
                            Mengirim
                            <i className="far fa-spinner fa-pulse ml-2" />
                          </>
                        ) : (
                          <>
                            Kirim
                            <i className="fal fa-paper-plane ml-2" />
                          </>
                        )}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        :global(.ant-notification) {
          z-index: 9999;
        }
        :global(.product-item){
          border-radius: 4px;
          background: #fff;
          cursor: pointer;
          box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
          transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        }

        :global(.product-item:hover){
          transform: scale(1.01);
          box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        }

        :global(.form-control::placeholder) {
          color: black;
          opacity: 0.3;
        }
      `}</style>
    </>
  );
};

export default ContacUs;
