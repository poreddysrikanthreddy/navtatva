import React from "react";

const GroupProductBlock = (props: any) => {
    return (
        <div className="col-xl-12 full-cart">
            <div className="product-block">
                <div className="row g-0">
                    <div className="col-6 col-sm-6 col-lg-3">
                        <div className="product-image position-relative">
                            <img
                                src="/images/img4.png"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 order-3 order-lg-2">
                        <div className="product-content-area">
                            <h5>- OFFICE WEAR COMBO -</h5>
                            <div className="inline-content">
                                <h6>Anubhutee</h6>
                                <p>
                                    Women Teal Blue &amp; Beige Ethnic Motifs
                                    Printed Straight Kurti
                                </p>
                                <div className="product-rating text-center">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <span>4.6</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star fa-fw" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star fa-fw" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star fa-fw" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star fa-fw" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star-half fa-fw" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-price text-center">
                                    <span className="total-price">
                                        <i className="fas fa-indian-rupee-sign fa-fw" />
                                        3,450
                                    </span>
                                </div>
                                <div className="product-btn text-center">
                                    <a
                                        href="#"
                                        className="btn-outline btn-sm w-100 mb-2"
                                        onClick={() => props.setOpenProductQuickView(true)}
                                    >
                                        Quick View
                                    </a>
                                </div>
                            </div>
                            <div className="inline-content border-0">
                                <h6>Anubhutee</h6>
                                <p>
                                    Women Teal Blue &amp; Beige Ethnic Motifs
                                    Printed Straight Kurti
                                </p>
                                <div className="product-rating text-center">
                                    <span />
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <span>4.6</span>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star fa-fw" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star fa-fw" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star fa-fw" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star fa-fw" />
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star-half fa-fw" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-price text-center">
                                    <span className="total-price">
                                        <i className="fas fa-indian-rupee-sign fa-fw" />
                                        3,450
                                    </span>
                                </div>
                                <div className="product-btn text-center">
                                    <a
                                        href="#"
                                        className="btn-outline btn-sm w-100 mb-2"
                                        onClick={ () => props.setOpenProductQuickView(true) }
                                    >
                                        Quick View
                                    </a>
                                </div>
                            </div>
                            <div className="bottom-content product-price">
                                <span className="total-price">
                                    You Pay{" "}
                                    <i className="fas fa-indian-rupee-sign fa-fw" />
                                    3,450
                                </span>
                                <span className="less-save">
                                    Combo Savings ₹901{" "}
                                </span>
                                <button
                                    type="button"
                                    className="btn btn-sm w-100 mt-4"
                                    onClick={ () => props.setOpenCartPopup(true) }
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-6 col-lg-3 order-2 order-lg-3">
                        <div className="product-image position-relative">
                            <img
                                src="/images/img5.png"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupProductBlock;