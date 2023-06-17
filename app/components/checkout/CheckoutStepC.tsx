import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TbCurrencyRupee } from "react-icons/tb";
import { Cart } from "../../../network/gateway/Cart";
import { RupifiUCService } from "../../../network/gateway/RupifiUCService";
import constants from "../../constants/constant";
import LocalStorageService from "../../../utils/storage/LocalStorageService";
import Toast from "../../../utils/Toast";

const CheckoutStepC = (props: any) => {
  const [customerId, setCustomerId] = useState<string>("");
  const [paymentTab, setPaymentTab] = useState<number>(0);
  const [eligibleForRupifi, setEligibleForRupifi] = useState<boolean>(false);
  const [availCod] = useState<boolean>(true);
  const [availCreditCard] = useState<boolean>(false);
  const [availUpi] = useState<boolean>(false);
  const [availRazorPay] = useState<boolean>(true);
  const [eligibilityData, setEligibilityData] = useState<any>(null);

  useEffect(() => {
    let customer_id: any = LocalStorageService.getCustomerId();
    setCustomerId(customer_id);
    //checkRupifiEligiblity();
    return () => { }
  }, [])

  function checkRupifiEligiblity() {
    let requestJSON = {
      merchantCustomerRefId: constants.PAYMENT_METHOD.RUPIFI.TEST_ACCOUNT ?? props.customerData?.data?.id,
      phone: constants.PAYMENT_METHOD.RUPIFI.TEST_ACCOUNT ?? props.customerData?.data?.businessDetails?.whatsapp_number,
      updateGMV: false,
    };
    RupifiUCService.getInstance("")
      .checkRupifiCreditEligibility(requestJSON)
      .then((response: any) => {
        if (response?.data) {
          setEligibleForRupifi(response?.data?.data?.isEligibleForTxn);
          setEligibilityData(response?.data?.data);
        } else {
          console.log("ERROR:", response?.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="accordion-item bgbar ms-0">
      <h2
        className="accordion-header"
        id="headingThree"
        onClick={() => props.setOpenTab(props.openTab == 3 ? 0 : 3)}
      >
        <button
          className="accordion-button font-sb collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          <span className="wordtype">C</span> PAYMENT METHOD
        </button>
      </h2>
      <div
        id="collapseThree"
        className={
          "accordion-collapse collapse " + (props.openTab == 3 ? "show" : "")
        }
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {/**CREDIT CARD */}
          {availCreditCard && (
            <div className="my-3">
              <div data-toggle="collapse">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  data-toggle="collapse"
                  data-target="#multiCollapseExample1"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                  required
                  onClick={() => setPaymentTab(paymentTab == 1 ? 0 : 1)}

                />
                <label
                  className="form-check-label fs-16 font-sb ms-2"
                  htmlFor="credit"
                >
                  Credit card
                </label>
              </div>
              <div
                className={
                  "collapse multi-collaps " + (paymentTab == 1 ? "show" : "")
                }
                id="multiCollapseExample1"
              >
                <label className="form-label mt-4">Saved Cards</label>
                <ul>
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="images/credit-1.png"
                        alt="logo"
                        className="img-fluid desk-logo"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img
                        src="images/credit-2.png"
                        alt="logo"
                        className="img-fluid desk-logo"
                      />
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="col-8">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="5665 2344 1223 9801"
                    required
                  />
                </div>
                <ul>
                  <li className="list-inline-item">
                    <div className="mt-4">
                      <label className="form-label">Valid Date</label>
                      <div className="quantity d-flex px-2">
                        <select
                          className="form-select fs-14 font-r text-color-2"
                          aria-label="Default select example"
                        >
                          <option value={1} selected>
                            01
                          </option>
                          <option value={2}>02</option>
                          <option value={3}>03</option>
                        </select>
                        <select
                          className="form-select fs-14 font-r text-color-2"
                          aria-label="Default select example"
                        >
                          <option value={1} selected>
                            28
                          </option>
                          <option value={2}>29</option>
                          <option value={3}>30</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className=" mt-4 ms-0 ms-md-4">
                      <label htmlFor="zip" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control cvv"
                        placeholder=""
                        required
                      />
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <button
                      onClick={() => props.onCheckout(constants.PAYMENT_TYPE.CARD)}
                      className="btn btn-lg fs-16"
                      type="submit"
                    >
                      {/* Pay ₹16,994 */} Pay
                      <TbCurrencyRupee />
                      {props.grandTotal}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {/**CREDIT CARD END*/}

          {/**UPI*/}
          {availUpi && (
            <>
              <div className="mt-4 d-block d-md-flex">
                <div>
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                    data-toggle="collapse"
                    data-target="#multiCollapseExample2"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                    onClick={() => setPaymentTab(paymentTab == 2 ? 0 : 2)}
                  />
                  <label
                    className="form-check-label fs-16 font-sb ms-2"
                    htmlFor="debit"
                  >
                    UPI
                  </label>
                </div>
                <div className="upi-amount">
                  <p className="d-block font-sb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-info-circle me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    Offers not Valid on Guest Login
                  </p>
                </div>
              </div>
              <div
                className={
                  "collapse multi-collaps " + (paymentTab == 2 ? "show" : "")
                }
                id="multiCollapseExample2"
              >
                <div className="mt-4">
                  <ul>
                    <li className="list-inline-item col-md-8">
                      <label className="form-label">Enter UPI ID</label>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="5665 2344 1223 9801"
                        required
                        ata-toggle="collapse"
                        data-target="#multiCollapseExample3"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample3"
                        onClick={() => setPaymentTab(paymentTab == 3 ? 0 : 3)}
                      />
                    </li>
                    <li className="list-inline-item">
                      <button
                        onClick={() => props.onCheckout(constants.PAYMENT_TYPE.UPI)}
                        className="btn btn-lg fs-16 mt-3 mt-md-0"
                        type="submit"
                      >
                        {/* Pay ₹16,994 */}Pay
                        <TbCurrencyRupee />
                        {props.grandTotal}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {/**UPI END*/}

          {/**COD*/}
          {availCod && (
            <div className="checkout-payment">
              <div className="mt-4">
                <div>
                  <input
                    id="cod"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                    onClick={() => setPaymentTab(paymentTab == 3 ? 0 : 3)}
                  />
                  <label
                    className="form-check-label fs-16 font-sb ms-2"
                    htmlFor="cod"
                  >
                    Cash On Delivery
                  </label>
                </div>
                {/* <div className="upi-amount bgred">
                  <p className="d-block font-sb">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-info-circle me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    Extra ₹129 Convinience Fee
                  </p>
                </div> */}
              </div>
              <div
                className={
                  "collapse multi-collaps " +
                  (paymentTab == 3 ? "show" : "hide")
                }
                id="codBody"
              >
                <div className="mt">
                  <ul>
                    <li className="list-inline-item col-md-8">
                      <label className="form-label"></label>
                    </li>
                    <li className="list-inline-item">
                      <button
                        onClick={() => props.onCheckout(constants.PAYMENT_TYPE.COD)}
                        className="btn btn-lg fs-16 mt-3 mt-md-0"
                        type="submit"
                      >
                        Place Order
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </ div>
          )}
          {/**COD END*/}

          {/** RUPIFI */}
          {eligibleForRupifi && (
        <div className="checkout-payment">
              <div className="mt-4"  >
                <div>
                  <input
                    id="rupifi"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required
                    data-toggle="collapse"
                    data-target="#rupifiBody"
                    aria-expanded="false"
                    aria-controls="rupifiBody"
                    onClick={() => setPaymentTab(paymentTab == 4 ? 0 : 4)}

                  />
                  <label
                    className="form-check-label fs-16 font-sb ms-2"
                    htmlFor="rupifi"
                  >
                    RUPIFI (BNPL)
                  </label>
                </div>
              </div>
              <div
                className={
                  "collapse multi-collaps " + (paymentTab == 4 ? "show" : "")
                }
                id="rupifiBody"
              >
                <div className="">
                  <ul>
                    <li className="list-inline-item col-md-8">
                      <label className="form-label"></label>
                    </li>
                    <li className="list-inline-item">
                      <button
                        onClick={() => props.onCheckout(constants.PAYMENT_TYPE.RUPIFI)}
                        className="btn btn-lg fs-16 mt-3 mt-md-0"
                        type="submit"
                      >
                        {/* Pay ₹16,994 */}Pay
                        <TbCurrencyRupee />
                        {props.grandTotal}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </ div>
          )}
          {/** RUPIFI END*/}

          {/** RAZOR PAY */}
          {
            availRazorPay && (
              <>
                <div className="mt-4 d-block d-md-flex">
                  <div>
                    <input
                      id="razorpay"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                      onClick={() => setPaymentTab(paymentTab == 5 ? 0 : 5)}
                    />
                    <label
                      className="form-check-label fs-16 font-sb ms-2"
                      htmlFor="razorpay"
                    >
                      Cards, UPI & More 
                      <div className="rzp-icon-section rzp-row svelte-1pzmacg">
                        <small>Powered by</small>  
                        <svg width="72" height="16" viewBox="0 0 72 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M4.857 4.48 4.26 6.633l3.413-2.165-2.232 8.168 2.267.002L11.006.574" fill="#3395FF"></path><path d="m1.183 9.204-.939 3.433h4.647l1.901-6.985-5.609 3.552ZM17.324 6.18c-.113.414-.332.718-.659.912-.325.194-.782.291-1.372.291H13.42l.658-2.406h1.874c.59 0 .994.097 1.214.293.22.197.272.498.16.914V6.18Zm1.94-.048c.24-.869.14-1.537-.295-2.005-.436-.464-1.2-.698-2.29-.698h-4.183l-2.518 9.212h2.032l1.015-3.713h1.333c.299 0 .534.048.706.14.173.097.274.264.305.506l.363 3.067h2.177l-.353-2.86c-.072-.638-.37-1.013-.894-1.124.668-.19 1.227-.505 1.677-.944.448-.434.768-.98.926-1.578v-.003Zm4.94 3.211c-.17.624-.431 1.096-.785 1.426-.353.33-.776.494-1.269.494-.502 0-.842-.16-1.022-.483-.18-.323-.186-.79-.019-1.403s.434-1.092.801-1.437a1.822 1.822 0 0 1 1.29-.518c.492 0 .83.167 1 .499.174.333.178.81.007 1.43l-.003-.008Zm.89-3.26-.254.932a1.481 1.481 0 0 0-.638-.802c-.316-.196-.706-.297-1.172-.297a3.37 3.37 0 0 0-1.647.435c-.526.29-.988.698-1.382 1.225a5.343 5.343 0 0 0-.867 1.797c-.182.676-.22 1.266-.11 1.779.113.516.352.91.72 1.184.37.279.844.416 1.423.416.46.002.915-.095 1.333-.286.412-.183.78-.451 1.075-.787l-.265.971h1.965l1.794-6.563H25.1l-.005-.003Zm9.036 0h-5.714l-.4 1.463h3.326l-4.396 3.724-.376 1.374h5.899l.4-1.463h-3.563l4.463-3.78.361-1.317Zm5.03 3.25c-.176.645-.439 1.131-.785 1.447a1.79 1.79 0 0 1-1.259.48c-1.03 0-1.368-.643-1.017-1.928.174-.638.438-1.118.79-1.442a1.821 1.821 0 0 1 1.28-.486c.493 0 .825.16.996.484.171.323.17.805-.005 1.444Zm1.15-3.003c-.452-.276-1.03-.414-1.733-.414-.713 0-1.373.137-1.98.412a4.271 4.271 0 0 0-1.553 1.19 4.777 4.777 0 0 0-.925 1.812c-.185.688-.208 1.293-.064 1.81.144.516.447.913.901 1.188.458.277 1.041.415 1.757.415a4.65 4.65 0 0 0 1.961-.415 4.315 4.315 0 0 0 1.545-1.192 4.79 4.79 0 0 0 .924-1.812c.19-.69.212-1.294.068-1.812a1.97 1.97 0 0 0-.894-1.19l-.006.008Zm7.016 1.507.503-1.786c-.17-.086-.394-.13-.674-.13a2.82 2.82 0 0 0-2.219 1.115l.262-.961-.57.002h-1.402l-1.806 6.56h1.993l.937-3.43c.136-.498.382-.89.736-1.169.352-.28.791-.42 1.321-.42.326 0 .629.074.916.22l.003-.001Zm5.544 1.527c-.17.612-.428 1.08-.78 1.403a1.808 1.808 0 0 1-1.268.487c-.492 0-.83-.164-1.007-.49-.182-.329-.186-.802-.015-1.425.17-.622.431-1.099.79-1.43a1.82 1.82 0 0 1 1.277-.498c.484 0 .81.17.984.516.174.345.178.824.01 1.436h.01Zm1.385-3.023c-.37-.29-.84-.434-1.412-.434-.501 0-.979.111-1.431.336a2.97 2.97 0 0 0-1.102.919l.007-.045.334-1.043h-1.946l-.496 1.815-.015.064-2.045 7.479h1.996l1.03-3.765c.102.335.31.598.628.788.318.19.71.283 1.177.283.58 0 1.133-.137 1.657-.412.526-.275.98-.672 1.367-1.184a5.19 5.19 0 0 0 .855-1.779c.186-.673.224-1.273.118-1.799-.108-.526-.347-.933-.716-1.221l-.006-.002Zm6.619 2.996c-.17.62-.432 1.095-.784 1.422a1.794 1.794 0 0 1-1.268.493c-.504 0-.845-.16-1.023-.483-.181-.323-.185-.79-.019-1.403.167-.613.433-1.092.8-1.437a1.822 1.822 0 0 1 1.29-.518c.492 0 .825.167 1 .498.174.331.175.808.005 1.43l-.001-.002Zm.89-3.262-.255.932a1.468 1.468 0 0 0-.636-.802c-.319-.198-.709-.297-1.174-.297-.572 0-1.124.145-1.65.435a4.32 4.32 0 0 0-1.383 1.221 5.33 5.33 0 0 0-.867 1.797c-.184.675-.22 1.266-.11 1.78.111.513.35.91.72 1.185.368.275.844.414 1.423.414.466 0 .91-.095 1.333-.286a3.112 3.112 0 0 0 1.073-.788l-.265.972h1.965l1.793-6.56h-1.965l-.003-.003Zm10.217.003.001-.002h-1.207l-.108.002h-.627l-.322.438-.08.104-.033.052-2.547 3.479-.526-4.073h-2.085l1.056 6.189-2.332 3.167h2.078l.565-.785a.86.86 0 0 1 .049-.066l.659-.917.018-.026 2.951-4.103 2.487-3.453.004-.002v-.004Z" fill="#072654"></path></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.214 .537)" d="M0 0h71.786v14.926H0z"></path></clipPath></defs></svg>
                      </div>
                    </label>
                  </div>
                </div>
                <div
                  className={
                    "collapse multi-collaps " +
                    (paymentTab == 5 ? "show" : "hide")
                  }
                  id="razorPay"
                >
                  <div className="mt-4">
                    <ul>
                      <li className="list-inline-item col-md-8">
                        <label className="form-label"></label>
                      </li>
                      <li className="list-inline-item">
                        <button
                          onClick={() => props.onCheckout(constants.PAYMENT_TYPE.RAZORPAY)}
                          className="btn btn-lg fs-16 mt-3 mt-md-0"
                          type="submit"
                        >
                          Pay Now 
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )
          }
          {/** RAZOR PAY end */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutStepC;
