import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import OrderTakingAppTitle from "../../app/components/order-taking-app/OrderTakingAppTitle";
import { useRouter, withRouter } from "next/router";
import { OrderTakingAppService } from "../../network/gateway/OrderTakingAppService";

const OrderTakingAppSuccessScreen: NextPage = (props: any) => {
  const router = useRouter();
  const [authStatus, setAuthStatus] = useState<string>("");
  const [rupifiResponse, setRupifiResponse] = useState<any>({});

  useEffect(() => {
    if (!router.isReady) return;
    const query: any = router.query;
    setAuthStatus(query?.status);
    setRupifiResponse(query);
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (authStatus == "AUTH_APPROVED") {
      updateOrder();
    }
    return () => {};
  }, [authStatus]);

  const updateOrder = async () => {
    const requestJSON = {
      orderStatus: authStatus == "AUTH_APPROVED" ? "pending" : "cancelled",
      paymentStatus: authStatus == "AUTH_APPROVED" ? authStatus : "pending",
      rupifiResponse: rupifiResponse,
    };

    OrderTakingAppService.getInstance("")
      .updateOrder(requestJSON, props.router.query?.merchantPaymentRefId)
      .then((response: any) => {
        if (response?.status == 200) {
          // do something
        } else {
          console.log("ERROR:", response?.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="shoppingCart orderTakingApp">
        <div className="wrapper">
          <section className="cartItem mt-4 mt-md-5">
            <div className="row">
              <OrderTakingAppTitle />
            </div>
          </section>
          <section>
            <div className="row">
              <div className="col-lg-12 text-center">
                <br />
                <br />
                <h2
                  className="fs-32 font-b text-color-2 list-inline-item"
                  style={{
                    color: authStatus == "AUTH_APPROVED" ? "Green" : "Red",
                  }}
                >
                  Order {authStatus == "AUTH_APPROVED" ? "placed" : "cancelled"}
                </h2>
                <br />
                <br />
                <p>
                  Click{" "}
                  <a href="/order-taking-app" style={{ color: "Blue" }}>
                    here
                  </a>{" "}
                  to create new order.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default withRouter(OrderTakingAppSuccessScreen);
