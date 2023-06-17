import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";
import { Cart } from "../../network/gateway/Cart";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import useUserStore from "../../zustand/store";
import shallow from "zustand/shallow";
import Toast from "../../utils/Toast";
import { Address } from "../../network/gateway/Address";
import AddressList from "../../app/components/common/AddressList";
import OfferCard from "../../app/components/checkout/OfferCard";
import CheckoutCartItem from "../../app/components/checkout/CheckoutCartItem";
import PromoCode from "../../app/components/checkout/PromoCode";
import EmptyCart from "../../app/components/checkout/EmptyCart";
import CheckoutStepA from "../../app/components/checkout/CheckoutStepA";
import CheckoutStepC from "../../app/components/checkout/CheckoutStepC";
import CheckoutStepB from "../../app/components/checkout/CheckoutStepB";
import Validators from "../../utils/Validator";
import { useRouter } from "next/router";
import Spinner from "../../app/hoc/Spinner";
import { Auth } from "../../network/gateway/Auth";
import ValidationMessage from "../../app/constants/validationMessage";
import Loader from "../../app/components/loader/loader";
import constants from "../../app/constants/constant";
import useRazorpay from "react-razorpay";
import useLoaderStore from "../../zustand/loader";
import Permalink from "../../utils/Permalink";

