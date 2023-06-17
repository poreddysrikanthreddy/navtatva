import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Slider from "react-slick";
import Header from "../../app/themes/themeOne/components/Header";
import Permalink from "../../utils/Permalink";
import {
  customerSliderSetting,
  occasionSetting,
  productDetailSliderSetting,
} from "../../utils/sliderConfig";

const ProductDetailScreen: NextPage = () => {
  const route = useRouter();
  const [selectedSection, setSelectedSection] = useState(1);

  return (
    <div className="product-detail-page">
      <div className="wrapper">
        {/* Header */}
        <Header />
        {/* End Header */}
        <section className="mt-0 mt-lg-5 pdp-detail">
          <div className="main d-lg-none d-block">
            <Slider {...customerSliderSetting}>
              <div className="slider slider-for">
                <div>
                  <img className="w-100" src="/images/detail-img.png" alt="" />
                </div>
                <div>
                  <img className="w-100" src="/images/detail-img.png" alt="" />
                </div>
                <div>
                  <img className="w-100" src="/images/detail-img.png" alt="" />
                </div>
                <div>
                  <img className="w-100" src="/images/detail-img.png" alt="" />
                </div>
                <div>
                  <img className="w-100" src="/images/detail-img.png" alt="" />
                </div>
                <div>
                  <img className="w-100" src="/images/detail-img.png" alt="" />
                </div>
              </div>
              <div className="slider slider-nav">
                <div className="mx-2">
                  <img
                    className="w-100"
                    src="/images/detail-thumb3.png"
                    alt=""
                  />
                </div>
                <div className="mx-2">
                  <img
                    className="w-100"
                    src="/images/detail-thumb3.png"
                    alt=""
                  />
                </div>
                <div className="mx-2">
                  <img
                    className="w-100"
                    src="/images/detail-thumb3.png"
                    alt=""
                  />
                </div>
                <div className="mx-2">
                  <img
                    className="w-100"
                    src="/images/detail-thumb3.png"
                    alt=""
                  />
                </div>
                <div className="mx-2">
                  <img
                    className="w-100"
                    src="/images/detail-thumb3.png"
                    alt=""
                  />
                </div>
                <div className="mx-2">
                  <img
                    className="w-100"
                    src="/images/detail-thumb3.png"
                    alt=""
                  />
                </div>
              </div>
            </Slider>
          </div>
          <div className="pdp-slider d-lg-block d-none">
            <Slider {...productDetailSliderSetting}>
              <div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="discount-offer text-white">
                      <h4 className="fs-16 font-sb">20% Discount</h4>
                      <p className="fs-13 font-r">22 : 38 : 18</p>
                    </div>
                    <div className="offtype mt-5">
                      <a href="#">
                        <img
                          className="me-2 d-inline-block"
                          src="/images/Offer.png"
                          alt=""
                        />
                        Offers
                      </a>
                    </div>
                    <p className="mt-4">
                      <span className="font-sb text-color-2">
                        Get{" "}
                        <img
                          className="mx-2 d-inline-block"
                          src="/images/coins.png"
                          alt=""
                        />{" "}
                        1000
                      </span>{" "}
                      for every size XL order placed
                    </p>
                    <p className="mt-4">
                      Avail{" "}
                      <span className="font-sb text-color-2">No Cost EMI</span>{" "}
                      on select cards for orders above ₹3000
                    </p>
                    <p className="mt-4">
                      Get GST invoice and{" "}
                      <span className="font-sb text-color-2">
                        save up to 28%
                      </span>{" "}
                      on business purchases.
                    </p>
                    <ul className="length mt-5">
                      <li>
                        <span className="fs-12 font-r text-color-5">
                          Sleeve Length
                        </span>
                        <p className="fs-14 font-r text-color-2">
                          Three-Quarter Sleeve
                        </p>
                      </li>
                      <li>
                        <span className="fs-12 font-r text-color-5">
                          Fabric
                        </span>
                        <p className="fs-14 font-r text-color-2">
                          Viscose Rayon
                        </p>
                      </li>
                      <li>
                        <span className="fs-12 font-r text-color-5">
                          Pattern
                        </span>
                        <p className="fs-14 font-r text-color-2">Printed</p>
                      </li>
                      <li>
                        <span className="fs-12 font-r text-color-5">
                          Wash Care
                        </span>
                        <p className="fs-14 font-r text-color-2">Hand Wash</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <img
                      className="w-100"
                      src="/images/detail-img.png"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
                      <p className="fs-20 font-r text-color-2 mt-2">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                      <div className="custom-radios">
                        <p className="fs-14 font-r text-color-1 mt-4 mb-3">
                          Colours Available
                        </p>
                        <div>
                          <input
                            type="radio"
                            id="color-1"
                            name="color"
                            defaultValue="color-1"
                            defaultChecked
                            tabIndex={0}
                          />
                          <label htmlFor="color-1">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-2"
                            name="color"
                            defaultValue="color-2"
                            tabIndex={0}
                          />
                          <label htmlFor="color-2">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-3"
                            name="color"
                            defaultValue="color-3"
                            tabIndex={0}
                          />
                          <label htmlFor="color-3">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-4"
                            name="color"
                            defaultValue="color-4"
                            tabIndex={0}
                          />
                          <label htmlFor="color-4">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="cart-right-area p-0">
                        <div className="table-responsive mt-5">
                          <table className="table cart-table">
                            <tbody>
                              <tr>
                                <td>
                                  <span>Size</span>
                                  <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td>
                                  <span>Qty</span>
                                  <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td className="price d-flex">
                                  <span className="align-self-center">
                                    Color
                                  </span>
                                  <div className="custom-radios">
                                    <div>
                                      <input
                                        type="radio"
                                        id="color-3"
                                        name="color"
                                        defaultValue="color-3"
                                        defaultChecked
                                        tabIndex={0}
                                      />
                                      <label htmlFor="color-3">
                                        <span>
                                          <div />
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>Size</span>
                                  <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td>
                                  <span>Qty</span>
                                  <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td className="price d-flex">
                                  <span className="align-self-center">
                                    Color
                                  </span>
                                  <div className="custom-radios">
                                    <div>
                                      <input
                                        type="radio"
                                        id="color-2"
                                        name="color"
                                        defaultValue="color-2"
                                        defaultChecked
                                        tabIndex={0}
                                      />
                                      <label htmlFor="color-2">
                                        <span>
                                          <div />
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>Size</span>
                                  <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td>
                                  <span>Qty</span>
                                  <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td className="price d-flex">
                                  <span className="align-self-center">
                                    Color
                                  </span>
                                  <div className="custom-radios">
                                    <div>
                                      <input
                                        type="radio"
                                        id="color-1"
                                        name="color"
                                        defaultValue="color-1"
                                        defaultChecked
                                        tabIndex={0}
                                      />
                                      <label htmlFor="color-1">
                                        <span>
                                          <div />
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="text-center mb-4">
                          <button type="button" className="cartrow-btn">
                            <i className="fas fa-plus fa-fw" /> Add Another Size
                          </button>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="avail mt-4"
                        title="Add 20 more units in Size 36 to avail discounts"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-info-circle me-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        Add 20 more units in Size 36 to avail discounts
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="discount-offer text-white">
                      <h4 className="fs-16 font-sb">20% Discount</h4>
                      <p className="fs-13 font-r">22 : 38 : 18</p>
                    </div>
                    <div className="offtype mt-5">
                      <a href="#">
                        <img
                          className="me-2 d-inline-block"
                          src="/images/Offer.png"
                          alt=""
                        />
                        Offers
                      </a>
                    </div>
                    <p className="mt-4">
                      <span className="font-sb text-color-2">
                        Get{" "}
                        <img
                          className="mx-2 d-inline-block"
                          src="/images/coins.png"
                          alt=""
                        />{" "}
                        1000
                      </span>{" "}
                      for every size XL order placed
                    </p>
                    <p className="mt-4">
                      Avail{" "}
                      <span className="font-sb text-color-2">No Cost EMI</span>{" "}
                      on select cards for orders above ₹3000
                    </p>
                    <p className="mt-4">
                      Get GST invoice and{" "}
                      <span className="font-sb text-color-2">
                        save up to 28%
                      </span>{" "}
                      on business purchases.
                    </p>
                    <ul className="length mt-5">
                      <li>
                        <span className="fs-12 font-r text-color-5">
                          Sleeve Length
                        </span>
                        <p className="fs-14 font-r text-color-2">
                          Three-Quarter Sleeve
                        </p>
                      </li>
                      <li>
                        <span className="fs-12 font-r text-color-5">
                          Fabric
                        </span>
                        <p className="fs-14 font-r text-color-2">
                          Viscose Rayon
                        </p>
                      </li>
                      <li>
                        <span className="fs-12 font-r text-color-5">
                          Pattern
                        </span>
                        <p className="fs-14 font-r text-color-2">Printed</p>
                      </li>
                      <li>
                        <span className="fs-12 font-r text-color-5">
                          Wash Care
                        </span>
                        <p className="fs-14 font-r text-color-2">Hand Wash</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <img
                      className="w-100"
                      src="/images/detail-img1.png"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4">
                    <div className="">
                      <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
                      <p className="fs-20 font-r text-color-2 mt-2">
                        Women Teal Blue &amp; Beige Ethnic Motifs Printed
                        Straight Kurti
                      </p>
                      <div className="custom-radios">
                        <p className="fs-14 font-r text-color-1 mt-4 mb-3">
                          Colours Available
                        </p>
                        <div>
                          <input
                            type="radio"
                            id="color-1"
                            name="color"
                            defaultValue="color-1"
                            defaultChecked
                            tabIndex={0}
                          />
                          <label htmlFor="color-1">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-2"
                            name="color"
                            defaultValue="color-2"
                            tabIndex={0}
                          />
                          <label htmlFor="color-2">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-3"
                            name="color"
                            defaultValue="color-3"
                            tabIndex={0}
                          />
                          <label htmlFor="color-3">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id="color-4"
                            name="color"
                            defaultValue="color-4"
                            tabIndex={0}
                          />
                          <label htmlFor="color-4">
                            <span>
                              <div />
                            </span>
                          </label>
                        </div>
                      </div>
                      <div className="cart-right-area p-0">
                        <div className="table-responsive mt-5">
                          <table className="table cart-table">
                            <tbody>
                              <tr>
                                <td>
                                  <span>Size</span>
                                  <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td>
                                  <span>Qty</span>
                                  <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td className="price d-flex">
                                  <span className="align-self-center">
                                    Color
                                  </span>
                                  <div className="custom-radios">
                                    <div>
                                      <input
                                        type="radio"
                                        id="color-3"
                                        name="color"
                                        defaultValue="color-3"
                                        defaultChecked
                                        tabIndex={0}
                                      />
                                      <label htmlFor="color-3">
                                        <span>
                                          <div />
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>Size</span>
                                  <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td>
                                  <span>Qty</span>
                                  <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td className="price d-flex">
                                  <span className="align-self-center">
                                    Color
                                  </span>
                                  <div className="custom-radios">
                                    <div>
                                      <input
                                        type="radio"
                                        id="color-2"
                                        name="color"
                                        defaultValue="color-2"
                                        defaultChecked
                                        tabIndex={0}
                                      />
                                      <label htmlFor="color-2">
                                        <span>
                                          <div />
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span>Size</span>
                                  <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td>
                                  <span>Qty</span>
                                  <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                  </select>
                                </td>
                                <td className="price d-flex">
                                  <span className="align-self-center">
                                    Color
                                  </span>
                                  <div className="custom-radios">
                                    <div>
                                      <input
                                        type="radio"
                                        id="color-1"
                                        name="color"
                                        defaultValue="color-1"
                                        defaultChecked
                                        tabIndex={0}
                                      />
                                      <label htmlFor="color-1">
                                        <span>
                                          <div />
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="text-center mb-4">
                          <button type="button" className="cartrow-btn">
                            <i className="fas fa-plus fa-fw" /> Add Another Size
                          </button>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="avail mt-4"
                        title="Add 20 more units in Size 36 to avail discounts"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-info-circle me-2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        Add 20 more units in Size 36 to avail discounts
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </div>
      <div className="m-bg position-relative">
        <div className="wrapper">
          <section className="mt-5 mt-lg-0">
            <div className="product-content d-block d-lg-none">
              <h2 className="product-title fs-24 font-sb">Anubhutee</h2>
              <p className="fs-14 font-r text-color-1 mt-2">
                Women Teal Blue &amp; Beige Ethnic Motifs Printed Straight Kurti
              </p>
              <div className="custom-radios">
                <p className="fs-12 font-r text-color-1 mt-4 mb-3">Color</p>
                <div>
                  <input
                    type="radio"
                    id="color-1"
                    name="color"
                    defaultValue="color-1"
                    defaultChecked
                    tabIndex={0}
                  />
                  <label htmlFor="color-1">
                    <span>
                      <div />
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="color-2"
                    name="color"
                    defaultValue="color-2"
                    tabIndex={0}
                  />
                  <label htmlFor="color-2">
                    <span>
                      <div />
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="color-3"
                    name="color"
                    defaultValue="color-3"
                    tabIndex={0}
                  />
                  <label htmlFor="color-3">
                    <span>
                      <div />
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="color-4"
                    name="color"
                    defaultValue="color-4"
                    tabIndex={0}
                  />
                  <label htmlFor="color-4">
                    <span>
                      <div />
                    </span>
                  </label>
                </div>
              </div>
              <p className="fs-12 font-r text-color-1 mt-4 mb-3">
                size available
              </p>
              <ul className="size d-flex">
                <li>S</li>
                <li>M</li>
                <li className="available">L</li>
                <li className="select">XL</li>
                <li className="available">XXL</li>
                <li className="custom-size">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-rulers me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                  </svg>
                  Custome Size
                </li>
                <li className="sizechart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-bar-chart-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
                  </svg>
                  Size Chart
                </li>
              </ul>
              <ul className="length mt-4">
                <li>
                  <span className="fs-12 font-r text-color-5">
                    Sleeve Length
                  </span>
                  <p className="fs-14 font-r text-color-2">
                    Three-Quarter Sleeve
                  </p>
                </li>
                <li>
                  <span className="fs-12 font-r text-color-5">Fabric</span>
                  <p className="fs-14 font-r text-color-2">Viscose Rayon</p>
                </li>
                <li>
                  <span className="fs-12 font-r text-color-5">Pattern</span>
                  <p className="fs-14 font-r text-color-2">Printed</p>
                </li>
                <li>
                  <span className="fs-12 font-r text-color-5">Wash Care</span>
                  <p className="fs-14 font-r text-color-2">Hand Wash</p>
                </li>
              </ul>
            </div>
            <ul
              className="nav nav-tabs border-0 justify-content-between mb-3"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link font-sb bg-1 ${
                    selectedSection == 1 ? "active" : ""
                  }`}
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  onClick={() => {
                    setSelectedSection(1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-text-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link font-sb bg-2 second ${
                    selectedSection == 2 ? "active" : ""
                  }`}
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  onClick={() => {
                    setSelectedSection(2);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                  References
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link font-sb bg-3 third ${
                    selectedSection == 3 ? "active" : ""
                  }`}
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  onClick={() => {
                    setSelectedSection(3);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                  Reviews
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade show ${
                  selectedSection == 1 ? "active" : ""
                }`}
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h4 className="fs-20 font-sb">About the Brand</h4>
                <p>
                  Everything created at the House of Pataudi is inspired by the
                  modern Indian sensibility. We believe in a seamless weave of
                  the past with the present. Our carefully crafted pieces give
                  expression to a refined and effortless way of life.
                </p>
                <br />
                <br />
                <h4 className="fs-20 font-sb">About the Collection</h4>
                <p>
                  Everything created at the House of Pataudi is inspired by the
                  modern Indian sensibility. We believe in a seamless weave of
                  the past with the present. Our carefully crafted pieces give
                  expression to a refined and effortless way of life.
                </p>
                <br />
                <br />
                <h4 className="fs-20 font-sb">Size &amp; Fit</h4>
                <p>The model (height 5'8) is wearing a size S</p>
                <br />
                <br />
                <h4 className="fs-20 font-sb">About the Brand</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit, sit amet feugiat lectus.
                </p>
              </div>
              <div
                className={`tab-pane fade show ${
                  selectedSection == 2 ? "active" : ""
                }`}
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-4">
                    <img src="/images/ref-1.png" alt="" className="img-fluid" />
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="partCollection">
                          <h3 className="fs-24 font-sb text-color-4">
                            Part of Manish Malhotra’s Couture Collection
                          </h3>
                          <p className="fs-20 font-r text-white py-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad
                            litora torquent per conubia nostra, per inceptos
                            himenaeos.
                          </p>
                          <a
                            className="fs-20 font-r text-white"
                            href="#"
                            title="View Collectio"
                          >
                            View Collection
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-chevron-right"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-12 mt-4 d-flex">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/ref-2.png"
                            alt=""
                          />
                        </a>
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/ref-3.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade show ${
                  selectedSection == 3 ? "active" : ""
                }`}
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row">
                  <div className="col-md-6 col-lg-5">
                    <div className="totalReview mb-5">
                      <h4 className="fs-36 font-r text-color-2">4.6</h4>
                      <span className="fs-10 font-sb text-color-1">
                        345 Verified Buyers
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill="currentColor"
                        className="bi bi-star-fill text-color-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </div>
                    <div className="row align-items-center barReview mb-3">
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-1">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="#C4BAAA"
                            className="bi bi-star ms-0"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </h4>
                      </div>
                      <div className="col-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow={22}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-2">22</h4>
                      </div>
                    </div>
                    <div className="row align-items-center barReview mb-3">
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-1">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="#C4BAAA"
                            className="bi bi-star ms-0"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </h4>
                      </div>
                      <div className="col-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow={22}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-2">22</h4>
                      </div>
                    </div>
                    <div className="row align-items-center barReview mb-3">
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-1">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="#C4BAAA"
                            className="bi bi-star ms-0"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </h4>
                      </div>
                      <div className="col-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow={22}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-2">22</h4>
                      </div>
                    </div>
                    <div className="row align-items-center barReview mb-3">
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-1">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="#C4BAAA"
                            className="bi bi-star ms-0"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </h4>
                      </div>
                      <div className="col-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow={22}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-2">22</h4>
                      </div>
                    </div>
                    <div className="row align-items-center barReview mb-3">
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-1">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="#C4BAAA"
                            className="bi bi-star ms-0"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </h4>
                      </div>
                      <div className="col-9">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow={22}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h4 className="fs-20 font-r text-color-2">22</h4>
                      </div>
                    </div>
                    <div className="customersay mt-5">
                      <h4 className="fs-16 font-r text-color-2 text-uppercase pb-4">
                        What Customer Said
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          fill="#000"
                          className="bi bi-star"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </h4>
                      <div className="row align-items-center barReview mb-3">
                        <div className="col-md-12">
                          <div>
                            <h4 className="fs-16 font-r text-color-1">Fit</h4>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow={22}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="fs-13 font-r text-color-2">
                            As Expected 50%
                          </h4>
                        </div>
                      </div>
                      <div className="row align-items-center barReview mb-3">
                        <div className="col-md-12">
                          <div className="">
                            <h4 className="fs-16 font-r text-color-1">Lenth</h4>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow={22}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="fs-13 font-r text-color-2">
                            As Expected 50%
                          </h4>
                        </div>
                      </div>
                      <div className="row align-items-center barReview mb-3">
                        <div className="col-md-12">
                          <div className="">
                            <h4 className="fs-16 font-r text-color-1">
                              Transparency
                            </h4>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow={22}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h4 className="fs-13 font-r text-color-2">
                            As Expected 50%
                          </h4>
                        </div>
                      </div>
                      <a href="#" className="fs-13 font-sb btn-view">
                        View Detail
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 offset-lg-2">
                    <h4 className="fs-32 font-sb text-color-1 pb-4">
                      Customer Reviews (32)
                    </h4>
                    <ul >
                      <li>
                        <div className="starReview green text-white d-inline-block me-3">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            fill="#fff"
                            className="bi bi-star-fill text-color-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="d-inline-block">
                          <ul>
                            <li className="list-inline-item">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="/images/cr-1.png"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="/images/cr-1.png"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="/images/cr-1.png"
                                  alt=""
                                />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="/images/cr-1.png"
                                  alt=""
                                />
                              </a>
                            </li>
                          </ul>
                          <div className="pt-4">
                            <h4 className="fs-13 font-r text-color-2">
                              Little loose from shoulder
                            </h4>
                            <ul className="littleBar pb-4">
                              <li className="list-inline-item me-0">
                                <a
                                  href="#"
                                  className="fs-10 font-r text-color-1"
                                >
                                  Anuj Sharma
                                </a>
                              </li>
                              <li className="text-color-1 fs-10 list-inline-item me-0">
                                |
                              </li>
                              <li className="list-inline-item">
                                <a
                                  href="#"
                                  className="fs-10 font-r text-color-1"
                                >
                                  12 June 2022
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mt-4">
                        <div className="starReview green text-white d-inline-block me-3">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            fill="#fff"
                            className="bi bi-star-fill text-color-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="d-inline-block barwidth">
                          <h4 className="fs-13 font-r text-color-2">
                            Little loose from shoulder
                          </h4>
                          <ul className="littleBar pb-4">
                            <li className="list-inline-item me-0">
                              <a href="#" className="fs-10 font-r text-color-1">
                                Anuj Sharma
                              </a>
                            </li>
                            <li className="text-color-1 fs-10 list-inline-item me-0">
                              |
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="fs-10 font-r text-color-1">
                                12 June 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="mt-4">
                        <div className="starReview orange text-white d-inline-block me-3">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            fill="#fff"
                            className="bi bi-star-fill text-color-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="d-inline-block barwidth">
                          <h4 className="fs-13 font-r text-color-2">
                            Little loose from shoulder
                          </h4>
                          <ul className="littleBar pb-4">
                            <li className="list-inline-item me-0">
                              <a href="#" className="fs-10 font-r text-color-1">
                                Anuj Sharma
                              </a>
                            </li>
                            <li className="text-color-1 fs-10 list-inline-item me-0">
                              |
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="fs-10 font-r text-color-1">
                                12 June 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="mt-4">
                        <div className="starReview red text-white d-inline-block me-3">
                          5
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={10}
                            fill="#fff"
                            className="bi bi-star-fill text-color-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </div>
                        <div className="d-inline-block barwidth">
                          <h4 className="fs-13 font-r text-color-2">
                            Little loose from shoulder
                          </h4>
                          <ul className="littleBar pb-4">
                            <li className="list-inline-item me-0">
                              <a href="#" className="fs-10 font-r text-color-1">
                                Anuj Sharma
                              </a>
                            </li>
                            <li className="text-color-1 fs-10 list-inline-item me-0">
                              |
                            </li>
                            <li className="list-inline-item">
                              <a href="#" className="fs-10 font-r text-color-1">
                                12 June 2022
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="d-none d-lg-block">
            <div className="row deliveryOption-row">
              <div className="col-md-4">
                <div className="deliveryOption position-relative text-center">
                  <img className="" src="/images/truck.png" alt="" />
                  <h4 className="mt-4">Get it by Wed, June 27</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliveryOption position-relative text-center">
                  <img className="" src="/images/cod.png" alt="" />
                  <h4 className="mt-4">Pay on Delivery Available</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deliveryOption position-relative text-center">
                  <img className="" src="/images/return.png" alt="" />
                  <h4 className="mt-4">Easy 30 day return &amp; exchange</h4>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 mt-md-5 pb-5">
            <div className="row">
              <div className="col-md-12">
                <div className="heading3">
                  <h2>
                    <span className="bg9">Similar Products</span>
                  </h2>
                </div>
              </div>
              <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
                <div className="ocassion-slider">
                  <Slider {...occasionSetting}>
                    <div className="thumb position-relative text-center">
                      <div className="bg1">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion1.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg2">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion2.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg3">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion3.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg4">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion4.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg4">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion4.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="col-md-12 text-center mt-4">
                <a href="#" className="btn btn-outline-danger ms-3">
                  Womens Kurtis
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
                <a href="#" className="btn btn-outline-danger ms-3">
                  Printed
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
                <a href="#" className="btn btn-outline-danger ms-3">
                  Cotton
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
                <a href="#" className="btn btn-outline-danger ms-3">
                  Three-Quarter Sleeve
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>
          <section className="mt-4 mt-md-5 pb-5">
            <div className="row">
              <div className="col-md-12">
                <div className="heading3">
                  <h2>
                    <span className="bg9">
                      Upsell / Cross-Sells are offered
                    </span>
                  </h2>
                </div>
              </div>
              <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
                <div className="ocassion-slider">
                  <Slider {...occasionSetting}>
                    <div className="thumb position-relative text-center">
                      <div className="bg1">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion1.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg2">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion2.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg3">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion3.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg4">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion4.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg4">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion4.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 mt-md-5 pb-5">
            <div className="row">
              <div className="col-md-12">
                <div className="heading3">
                  <h2>
                    <span className="bg9">Recently Viewed Items</span>
                  </h2>
                </div>
              </div>
              <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
                <div className="ocassion-slider">
                  <Slider {...occasionSetting}>
                    <div className="thumb position-relative text-center">
                      <div className="bg1">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion1.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg2">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion2.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg3">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion3.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg4">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion4.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thumb position-relative text-center">
                      <div className="bg4">
                        <a href="#">
                          <img
                            className="w-100"
                            src="/images/Occassion4.png"
                            alt=""
                          />
                        </a>
                        <div className="hoverBlock">
                          <div className="overlay text-center">
                            <p className="fs-13 font-r text-color-1">
                              Women Teal Blue &amp; Beige Ethnic Motifs Printed
                              Straight Kurti
                            </p>
                            <p className="fs-19 font-sb text-color-3 py-3">
                              ₹3,450
                            </p>
                            <a
                              onClick={() => route.replace(Permalink.ofDummyProduct())}
                              className="btn-border fs-13 text-color-3"
                            >
                              More Info
                            </a>
                            <a href="/cart" className="btn fs-13">
                              Add to Cart
                            </a>
                          </div>
                          <div className="speaker">
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/wishlist-detail.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/volume.png" />
                            </a>
                            <a href="#" className="d-block mb-5" tabIndex={0}>
                              <img src="/images/swap.png" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className="footer-area">
                  <h2>Newsletter</h2>
                  <p>
                    Get every product update and new offers as soon as they are
                    available.
                  </p>
                  <form className="form-inline position-relative mt-5">
                    <div className="form-group mb-2">
                      <label htmlFor="staticEmail2" className="sr-only">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control text-color-1"
                        id="staticEmail2"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">
                      Confirm identity
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 offset-md-0 offset-lg-1 mt-4 mt-lg-0">
                <div className="footer-area mb-5">
                  <h2>Contact Us</h2>
                  <p>
                    <a href="mailto:support@navtatva.com">
                      support@navtatva.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:73892 73884">+91 73892 73884</a>
                  </p>
                </div>
                <div className="footer-area">
                  <h2>Location</h2>
                  <p>
                    NavTatva, Brigade Road, <br />
                    Municipal No. <br />
                    10 Bengaluru 560056
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-4 mt-lg-0">
                <div className="footer-area">
                  <h2>Follow Us</h2>
                  <ul className="social-box list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" target="_blank">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" target="_blank">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" target="_blank">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 mt-5">
                <div className="footer-detail mb-5">
                  <h6>ONLINE SHOPPING MADE EASY AT NavTatva</h6>
                  <p>
                    If you would like to experience the best of online shopping
                    for men, women and kids in India, you are at the right
                    place. NavTatva is the ultimate destination for fashion and
                    lifestyle, being host to a wide array of merchandise
                    including clothing, footwear, accessories, jewellery,
                    personal care products and more. It is time to redefine your
                    style statement with our treasure-trove of trendy items. Our
                    online store brings you the latest in designer products
                    straight out of fashion houses. You can shop online at
                    NavTatva from the comfort of your home and get your favourites
                    delivered right to your doorstep.
                  </p>
                  <h6>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h6>
                  <p>
                    Be it clothing, footwear or accessories, NavTatva offers you
                    the ideal combination of fashion and functionality for men,
                    women and kids. You will realise that the sky is the limit
                    when it comes to the types of outfits that you can purchase
                    for different occasions.
                  </p>
                  <p>
                    Smart men’s clothing - At NavTatva you will find myriad
                    options in smart formal shirts and trousers, cool T-shirts
                    and jeans, or kurta and pyjama combinations for men. Wear
                    your attitude with printed T-shirts. Create the
                    back-to-campus vibe with varsity T-shirts and distressed
                    jeans. Be it gingham, buffalo, or window-pane style, checked
                    shirts are unbeatably smart. Team them up with chinos,
                    cuffed jeans or cropped trousers for a smart casual look.
                    Opt for a stylish layered look with biker jackets. Head out
                    in cloudy weather with courage in water-resistant jackets.
                    Browse through our innerwear section to find supportive
                    garments which would keep you confident in any outfit.
                    Trendy women’s clothing - Online shopping for women at
                    NavTatva is a mood-elevating experience. Look hip and stay
                    comfortable with chinos and printed shorts this summer. Look
                    hot on your date dressed in a little black dress, or opt for
                    red dresses for a sassy vibe. Striped dresses and T-shirts
                    represent the classic spirit of nautical fashion. Choose
                    your favourites from among Bardot, off-shoulder,
                    shirt-style, blouson, embroidered and peplum tops, to name a
                    few. Team them up with skinny-fit jeans, skirts or palazzos.
                    Kurtis and jeans make the perfect fusion-wear combination
                    for the cool urbanite. Our grand sarees and lehenga-choli
                    selections are perfect to make an impression at big social
                    events such as weddings. Our salwar-kameez sets, kurtas and
                    Patiala suits make comfortable options for regular wear.
                    Fashionable footwear - While clothes maketh the man, the
                    type of footwear you wear reflects your personality. We
                    bring you an exhaustive lineup of options in casual shoes
                    for men, such as sneakers and loafers. Make a power
                    statement at work dressed in brogues and oxfords. Practice
                    for your marathon with running shoes for men and women.
                    Choose shoes for individual games such as tennis, football,
                    basketball, and the like. Or step into the casual style and
                    comfort offered by sandals, sliders, and flip-flops. Explore
                    our lineup of fashionable footwear for ladies, including
                    pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy
                    the best of comfort and style with embellished and metallic
                    flats. Stylish accessories - NavTatva is one of the best
                    online shopping sites for classy accessories that perfectly
                    complement your outfits. You can select smart analogue or
                    digital watches and match them up with belts and ties. Pick
                    up spacious bags, backpacks, and wallets to store your
                    essentials in style. Whether you prefer minimal jewellery or
                    grand and sparkling pieces, our online jewellery collection
                    offers you many impressive options. Fun and frolic - Online
                    shopping for kids at NavTatva is a complete joy. Your little
                    princess is going to love the wide variety of pretty
                    dresses, ballerina shoes, headbands and clips. Delight your
                    son by picking up sports shoes, superhero T-shirts, football
                    jerseys and much more from our online store. Check out our
                    lineup of toys with which you can create memories to
                    cherish. Beauty begins here - You can also refresh,
                    rejuvenate and reveal beautiful skin with personal care,
                    beauty and grooming products from NavTatva. Our soaps, shower
                    gels, skin care creams, lotions and other ayurvedic products
                    are specially formulated to reduce the effect of aging and
                    offer the ideal cleansing experience. Keep your scalp clean
                    and your hair uber-stylish with shampoos and hair care
                    products. Choose makeup to enhance your natural beauty.
                    NavTatva is one of the best online shopping sites in India
                    which could help transform your living spaces completely.
                    Add colour and personality to your bedrooms with bed linen
                    and curtains. Use smart tableware to impress your guest.
                    Wall decor, clocks, photo frames and artificial plants are
                    sure to breathe life into any corner of your home.
                  </p>
                  <h6>AFFORDABLE FASHION AT YOUR FINGERTIPS</h6>
                  <p>
                    NavTatva is one of the unique online shopping sites in India
                    where fashion is accessible to all. Check out our new
                    arrivals to view the latest designer clothing, footwear and
                    accessories in the market. You can get your hands on the
                    trendiest style every season in western wear. You can also
                    avail the best of ethnic fashion during all Indian festive
                    occasions. You are sure to be impressed with our seasonal
                    discounts on footwear, trousers, shirts, backpacks and more.
                    The end-of-season sale is the ultimate experience when
                    fashion gets unbelievably affordable.
                  </p>
                  <h6>NavTatva INSIDER</h6>
                  <p>
                    Every online shopping experience is precious. Hence, a
                    cashless reward-based customer loyalty program called NavTatva
                    Insider was introduced to enhance your online experience.
                    The program is applicable to every registered customer and
                    measures rewards in the form of Insider Points.
                  </p>
                  <p>
                    There are four levels to achieve in the program, as the
                    Insider Points accumulate. They are - Insider, Select, Elite
                    or Icon. Apart from offering discounts on NavTatva and partner
                    platform coupons, each tier comes with its own special
                    perks.
                  </p>
                  <p>Insider</p>
                  <p>
                    Opportunity to master any domain in fashion with tips from
                    celebrity stylists at NavTatva Masterclass sessions.Curated
                    collections from celeb stylists.Elite
                  </p>
                  <p>
                    VIP access to special sale events such as the End of Reason
                    Sale (EORS) and product launches.Exclusive early access to
                    Limited Edition products Icon
                  </p>
                  <p>
                    Chance to get on guest lists for special events. NavTatva
                    Studio - The Personalised Fashion Feed You Wouldn’t Want To
                    Miss Out On The world wide web is evolving at a relentless
                    pace, and with an accelerated growth each passing year,
                    there is bound to be an overwhelming surge of online
                    content. It was for this very reason that personalisation of
                    search feeds was proposed as a solution to combat the
                    overload of irrelevant formation.
                  </p>
                  <p>
                    Several social media platforms such as Facebook and
                    Instagram along with various online shopping websites have
                    chosen to help filter content, increasing user engagement,
                    retention and customer loyalty.
                  </p>
                  <p>
                    NavTatva is one such online shopping website that joins the
                    list of platforms that help curate a personalised fashion
                    feed. Named theMyntra Studio, this personalised search feed
                    brings you the latest men and women’s fashion trends,
                    celebrity styles, branded content and daily updates from
                    your favourite fashion labels.
                  </p>
                  <p>
                    If you are wondering how impactful NavTatva Studio can be, we
                    are listing out five perks of having a rich, meaningful, and
                    personalised fashion feed in your life.
                  </p>
                  <p>
                    Keep Up With What Your Favourite Fashion Icons Are Upto The
                    #OOTD, AKA outfit of the day hashtag trend has been a rage
                    among fashion bloggers and stylists. The whole concept of
                    building an outfit from scratch and showcasing it to a huge
                    community of enthusiasts using the hashtag has helped
                    individuals with understanding trends and making suitable
                    for daily wear.
                  </p>
                  <p>
                    Imagine if you could keep up with every piece of clothing
                    and accessory worn by the fashion icons you look upto. From
                    Sonam Kapoor to Hailey Baldwin Bieber, NavTatva Studio has a
                    ‘Stories’ feature to help track celebrity fashion trends,
                    exploring details such as their outfit of the day. This way,
                    you would not ever miss out on the latest celebrity fashion
                    trends, from all around the world.
                  </p>
                  <p>
                    Quick Fashion Tip And Tricks Whether it is draping a saree
                    into a dhoti style, wearing the right lingerie under certain
                    dresses or discovering multiple uses out of heavy ethnic
                    wear, NavTatva Studio will help you acquire some unique and
                    useful fashion hacks. Each hack is designed with the
                    intention to help you get the best wear out of everything in
                    your wardrobe.
                  </p>
                  <p>
                    Updates on What Is Trending and New Product Launches Since
                    fast fashion seems to be extremely hard to keep up with
                    these days, a quick update on what is trending in
                    accessories, clothing and footwear would certainly be of
                    great help. NavTatva Studio helps you stay connected to the
                    most beloved and sought after brands such as Puma,
                    Coverstory, The Label Life and so many more.
                  </p>
                  <p>
                    Your feed keeps you updated with stories of what the brands
                    are creating including clothing, footwear and jewellery,
                    along with their new seasonal collections.
                  </p>
                  <p>
                    Explicit Step-By-Step Beauty Routines From Experts Just like
                    fashion, the beauty community keeps on growing, and with
                    brands such as Huda Beauty, MAC and the latest Kay Beauty by
                    Katrina Kaif, are constantly coming up with mind-blowing
                    products. Whether it is creating a no-makeup look, different
                    winged eyeliners, do-it-yourself facial masks and other
                    personal care beauty routines, NavTatva Studio is here for
                    you.
                  </p>
                  <p>
                    Celebrity Confessions And A Look Into Their Lives A bonus
                    feature that NavTatva Studio has in store for you is celebrity
                    confessions and a peek into their lives. So, NavTatva helps
                    you stay connected to your most beloved celebrities in a
                    matter of clicks.
                  </p>
                  <p>
                    If you are very particular when it comes to the content you
                    wish to view and engage with on social media, the ability to
                    intricately filter content helps achieve that. Applying the
                    same formula for hardcore fashion lovers and shoppers,
                    NavTatva Studio brings you a daily fashion fix incorporating
                    everything that you love, all at one place. Sign up on
                    NavTatva today and start organising your fashion feed, just
                    the way you want to.
                  </p>
                  <h6>NavTatva APP</h6>
                  <p>
                    NavTatva, India’s no. 1 online fashion destination justifies
                    its fashion relevance by bringing something new and chic to
                    the table on the daily. Fashion trends seem to change at
                    lightning speed, yet the NavTatva shopping app has managed to
                    keep up without any hiccups. In addition, NavTatva has vowed
                    to serve customers to the best of its ability by introducing
                    its first-ever loyalty program, The NavTatva Insider. Gain
                    access to priority delivery, early sales, lucrative deals
                    and other special perks on all your shopping with the NavTatva
                    app. Download the NavTatva app on your Android or IOS device
                    today and experience shopping like never before!
                  </p>
                  <h6>HISTORY OF NavTatva</h6>
                  <p>
                    Becoming India’s no. 1 fashion destination is not an easy
                    feat. Sincere efforts, digital enhancements and a team of
                    dedicated personnel with an equally loyal customer base have
                    made NavTatva the online platform that it is today. The
                    original B2B venture for personalized gifts was conceived in
                    2007 but transitioned into a full-fledged ecommerce giant
                    within a span of just a few years. By 2012, NavTatva had
                    introduced 350 Indian and international brands to its
                    platform, and this has only grown in number each passing
                    year. Today NavTatva sits on top of the online fashion game
                    with an astounding social media following, a loyalty program
                    dedicated to its customers, and tempting, hard-to-say-no-to
                    deals.
                  </p>
                  <p>
                    The NavTatva shopping app came into existence in the year 2015
                    to further encourage customers’ shopping sprees. Download
                    the app on your Android or IOS device this very minute to
                    experience fashion like never before
                  </p>
                  <h6>SHOP ONLINE AT NavTatva WITH COMPLETE CONVENIENCE</h6>
                  <p>
                    Another reason why NavTatva is the best of all online stores
                    is the complete convenience that it offers. You can view
                    your favourite brands with price options for different
                    products in one place. A user-friendly interface will guide
                    you through your selection process. Comprehensive size
                    charts, product information and high-resolution images help
                    you make the best buying decisions. You also have the
                    freedom to choose your payment options, be it card or
                    cash-on-delivery. The 30-day returns policy gives you more
                    power as a buyer. Additionally, the try-and-buy option for
                    select products takes customer-friendliness to the next
                    level.
                  </p>
                  <p>
                    Enjoy the hassle-free experience as you shop comfortably
                    from your home or your workplace. You can also shop for your
                    friends, family and loved-ones and avail our gift services
                    for special occasions.
                  </p>
                </div>
                <div className="copyright text-center">
                  © 2022 www.manmandir.store. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="cartBar">
          <ul>
            <li className="list-inline-item valign">
              <div className="d-flex">
                <h4 className="fs-20 text-color-2">₹3,450</h4>
                <span className="fs-13 text-color-6">₹1,999 off (22%)</span>
                <span className="mx-3">or</span>
                <span className="fs-13">
                  ₹3,399 +<img src="/images/coins.png" alt="" /> 51
                </span>
              </div>
              <h5 className="fs-10 text-color-7 mt-2">
                Hurry! Only <strong>24 Items</strong> Left in Stock
              </h5>
            </li>
            <li className="list-inline-item offset-lg-2 mt-3 mt-lg-0 text-center text-lg-start">
              <a href="#" className="wishlist">
                <img
                  className="me-2"
                  src="/images/wishlist-detail.png"
                  alt=""
                />
              </a>
              {/* <a
                href="#"
                className="btn-border fs-20 me-2 d-none d-lg-inline-block"
              >
                Request Semple
              </a> */}
              <a href="#" className="btn-border fs-20 me-2 d-lg-none">
                Wishlist
              </a>
              <a href="/cart" className="btn fs-20">
                Add to Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End Footer */}
      {/* Search Popup */}
      <div className="modal fade" id="searchPopup">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
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
            <div className="modal-body searchbar">
              <div className="searchbar-popup">
                <div className="input-group mb-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control fs-16"
                    placeholder="Find clothing from over 500+ categories..."
                  />
                </div>
                <div className="searchbar-popup-contnet">
                  <p className="textlight">For</p>
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item">
                      <div className="gender-box malebox">
                        <i className="fas fa-mars fa-fw" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="gender-box femalebox">
                        <i className="fas fa-venus fa-fw" />
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="gender-box otherbox">
                        <i className="fas fa-transgender fa-fw" />
                      </div>
                    </li>
                  </ul>
                  <p className="textlight">Material</p>
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg2.jpg)",
                          }}
                        >
                          <span>Cotton</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg3.jpg)",
                          }}
                        >
                          <span>Silk</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg4.jpg)",
                          }}
                        >
                          <span>Khaadi</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg2.jpg)",
                          }}
                        >
                          <span>Nylon</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <p className="textlight">Work</p>
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg2.jpg)",
                          }}
                        >
                          <span>Printed</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg3.jpg)",
                          }}
                        >
                          <span>Embroidery</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg4.jpg)",
                          }}
                        >
                          <span>Plain</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <p className="textlight">Occasion</p>
                  <ul className="list-inline mb-4">
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg2.jpg)",
                          }}
                        >
                          <span>Bridal</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg3.jpg)",
                          }}
                        >
                          <span>Office Wear</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg4.jpg)",
                          }}
                        >
                          <span>Party Wear</span>
                        </div>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <div
                          className="meterial-box"
                          style={{
                            backgroundImage: "url(images/month-bg4.jpg)",
                          }}
                        >
                          <span>Traditional</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
