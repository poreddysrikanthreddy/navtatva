import React, { Component, useState } from "react";
import { Modal } from "react-bootstrap";
import { Auth } from "../../../network/gateway/Auth";
import Toast from "../../../utils/Toast";
import FormValidation from "../../../validation/form";
import useLoaderStore from "../../../zustand/loader";
import ValidationMessage from "../../constants/validationMessage";

function Register(props: any) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const enableLoader = useLoaderStore((state: any) => state.setShow);

  function isValidForm() {
    if (FormValidation.signup({ name, email, password })) {
      enableLoader(true)
      let sellerObj = Auth.getInstance("");
      sellerObj
        .register(
          {
            name,
            email,
            password,
          }
        )
        .then((response: any) => {
          if (response != "") {
            props.setSignupMode(false);
            Toast.showSuccess(ValidationMessage.signupSuccess);
          } else {
            Toast.showError(ValidationMessage.signupFailed);
          }
          enableLoader(false)
        })
        .catch((error: any) => {
          Toast.showError(error?.response?.data?.msg?.title ?? ValidationMessage.signupFailed);
          enableLoader(false)
        });
    }
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <Modal
        className="modal fade"
        show={props.visible}
        animation={true}
        size={"xl"}
        id="loginPopup"
        role="dialog"
      >
        <Modal.Dialog className="modal-dialog" role={"document"}>
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.onClose();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
          <div className="modal-content">
            <Modal.Body>
              <div className="myform bg-white rounded">
                <div style={{ paddingTop: 24 }}>
                  <h3 className="text-center">Sign up</h3>
                </div>
                <Modal.Body>
                  <form>
                    <div className="mb-3 mt-4">
                      <label htmlFor="inputName" className="form-label">
                        Full Name <span className="star-red">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        aria-describedby="nameHelp"
                        value={name}
                        onChange={(event: any) => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3 mt-4">
                      <label htmlFor="exampleInputEmail" className="form-label">
                        Email address <span className="star-red">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(event: any) => {
                          setEmail(event.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword"
                        className="form-label"
                      >
                        Password <span className="star-red">*</span> <i title="Password must contain at least 12 characters, ne upper case character, one lower case character & one special character." className="fas fa-info-circle" aria-hidden="true"></i>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword"
                        value={password}
                        onChange={(event: any) => {
                          setPassword(event.target.value);
                        }}
                      />
                      <div><small className="fs-8">Password must contain at least 12 characters, one upper case character, one lower case character & one special character.</small></div>
                      <p className="text-end">Already have an account? <a onClick={() => props.setSignupMode(false)}><b>Sign In</b></a></p>
                    </div>
                    <div className="text-center">
                    <button
                        type="reset"
                        className="btn btn-sm btn-danger mt-3"
                        onClick={() => {
                          setName("")
                          setEmail("")
                          setPassword("")
                        }}
                      >
                        RESET
                      </button>
                      {" "}
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          isValidForm();
                        }}
                        type="submit"
                        className="btn btn-sm btn-light mt-3"
                      >
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </Modal.Body>
              </div>
            </Modal.Body>
          </div>
        </Modal.Dialog>
      </Modal>
    </div>
  );
}

export default Register;
