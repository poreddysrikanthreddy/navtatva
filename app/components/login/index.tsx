import React, { Component, useState } from "react";
import { Modal } from "react-bootstrap";
import { Auth } from "../../../network/gateway/Auth";
import Toast from "../../../utils/Toast";
import FormValidation from "../../../validation/form";
import useLoaderStore from "../../../zustand/loader";
import useUserStore from "../../../zustand/store";
import ValidationMessage from "../../constants/validationMessage";
import Register from "../register";

function Login(props: any) {
  const [signupMode, setSignupMode] = useState<boolean>(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const setUserInfo = useUserStore((state: any) => state.setUserInfo);
  const setLoginPopup = useUserStore((state: any) => state.showLogin);
  const enableLoader = useLoaderStore((state: any) => state.setShow);

  function isValidForm() {
    if (FormValidation.UserNamePassword({ email: email, password: password })) {
      enableLoader(true)
      let sellerObj = Auth.getInstance("");
      sellerObj
        .login({
          data: {
            token: "token",
            email: email,
            password: password,
          },
        })
        .then((response: any) => {
          if (response != "") {
            setUserInfo(setUserInfo);
            props.onSuccess(response);
            setLoginPopup(false);
          } else {
            Toast.showError(ValidationMessage.loginFailed);
          }
          enableLoader(false)
        })
        .catch((error) => {
          Toast.showError(error?.response?.data?.msg?.title ?? ValidationMessage.loginFailed);
          enableLoader(false)
        });
    }
  }

  return (
    <>
      {
        signupMode && <Register {...props} setSignupMode={setSignupMode} />
      }
      {
        !signupMode && (
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
                <div className="modal-content" >
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
                <div className="modal-content" >
                  <Modal.Body>
                    <div className="myform bg-white rounded">
                      <div style={{ paddingTop: 24 }}>
                        <h3 className="text-center">Login</h3>
                      </div>
                      <Modal.Body >
                        <form>
                          <div className="mb-3 mt-4" >
                            <label htmlFor="exampleInputEmail" className="form-label">
                              Email address <span className="star-red"> *</span>
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
                              Password <span className="star-red"> *</span>
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
                          </div>
                          <p className="text-end">Don't have an account? <a onClick={() => setSignupMode(true)}><b>Sign Up</b></a></p>  
                          <div className="text-center">
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                isValidForm();
                              }}
                              type="submit"
                              className="btn btn-light mt-3"
                            >
                              LOGIN
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

        )
      }
    </>
  );
}

export default Login;
