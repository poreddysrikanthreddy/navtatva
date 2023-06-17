import React, { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import Footer from "../../app/components/common/Footer";
import Header from "../../app/components/common/Header";
import { RupifiUCService } from "../../network/gateway/RupifiUCService";
import { Cart } from "../../network/gateway/Cart";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import { NextPage } from "next";

interface iProps {}

const Cancel: NextPage = (props: any) => {
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
    if (authStatus == "CANCELLED") {
      updateOrder();
    }
    return () => {};
  }, [authStatus]);

  useEffect(() => {
    Cart.regenrateCustomerCartAssociation();
    return () => {};
  }, []);


  const updateOrder = async () => {
    let customer_id: any = LocalStorageService.getCustomerId();
    RupifiUCService.getInstance("")
      .cancelPayment({
        merchantCustomerRefId: customer_id,
        ...rupifiResponse
      })
      .then((response: any) => {
        if (response?.status == 200) {
          // do something
        } else {
          console.log("ERROR:", response?.data);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <section className="thankYou text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="fs-40 font-b text-color-2 list-inline-item">
              Thanks For Shopping With Us
            </h1>
            <p className="fs-20 font-m text-color-1 mt-3">
              Your Order has been Cancelled
            </p>
            <div style={{ marginBottom: 400 }}>
              <a href="/shop" className="btn mt-3">
                Shop Now!
              </a>
            </div>
            <br />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default withRouter(Cancel);
