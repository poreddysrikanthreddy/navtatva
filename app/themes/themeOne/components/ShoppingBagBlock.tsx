import React from "react";

const ShoppingBagBlock = () => {
    return (
        <section>
            <div className="row mt-4 mt-md-5">
                <div className="col-md-12 col-lg-6">
                    <div className="shoppingBar">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="shopping p-4">
                                    <h3 className="fs-32 my-2">
                                        6 Items Still In Your Shopping Bag
                                    </h3>
                                    <p className="fs-20">
                                        Complete checkout now while theyre still available
                                    </p>
                                    <div className="row mt-5">
                                        <div className="col-sm-8 mb-4 mb-sm-0">
                                            <a href="/shop">
                                                <img
                                                    className="w-100"
                                                    src="images/kurtis-1.png"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="col-sm-4 align-self-end">
                                            <a href="/shop">
                                                <img
                                                    className="w-100 mb-4 pb-2"
                                                    src="images/kurtis-2.png"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="/shop">
                                                <img
                                                    className="w-100"
                                                    src="images/kurtis-3.png"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shopping-Bottom d-block text-center text-md-start d-md-flex align-items-center p-4 p-md-5">
                                <p className="fs-20">
                                    Total Cart Value <span className="fs-24">₹12,860.55</span>
                                </p>
                                <a href="/checkout" className="btn ms-auto mt-4 mt-md-0">
                                    Checkout
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={22}
                                        fill="currentColor"
                                        className="bi bi-arrow-up-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 mt-4 mt-lg-0">
                    <div className="row">
                        <div className="col-md-12 mb-4 mb-lg-5 pb-2">
                            <div className="discount h-100">
                                <ul className="d-flex">
                                    <li className="list-inline-item">
                                        <img src="images/discount.png" alt="" />
                                    </li>
                                    <li className="fs-42 text-white list-inline-item ms-3">
                                        <p className="fs-90">20%</p>
                                        Discount
                                    </li>
                                </ul>
                                <p className="fs-34 offers">
                                    Get Upto 20% off on selected brands for the next 24hrs.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="spin-wheel h-100">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="spin-wheel-img">
                                            <img
                                                className="w-100"
                                                src="images/spin-wheel.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5 align-self-center text-center text-md-start mt-4 mt-md-0">
                                        <h4 className="fs-36 font-b">Spin The Wheel</h4>
                                        <h5 className="fs-24 text-white font-r ">
                                            Register Now
                                        </h5>
                                        <p className="fs-16 font-r">
                                            To spin the wheel and avail rewards on all categories.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoppingBagBlock;