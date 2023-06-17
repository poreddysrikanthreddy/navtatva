import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";

const CustomisedShoppingExperienceScreen: NextPage = () => {
  const [cartItems, setCartItems] = useState<any>([1, 2, 3]);
  const [youMayLikeList, setYouMayLikeList] = useState<any>([1, 2, 3]);

  return (
    <div className="CustomizedPage">
      <div className="wrapper">
        {/* Header */}
        <Header />
        {/* End Header */}
      </div>
      <section className="customized text-center position-absolute">
        <div className="bannerContent">
          <h1>
            A <span className="text-color-4">Customised</span>
            <span className="d-block"></span> Shopping Experience
          </h1>
          <p className="fs-24 text-color-8 pt-4">
            Connect with our in-store seller right from your home.
          </p>

          <div className="form-group d-block d-md-flex align-items-center justify-content-center mt-4 mt-md-4">
            <input type="text" className="form-control" value="Ex: 809090" />
            <button type="submit" className="btn ms-3 mt-4 mt-md-0">
              Enter The Store
            </button>
          </div>
        </div>
      </section>

      <div className="modal fade cart-popup" id="exampleModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body p-0">
              <div className="row m-0">
                <div className="col-12 col-md-5 bg-1 left-area">
                  <div className="cart-image text-center">
                    <h6>Anubhutee</h6>
                    <p>
                      Women Teal Blue Beige Ethnic Motifs Printed Straight Kurti
                    </p>
                    <img src="images/img1.png" className="img-fluid" />
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <div className="cart-right-area">
                    <h4 className="text-center">
                      <img
                        src="images/bucket.png"
                        className="img-fluid d-block mx-auto mb-2"
                      />
                      Bulk Order
                    </h4>
                    <div className="table-responsive mt-5">
                      <table className="table cart-table">
                        <tbody>
                          <tr>
                            <td>
                              <span>Size</span>
                              <select className="form-select">
                                <option selected>36</option>
                                <option value="1">28</option>
                                <option value="2">34</option>
                                <option value="3">40</option>
                              </select>
                            </td>
                            <td>
                              <span>Qty</span>
                              <select className="form-select">
                                <option selected>10</option>
                                <option value="1">20</option>
                                <option value="2">34</option>
                                <option value="3">40</option>
                              </select>
                            </td>
                            <td className="price">₹3,789</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Size</span>
                              <select className="form-select">
                                <option selected>36</option>
                                <option value="1">28</option>
                                <option value="2">34</option>
                                <option value="3">40</option>
                              </select>
                            </td>
                            <td>
                              <span>Qty</span>
                              <select className="form-select">
                                <option selected>10</option>
                                <option value="1">20</option>
                                <option value="2">34</option>
                                <option value="3">40</option>
                              </select>
                            </td>
                            <td className="price">₹3,789</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Size</span>
                              <select className="form-select">
                                <option selected>36</option>
                                <option value="1">28</option>
                                <option value="2">34</option>
                                <option value="3">40</option>
                              </select>
                            </td>
                            <td>
                              <span>Qty</span>
                              <select className="form-select">
                                <option selected>10</option>
                                <option value="1">20</option>
                                <option value="2">34</option>
                                <option value="3">40</option>
                              </select>
                            </td>
                            <td className="price">₹3,789</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="text-center mb-4">
                      <button type="button" className="cartrow-btn">
                        <i className="fas fa-plus fa-fw"></i> Add Another Size
                      </button>
                    </div>
                    <div className="subtotal d-md-flex justify-content-between">
                      <div className="subtotal-price">
                        <span className="textlight">Sub Total</span>
                        <h3>₹14,589.94</h3>
                      </div>
                      <div className="subtotal-btn">
                        <button type="button" className="btn">
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomisedShoppingExperienceScreen;
