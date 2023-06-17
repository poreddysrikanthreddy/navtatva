import { useState } from "react";

const ProuctWishlist = () => {
    return (<>
        <div className="col-md-6 col-lg-3 mb-4">
            <div className="collection position-relative">
                <a href="#">
                    <div className="imgsec">
                        <img className="w-100" src="images/img1.png" alt="" />
                    </div>
                    <div className="hoverBlock">
                        <div className="overlay   text-start">
                            <h4 className="fs-16 font-sb text-color-2">Anubhutee</h4>
                            <p className="fs-14 font-r text-color-1 py-2">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti </p>

                            <div className="product-rating mb-3 mt-0">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <p className="fs-20 font-sb text-color-5">₹3,450</p>
                            <a href="#" className="btn btnbg fs-13  " tabIndex={0}>Add to Cart</a>
                            <div className="btnbarcart">
                                <a href="#" className="btn fs-13 quick m-2" tabIndex={0}>Quick View</a>
                                <a href="#" className="btn fs-13 " tabIndex={0}>Add to Cart</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div></>)



}
export default ProuctWishlist
