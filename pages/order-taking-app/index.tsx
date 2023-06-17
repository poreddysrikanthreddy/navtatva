import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { OrderTakingAppService } from "../../network/gateway/OrderTakingAppService";
import Toast from "../../utils/Toast";
import { RupifiService } from "../../network/gateway/RupifiService";
import constants from "../../app/constants/constant";
import OrderTakingAppTitle from "../../app/components/order-taking-app/OrderTakingAppTitle";
import OrdersList from "../../app/components/order-taking-app/OrdersList";

const OrderTakingAppScreen: NextPage = () => {
  const initFormValues: any = [
    {
      productId: "",
      productName: "",
      vendorId: "",
      sku: "",
      qty: 0,
      price: 0,
      discount: 0,
      sellingPrice: 0,
      gst: 0,
      total: 0,
    },
  ];

  const [formValues, setFormValues] = useState<any>(initFormValues);

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [haveAccess, setHaveAccess] = useState<boolean>(false);
  const [isEligibleForTxn, setIsEligibleForTxn] = useState<boolean>(false);
  const [sellerList, setSellerList] = useState<any>([]);
  const [orderTotal, setOrderTotal] = useState<number>(0);
  const [gstTotal, setGstTotal] = useState<number>(0);
  const [displayPlaceOrder, setDisplayPlaceOrder] = useState<boolean>(false);
  const [sellerId, setSellerId] = useState<string>("");
  const [eligibilityData, setEligibilityData] = useState<any>(null);
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const [displayOrders, setDisplayOrders] = useState<boolean>(false);

  useEffect(() => {
    getSellerList();
    handleRupifiAccessToken();
    return () => {};
  }, []);

  async function handleRupifiAccessToken() {
    //handle page loader - todo
    let rpf_token: any = localStorage.getItem("rpf_token");
    if (rpf_token) {
      rpf_token = JSON.parse(rpf_token);
    }
    if (rpf_token && rpf_token.expiryTime > new Date().getTime()) {
      // token is not expired
    } else {
      // tokne expired and create new one
      let requestData: any = {
        merchantId: constants.RUPIFI.MERCHANT_ID,
        merchantSecret: constants.RUPIFI.MERCHANT_SECRET,
      };
      RupifiService.getInstance("")
        .getRupifiAccessToken(requestData)
        .then((response: any) => {
          if (response != "") {
            if (response?.data?.accessToken) {
              response.data.expiryTime =
                parseInt(response.data.expiryTime) + new Date().getTime();
              localStorage.setItem("rpf_token", JSON.stringify(response?.data));
            } else {
              Toast.showError(
                "Something went working with Rupifi, Please try again later"
              );
            }
          }
        })
        .catch((error) => {
          Toast.showError(
            "Something went working with Rupifi, Please try again later"
          );
        });
    }
  }
  const getSellerList = () => {
    OrderTakingAppService.getInstance("")
      .getSellerList()
      .then((response: any) => {
        if (response.data) {
          let sellerData: any = response?.data?.data;
          sellerData?.map((item: any, index: number) => {
            item.rupifi_details = item.rupifi_details
              ? JSON.parse(item.rupifi_details)
              : {};
            return item;
          });
          setSellerList(sellerData);
        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => {});
  };

  const getCreditEligibility = (id: string) => {
    let seller: any = getSellerData(id);
    if (seller && seller?.whatsapp_number) {
      let requestJSON = {
        merchantCustomerRefId: constants.RUPIFI.TEST_ACCOUNT ?? seller?.id,
        phone: constants.RUPIFI.TEST_ACCOUNT ?? seller?.whatsapp_number,
        updateGMV: false,
      };
      RupifiService.getInstance("")
        .checkRupifiCreditEligibility(requestJSON)
        .then((response: any) => {
          if (response?.data) {
            setIsEligibleForTxn(response?.data?.data?.isEligibleForTxn);
            setEligibilityData(response?.data?.data);
          } else {
            console.log("ERROR:", response?.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsEligibleForTxn(false);
      setEligibilityData(null);
    }
  };

  const handleChange = (i: number, e: any) => {
    let newFormValues: any = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
    setDisplayPlaceOrder(false);
  };

  const addFormFields = () => {
    setFormValues([...formValues, initFormValues[0]]);
  };

  const removeFormFields = (i: number) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const handleCalc = (event: any) => {
    event.preventDefault();
    let grandTotal: number = 0;
    let grandGstTotal: number = 0;
    let isEntryValid = true;
    formValues?.map((item: any, index: number) => {
      item.price = parseInt(item.price);
      item.gst = parseInt(item.gst);
      item.discount = parseInt(item.discount);
      item.qty = parseInt(item.qty);
      item.sellingPrice = getSalePrice(item.price, item.discount);
      item.total = getTotal(item.sellingPrice, item.gst, item.qty);
      grandTotal += item.total;
      grandGstTotal += Math.round(
        ((item.sellingPrice * item.gst) / 100) * item.qty
      );
      if (
        item.productId == "" ||
        item.productName == "" ||
        item.vendorId == "" ||
        item.sku == "" ||
        item.qty <= 0 ||
        item.price <= 0 ||
        item.discount < 0 ||
        item.gst < 0 ||
        item.total <= 0
      ) {
        isEntryValid = false;
      }
      return item;
    });
    if (isEntryValid) {
      setOrderTotal(grandTotal);
      setGstTotal(grandGstTotal);
      setDisplayPlaceOrder(!displayPlaceOrder);
    } else {
      Toast.showError("All fields are required");
    }
  };

  function getSellerData(sellerId: string) {
    let sellerData = {};
    sellerList?.map((item: any, index: number) => {
      if (item.id == sellerId) {
        sellerData = item;
      }
    });
    return sellerData;
  }

  const handleSubmit = async () => {
    if (orderTotal <= eligibilityData?.account?.balance?.value) {
      let seller: any = getSellerData(sellerId);
      let requestJSON = {
        sellerId: seller?.id,
        sellerName: seller?.name,
        products: formValues,
        orderTotal: orderTotal,
        gstTotal: gstTotal,
        paymentStatus: "pending",
        orderStatus: "pending",
      };
      OrderTakingAppService.getInstance("")
        .placeOrder(requestJSON)
        .then((response: any) => {
          if (response?.status == 200) {
            setRedirecting(true);
            setFormValues(initFormValues);
            setDisplayPlaceOrder(!displayPlaceOrder);
            setOrderTotal(0);
            setGstTotal(0);
            setSellerId("");
            window.location.href = response?.data?.data?.paymentUrl;
          } else {
            console.log("ERROR:", response?.data);
            Toast.showError(response?.data?.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Toast.showError("Seller don't have enough credit balance.");
    }
  };

  const getAccess = () => {
    if (userName == "adminnf" && password == "magicpw@nf") {
      setHaveAccess(true);
    }
  };

  const logout = () => {
    setHaveAccess(false);
  };

  function getSalePrice(price: number, discount: number) {
    return Math.round(price - (price * discount) / 100);
  }

  function getTotal(salePrice: number, gst: number, qty: number) {
    return Math.round((salePrice + (salePrice * gst) / 100) * qty);
  }

  const checkOrders = () => {
    setDisplayOrders(!displayOrders);
  };

  return (
    <>
      {!haveAccess && !redirecting && (
        <div className="shoppingCart orderTakingApp">
          <div className="wrapper">
            <section className="cartItem mt-4 mt-md-5">
              <div className="row">
                <OrderTakingAppTitle />
              </div>
            </section>
            <section>
              <h2 className="fs-32 font-b text-color-2 list-inline-item">
                Login
              </h2>
              <br />
              <br />
              <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="username">Username:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <br />
                    <button
                      type="submit"
                      className="btn btn-default btn-sm"
                      onClick={() => getAccess()}
                    >
                      Get Access
                    </button>
                  </form>
                </div>
                <div className="col-lg-4"></div>
              </div>
            </section>
          </div>
        </div>
      )}
      {haveAccess && !displayOrders && !redirecting && (
        <div className="shoppingCart orderTakingApp">
          <div className="wrapper">
            <section className="cartItem mt-4 mt-md-5">
              <div className="row">
                <OrderTakingAppTitle />
                <div className="col-lg-12 text-end">
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => checkOrders()}
                  >
                    Manage Orders
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </section>
            <section>
              <div className="row">
                <div className="col-lg-3">
                  <h3 className="fs-32 font-b text-color-2 list-inline-item">
                    CREATE ORDER
                  </h3>
                </div>
                <div className="col-lg-3">
                  <select
                    className="form-control"
                    value={sellerId}
                    onChange={(e) => {
                      setSellerId(e.target.value);
                      getCreditEligibility(e.target.value);
                    }}
                  >
                    <option value={""}>-- SELECT SELLER --</option>
                    {sellerList?.map((item: any, index: number) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name} ({item.whatsapp_number})
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-lg-6">
                  {sellerId && (
                    <div>
                      <label>Rupifi(BNPL) Eligibility? :</label>{" "}
                      <b style={{ color: isEligibleForTxn ? "Green" : "Red" }}>
                        {isEligibleForTxn ? "Eligible" : "Not Eligible"}
                      </b>
                      {isEligibleForTxn && (
                        <>
                          <br />
                          <label>
                            Balance/Limit <small>(Credit Amount)</small>:{" "}
                          </label>
                          <b style={{ color: "Green" }}>
                            {" "}
                            {eligibilityData?.account?.balance?.formattedValue}/
                            {eligibilityData?.account?.limit?.formattedValue}
                          </b>
                          <br />
                        </>
                      )}
                      {!isEligibleForTxn && (
                        <>
                          <br />
                          <label>Rupifi Status: </label>
                          <b> {eligibilityData?.status}</b>
                          {(eligibilityData?.status == "PRE_APPROVED" ||
                            eligibilityData?.status == "INCOMPLETE") && (
                            <p>
                              To complete the Rupifi(BNPL) registration{" "}
                              <a
                                target={"_blank"}
                                href={eligibilityData.activationUrl}
                              >
                                click here
                              </a>
                              .
                            </p>
                          )}
                          <br />
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
              {isEligibleForTxn && (
                <>
                  <br />
                  <div className="row">
                    <div className="col-lg-12">
                      <form onSubmit={handleCalc}>
                        {formValues.map((element: any, index: number) => (
                          <div className="form-inline" key={index}>
                            <div className="row">
                              <div className="col-lg-1">
                                {index == 0 && <label>ProductID</label>}
                                <input
                                  type="text"
                                  className="form-control"
                                  name="productId"
                                  value={element.productId || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="col-lg-2">
                                {index == 0 && <label>ProductName</label>}
                                <input
                                  type="text"
                                  className="form-control"
                                  name="productName"
                                  value={element.productName || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index == 0 && <label>VendorID</label>}
                                <input
                                  type="text"
                                  className="form-control"
                                  name="vendorId"
                                  value={element.vendorId || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index == 0 && <label>#SKU</label>}
                                <input
                                  type="text"
                                  className="form-control"
                                  name="sku"
                                  value={element.sku || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index == 0 && <label>QTY</label>}
                                <input
                                  type="number"
                                  className="form-control"
                                  name="qty"
                                  value={element.qty || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index == 0 && <label>Price</label>}
                                <input
                                  type="number"
                                  className="form-control"
                                  name="price"
                                  value={element.price || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index == 0 && <label>Discount(%)</label>}
                                <input
                                  type="number"
                                  className="form-control"
                                  name="discount"
                                  value={element.discount || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index == 0 && <label>Sale Price</label>}
                                <input
                                  readOnly={true}
                                  type="number"
                                  className="form-control"
                                  name="sellingPrice"
                                  value={getSalePrice(
                                    element.price,
                                    element.discount
                                  )}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index == 0 && <label>GST(%)</label>}
                                <input
                                  type="number"
                                  className="form-control"
                                  name="gst"
                                  value={element.gst || ""}
                                  onChange={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index == 0 && <label>Total</label>}
                                <input
                                  readOnly={true}
                                  type="number"
                                  className="form-control"
                                  name="total"
                                  value={getTotal(
                                    getSalePrice(
                                      element.price,
                                      element.discount
                                    ),
                                    element.gst,
                                    element.qty
                                  )}
                                />
                              </div>
                              <div className="col-lg-1">
                                {index ? (
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-red"
                                    onClick={() => removeFormFields(index)}
                                  >
                                    -
                                  </button>
                                ) : (
                                  <>
                                    <label> </label>
                                    <br />
                                    <button
                                      className="btn btn-sm btn-green"
                                      type="button"
                                      onClick={() => addFormFields()}
                                    >
                                      +
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="row">
                          <div className="col-lg-11 text-end">
                            <label>GST Total</label>:{" "}
                            <b className="text-success">
                              ₹ {gstTotal.toLocaleString("en-IN")}
                            </b>
                            <br />
                            <label>Ordar Total</label>:{" "}
                            <b className="text-success">
                              ₹ {orderTotal.toLocaleString("en-IN")}
                            </b>
                          </div>
                          <div className="col-lg-1"></div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 text-center">
                            {!displayPlaceOrder && (
                              <button className="btn btn-sm" type="submit">
                                Calculate Total
                              </button>
                            )}
                            {displayPlaceOrder && (
                              <button
                                className="btn btn-sm"
                                type="button"
                                onClick={() => handleSubmit()}
                              >
                                Place Order
                              </button>
                            )}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>
        </div>
      )}

      {haveAccess && displayOrders && !redirecting && (
        <OrdersList checkOrders={checkOrders} logout={logout} />
      )}

      {redirecting && (
        <div className="shoppingCart orderTakingApp">
          <div className="wrapper">
            <section className="cartItem mt-4 mt-md-5">
              <div className="row">
                <section className="cartItem mt-4 mt-md-5">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <br />
                      <br />
                      <br />
                      <h1
                        className="fs-40 font-b text-color-2 list-inline-item"
                        style={{ color: "Green" }}
                      >
                        Redirectiong for payment ...{" "}
                      </h1>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderTakingAppScreen;
