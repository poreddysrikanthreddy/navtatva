import React, { useState } from "react";
import { OrderTakingAppService } from "../../../../network/gateway/OrderTakingAppService";
import { RupifiService } from "../../../../network/gateway/RupifiService";
import Toast from "../../../../utils/Toast";

const CapturePayment = ({ data }: any) => {
  const [paymentStatus, setPaymentStatus] = useState<string>(
    data?.paymentStatus
  );

  const handleCapturePayment = () => {
    if (confirm("Are you sure to capture payment?")) {
      const { _id, orderTotal } = data;

      let requestJSON = {
        amount: {
          value: orderTotal,
        },
        merchantCaptureRefId: _id,
        merchantPaymentRefId: _id,
      };

      RupifiService.getInstance("")
        .captureRupifiAmount(requestJSON)
        .then((response: any) => {
          if (response?.data) {
            setPaymentStatus(response?.data?.data?.status);
            Toast.showSuccess("Payment captured");
            const requestDATA = {
              orderStatus: "completed",
              paymentStatus: response?.data?.data?.status,
              rupifiResponse: response?.data?.data,
            };
            OrderTakingAppService.getInstance("")
              .updateOrder(
                requestDATA,
                response?.data?.data?.merchantPaymentRefId
              )
              .then((response: any) => {
                if (response?.status == 200) {
                  // do something
                } else {
                  console.log("ERROR:", response?.data);
                  Toast.showError(response?.data?.message);
                }
              })
              .catch((error: any) => {
                console.log(error);
              });
          } else {
            console.log("ERROR:", response?.data);
          }
        })
        .catch((error: any) => {
          console.log("error,", error);
          Toast.showError(error?.response?.data?.message);
        });
    }
  };

  return (
    <>
      {paymentStatus == "AUTH_APPROVED" && (
        <button className="btn btn-xs" onClick={() => handleCapturePayment()}>
          Capture Payment
        </button>
      )}
      {paymentStatus == "CAPTURED" && (
        <button className="btn btn-xs btn-green">Payment Captured</button>
      )}
    </>
  );
};

export default CapturePayment;