const CheckoutScreen: NextPage = (props: any) => {
  const [openTab, setOpenTab] = useState<number>(1);
  // const { slug, id } = router.query;
  const router = useRouter();
  const [customerId, setCustomerId] = useState<string>("");
  const [customerData, setCustomerData] = useState<any>();
  const [showAddress, setShowAddress] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<any>([]);
  const [addressFields, setAddressFields] = useState<any>({
    type: "address",
    county: "India",
    country: "IN",
  });
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [allAddress, setAllAddress] = useState<any>([]);
  const isLogin = useUserStore((state: any) => state.isLogin, shallow);
  const setLoginPopup = useUserStore((state: any) => state.showLogin);
  const Razorpay = useRazorpay();
  const [rightCheckoutStatus, setRightCheckoutStatus] = useState(false);
  const enableLoader = useLoaderStore((state: any) => state.setShow);
  const [deleteAddressStatus, setDeleteAddressStatus] = useState(false);

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add("shoppingCart", "checkoutPage");
  });

  useEffect(() => {
    let customer_id: any = LocalStorageService.getCustomerId();
    setCustomerId(customer_id);
    return () => {};
  }, []);

  useEffect(() => {
    if (isLogin) {
      getCustomerCart();
    } else {
      setLoginPopup(true);
    }
  }, [isLogin]);

  function getCustomerData() {
    enableLoader(true);
    Auth.getInstance()
      .getCustomerData()
      .then((data: any) => {
        enableLoader(false);
        //console.log("this is  customer data",data)
        setCustomerData(data?.data);
      })
      .catch((error) => {
        enableLoader(false);
        setLoading(false);
      });
  }

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);

  function getCustomerCart() {
    enableLoader(true);
    // setLoading(true);
    Cart.getInstance()
      .getCustomerCart()
      .then((info: any) => {
        getAddress();
        setCartItems(info.data.data);
        setGrandTotal(info?.data.grandTotal);
        setLoading(false);
        enableLoader(false);
      })
      .catch((error) => {
        enableLoader(false);
        setLoading(false);
      });
  }
  function getAddress() {
    enableLoader(true);
    Address.getInstance()
      .getAllAddress()
      .then((data: any) => {
        setAllAddress(data?.data.data);
        setLoading(false);
        //console.log("this is all Address", data)
      })
      .catch((error) => {
        setLoading(false);
        enableLoader(false);
      });
  }
  const handleChange = (e: any) => {
    console.log("e", e.target.name);
    addressFields[e.target.name] = e.target.value;
    setAddressFields(JSON.parse(JSON.stringify(addressFields)));

    //  addressFields[e.target.name] = e.target.value;
  };
  function validateForm() {
    let formIsValid = true;
    if (!addressFields["first_name"]) {
      formIsValid = false;
      Toast.showError("Please enter your First Name.");
    } else if (!addressFields["last_name"]) {
      formIsValid = false;
      Toast.showError("Please enter your Last Name.");
    } else if (!addressFields["line_1"]) {
      formIsValid = false;
      Toast.showError("Please enter your Address.");
    } else if (!addressFields["city"]) {
      formIsValid = false;
      Toast.showError("Please enter your City.");
    } else if (!addressFields["postcode"]) {
      formIsValid = false;
      Toast.showError("Please enter your Postal Code.");
    } else if (!Validators.isNumberOnly(addressFields["postcode"])) {
      formIsValid = false;
      Toast.showError("Please enter valid Postal Code.");
    }
    return formIsValid;
  }

  function removeCart(id: any, index: any) {
    setDeleteAddressStatus(false);
    enableLoader(true);
    Cart.getInstance()
      .deleteCartItem(id)
      .then((response: any) => {
        if (response.statusText === "OK") {
          Toast.showSuccess(ValidationMessage.removedFromCart);
          // let newCartItem = cartItems;
          // newCartItem.splice(index, 1);
          // setCartItems([...newCartItem]);
         // enableLoader(false);
         getCustomerCart()
          setLoading(false);
        }
      })
      .catch((error) => {
        enableLoader(false);
        console.log("error", error);
        setLoading(false);
      });
  }

  function paymentMethod() {
    let validationFunction = validateForm();
    if (validationFunction) {
      setOpenTab(openTab == 3 ? 0 : 3);
    }
  }
  function test(data: any, all: any) {
    let addressStatus = true;
    Object.entries(all).map((item: any) => {
      if (
        item[1].first_name === data.first_name &&
        item[1].line_1 == data.line_1
      ) {
        return (addressStatus = false);
      }
    });
    return addressStatus;
  }
  function checkout(e: any) {
    e.preventDefault();

    const all = Object.assign({}, allAddress);
    const data = Object.assign({}, addressFields);
    let isDuplicateAddress = !test(data, all);
    if (isDuplicateAddress) {
      Toast.showError("*Address already exists.");
      return;
    }
    let validationFunction = validateForm();
    if (validationFunction) {
      if (!isDuplicateAddress) {
        addAddress();
      }
    }
  }

  function addAddress() {
    if (isLogin && validateForm()) {
      enableLoader(true);
      const param = {
        data: addressFields,
      };
      Address.getInstance()
        .addAddress(param)
        .then((data: any) => {
          setAllAddress([...allAddress, data.data.data]);
          enableLoader(false);
        })
        .catch((error) => {
          enableLoader(false);
          console.log("error", error);
        });
    } else {
      enableLoader(false);
      setLoginPopup(true);
    }
  }
  function deleteAddress(id: any, index: any) {
    enableLoader(true);
    Address.getInstance()
      .deleteAddress(id)
      .then((response: any) => {
        if (response.statusText === "OK") {
          enableLoader(false);
          let newAllAddress = allAddress;
          newAllAddress.splice(index, 1);
          setAllAddress([...newAllAddress]);
          if (newAllAddress.length === 0) {
            setShowAddress(false);
          }
        }
      })
      .catch((error) => {
        enableLoader(false);
        console.log("error", error);
      });
  }

  function checkoutApi(paymentType: string) {
    if (validateForm()) {
      enableLoader(true);
      const param = {
        data: {
          customer: {
            id: customerId,
          },
          billing_address: addressFields,
          shipping_address: addressFields,
        },
      };
      Cart.getInstance()
        .checkout(param, { grandTotal, paymentType })
        .then((response: any) => {
          console.log("checkout info", response.data);
          if (response.status) {
            LocalStorageService.clearCartItem();
          }
          if (response.status && paymentType == constants.PAYMENT_TYPE.COD) {
            enableLoader(false);
            router.push(
              Permalink.ofThankYou() +
                `?merchantPaymentRefId=${response?.data?.data?.id}`
            );
          }
          if (response.status && paymentType == constants.PAYMENT_TYPE.RUPIFI) {
            window.location.href = response?.data?.data?.paymentUrl;
          }
          if (response.status && paymentType == constants.PAYMENT_TYPE.RAZORPAY) {
            handleRZPPayment(response?.data);
          }
        })
        .catch((error) => {
          enableLoader(false);
          console.log("error", error);
        });
    }
  }

  
  const handleRZPPayment = async (orderData: any) => {
    
    const options: any = {
      key: "rzp_test_V2DBOcotB8xASu", // Enter the Key ID generated from the Dashboard
      amount: grandTotal*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: customerData?.data?.userDetails.name || "",
      description: "Manmandir order payment",
      image: process.env.HOST_NAME+"/images/logo.png",
      //order_id: orderData?.data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
      handler: function (response: any) {
        console.log("response",response)
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
        enableLoader(false)
        router.push(Permalink.ofThankYou() + `?merchantPaymentRefId=${orderData?.data?.id}`); 
      },
      prefill: {
        name: customerData?.data?.userDetails.name || "",
        email: customerData?.data?.userDetails.email || "",
        contact: customerData?.data?.businessDetails?.whatsapp_number || "",
      },
      notes: {
        address: `${addressFields.first_name} ${addressFields.last_name}, ${addressFields.line_1} ${addressFields.line_2} ${addressFields.city} - ${addressFields.postcode}`,
        order_id: orderData?.data?.id
      },
      theme: {
        color: "#b32028",
      },
    };
  
    const rzpay = new Razorpay(options);
  
    rzpay.on("payment.failed", function (response: any) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
      Toast.showError("Something went wrong. Please try again.")
    });
  
    rzpay.open();

  };

  return (
    <>
      <div className="wrapper">
        {/* Header */}
        <Header />
        {/* End Header */}
        <section className="cartItem  mt-4 mt-md-5">
          <h1 className="fs-40 font-b text-color-2 list-inline-item">
            Checkout
          </h1>
          <div className="row">
            <div className="col-md-12 col-lg-8 mt-4 order-2 order-lg-1">
              <div
                className={
                  "accordion  d-lg-block " +
                  (rightCheckoutStatus ? "" : "d-none")
                }
                id="accordionExample"
              >
                {cartItems?.length != 0 && (
                  <>
                    <CheckoutStepA
                      isLogin={isLogin}
                      setLoginPopup={setLoginPopup}
                      getCustomerData={getCustomerData}
                      customerData={customerData}
                    />
                    <CheckoutStepB
                      handleChange={handleChange}
                      onSave={checkout}
                      paymentMethod={paymentMethod}
                      addressFields={addressFields}
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      allAddress={allAddress}
                      setShowAddress={setShowAddress}
                      customerData={customerData}
                    />
                    <CheckoutStepC
                      customerId={customerId}
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      grandTotal={grandTotal}
                      onCheckout={checkoutApi}
                      customerData={customerData}
                    />
                    <AddressList
                      isVisible={showAddress}
                      data={allAddress}
                      onClose={() => {
                        setShowAddress(false);
                      }}
                      onSelect={(id: any) => {
                        setShowAddress(false);
                        setAddressFields(
                          JSON.parse(JSON.stringify(allAddress[id]))
                        );
                        setAddressFields(
                          JSON.parse(JSON.stringify(allAddress[id]))
                        );
                      }}
                      deleteAddress={deleteAddress}
                    />
                  </>
                )}
              </div>
            </div>
            {cartItems.length <= 0 && !loading && (
              <div className={`col-md-12 col-lg-12 mt-4`}>
                <div style={{ marginTop: "7%" }}>
                  <EmptyCart />
                </div>
              </div>
            )}
            {/* {loading && (
              <div className={`col-md-12 col-lg-12 mt-4`}>
                <div style={{ marginTop: "7%" }}>
                  <Loader loading={loading} />
                </div>
              </div>
            )} */}

            {cartItems?.length != 0 && (
              <div className="col-md-12 col-lg-4 order-1 order-lg-2">
                <div
                  className={
                    "d-flex flex-column right-checkout " +
                    (rightCheckoutStatus ? "d-none" : "")
                  }
                >
                  <OfferCard />
                  <CheckoutCartItem
                    cartItems={cartItems}
                    removeCart={removeCart}
                    grandTotal={grandTotal}
                    getCustomerCart={getCustomerCart}
                    setCartItems={setCartItems}
                    setDeleteAddressStatus={setDeleteAddressStatus}
                    deleteAddressStatus={deleteAddressStatus}
                  />
                  <PromoCode getCustomerCart={getCustomerCart} />

                  <button
                    className="btn order-4 d-lg-none checkout-btn fixed-bottom mx-3 btn-sm"
                    style={{ bottom: "15px" }}
                    onClick={() => {
                      setRightCheckoutStatus(!rightCheckoutStatus);
                    }}
                  >
                    Continue to Checkout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-arrow-up-right me-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CheckoutScreen;
