import React, { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import { NextPage } from "next";
import { Auth } from "../../../network/gateway/Auth";
import ValidationMessage from "../../../app/constants/validationMessage";
import Toast from "../../../utils/Toast";
import Permalink from "../../../utils/Permalink";

interface iProps { }

const VerifyToken: NextPage = () => {

    const router = useRouter();

    const { token } = router.query;

    const verifyNow= () => {
        let sellerObj = Auth.getInstance();
      sellerObj
        .verify({token})
        .then((response: any) => {
          if (response != "") {
            Toast.showSuccess(ValidationMessage.verificationSuccess);
            router.replace(Permalink.ofHomePage())
          } else {
            Toast.showError(ValidationMessage.verificationFailed);
          }
        })
        .catch((error: any) => {
          Toast.showError(error?.response?.data?.msg?.title ?? ValidationMessage.verificationFailed);
        });
    }

    return (
        <div>
            <section className="thankYou text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="fs-40 font-b text-color-2 list-inline-item">
                            Thanks for signup with us
                        </h1>
                        <p className="fs-20 font-m text-color-1 mt-3">
                            Complete e-mail verification to finish up your signup process.
                        </p>
                        <br />
                        <p>
                            <button 
                                 className="btn btn-primary"
                                onClick={ () => verifyNow()}
                            >Accept & verify</button>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default withRouter(VerifyToken);
