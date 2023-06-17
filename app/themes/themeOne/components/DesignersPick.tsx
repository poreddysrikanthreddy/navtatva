import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import DetailThumb1 from '../../../../public/images/detail-thumb1.png';
import DetailThumb2 from '../../../../public/images/detail-thumb2.png';
import DetailThumb3 from '../../../../public/images/detail-thumb3.png';
import DetailThumb4 from '../../../../public/images/detail-thumb4.png';
import DetailPick from '../../../../public/images/detail-pick-1.png';
import ViewImage from '../../../../public/images/view.png';

import { useRouter } from "next/router";
import Permalink from "../../../../utils/Permalink";

const DesignersPick = () => {
    const route = useRouter();
    return (
        <section>
            <div className="card-wrapper pb-5">
                <div className="wrapper">
                    <div className="heading3 py-5">
                        <h2>
                            <span className="bg1">Designer’s Pick</span>
                        </h2>
                    </div>
                    {/* card left */}
                    <div className="detail-slider">
                        <div>
                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="product-imgs">
                                        <div className="img-select">
                                            <div className="img-item">
                                                <a onClick={() => route.replace(Permalink.ofShop())}>
                                                    <Image
                                                        src={DetailThumb1}
                                                        alt="Detail image"
                                                        width={86}
                                                        height={115}
                                                    />
                                                </a>
                                            </div>
                                            <div className="img-item">
                                                <a onClick={() => route.replace(Permalink.ofShop())}>
                                                    <Image
                                                        src={DetailThumb2}
                                                        alt="Detail image"
                                                        width={86}
                                                        height={115}
                                                    />
                                                </a>
                                            </div>
                                            <div className="img-item">
                                                <a onClick={() => route.replace(Permalink.ofShop())}>
                                                    <Image
                                                        src={DetailThumb3}
                                                        alt="Detail image"
                                                        width={86}
                                                        height={115}
                                                    />
                                                </a>
                                            </div>
                                            <div className="img-item">
                                                <a onClick={() => route.replace(Permalink.ofShop())}>
                                                    <Image
                                                        src={DetailThumb4}
                                                        alt="Detail image"
                                                        width={86}
                                                        height={115}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="img-display">
                                            <div className="img-showcase">
                                                <Image
                                                    src={DetailPick}
                                                    alt="Detail image"
                                                    width={479}
                                                    height={675}
                                                />
                                            </div>
                                        </div>
                                        <div className="view">
                                            <Image
                                                src={ViewImage}
                                                alt="Detail image"
                                                width={424}
                                                height={109}
                                            />
                                        </div>
                                        <div className="speaker pe-5">
                                            <a href="#" className="d-block mb-5">
                                                <img src="/images/wishlist-detail.png" />
                                            </a>
                                            <a href="#" className="d-block  mb-5">
                                                <img src="/images/volume.png" />
                                            </a>
                                            <a href="#" className="d-block  mb-5">
                                                <img src="/images/swap.png" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-6 mt-0 mt-md-5 mt-lg-0">
                                    <div className="product-content">
                                        <h2 className="product-title fs-24 font-sb" onClick={() => route.replace(Permalink.ofDummyProduct())}>Anubhutee</h2>
                                        <p className="fs-14 font-r text-color-1 mt-2">
                                            Women Teal Blue &amp; Beige Ethnic Motifs Printed
                                            Straight Kurti
                                        </p>
                                        <p className="fs-12 font-r text-color-1 mt-5 mb-3">
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
                                        <div className="custom-radios">
                                            <p className="fs-12 font-r text-color-1 mt-4 mb-3">
                                                Color
                                            </p>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="color-1"
                                                    name="color"
                                                    defaultValue="color-1"
                                                    defaultChecked
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
                                                />
                                                <label htmlFor="color-4">
                                                    <span>
                                                        <div />
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="list mt-4">
                                            <div className="row">
                                                <div className="col-md-12 d-flex">
                                                    <ul className="p-0 me-5">
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Sleeve Length </p>
                                                            Three-Quarter Sleeve
                                                        </li>
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Fabric </p>
                                                            Viscose Rayon
                                                        </li>
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Pattern </p>
                                                            Printed
                                                        </li>
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Wash Care </p>
                                                            Hand Wash
                                                        </li>
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Hemline </p>
                                                            Straight
                                                        </li>
                                                    </ul>
                                                    <ul className="p-0">
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Sleeve Length </p>
                                                            Three-Quarter Sleeve
                                                        </li>
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Fabric </p>
                                                            Viscose Rayon
                                                        </li>
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Pattern </p>
                                                            Printed
                                                        </li>
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Wash Care </p>
                                                            Hand Wash
                                                        </li>
                                                        <li className="list-inlne-item d-flex font-r">
                                                            <p>Hemline </p>
                                                            Straight
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hurryUp">
                                            Hurry! Only <strong>24 Items</strong> Left in Stock
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="product-rating  text-center">
                                                    <span>4.7(21)</span>
                                                    <br />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half-alt" />
                                                    <p className="fs-12 text-color-1">345 reviews</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6  text-center">
                                                <div className="product-price">
                                                    <p className="last-price mb-0 fs-12 font-r">
                                                        <span className="text-color-1">₹ 6,450</span>
                                                    </p>
                                                    <p className="new-price mb-0 font-sb">
                                                        <span>₹3,450</span>
                                                    </p>
                                                    <p className="save fs-10 font-r">
                                                        You save ₹3,000{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="resquest">
                                            <a href="#" className="font-m" title={""}>
                                                Request Sample
                                            </a>
                                        </div>
                                        <div className="purchase-info d-flex">
                                        <Link href="#">
                                            <button type="button" className="btn w-50" onClick={() => route.replace(Permalink.ofDummyProduct())}>
                                                Quick View
                                            </button>
                                            </Link>
                                            <Link href="#">
                                            <button type="button" className="btn w-50" onClick={() => route.replace(Permalink.ofShop())}>
                                                Add to Cart
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card right */}
                </div>
            </div>
        </section>
    )
}

export default DesignersPick;