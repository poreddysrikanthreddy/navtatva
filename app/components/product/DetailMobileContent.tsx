import { useRouter } from "next/router";
import React, { useState } from "react";

const DetailMobileContent = (props: any) => {
    const {
        product,
        getProductDetail
    } = props;

    return (
        <div className="product-content d-block d-lg-none">
            <h2 className="product-title fs-24 font-sb">{product?.getName()}</h2>
            <p className="fs-14 font-r text-color-1 mt-2">
                {product?.getDescription()}
            </p>
            <p className="fs-12 font-r text-color-1 mt-4 mb-3">
                Size available
            </p>
            <ul className="size d-flex">
                {product?.getSizes().map((info: any, index: number) => {
                    if (product?.selectCombination.size == info.id) {
                        return (
                            <li
                                key={index}
                                className="select"
                            >
                                {info.name}
                            </li>
                        );
                    } else {
                        return (
                            <li
                                key={index}
                                onClick={(e) => {
                                    product?.changeVariantBySize(info.id);
                                    getProductDetail(
                                        product?.selectCombination.id
                                    );
                                }}
                                className="available"
                            >
                                {info.name}
                            </li>
                        );
                    }
                })}
                {/* <li className="custom-size">
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
                </li> */}
            </ul>
            <div className="custom-radios">
                <p className="fs-12 font-r text-color-1 mt-4 mb-3">Colors</p>
                {product
                    ?.getColors().map((info: any, index: number) => {
                        if (product
                            ?.selectCombination.color == info.id) {
                            return (
                                <div key={index} className="custom-radios selected-color" onClick={() => { }}>
                                    <input
                                        type="radio"
                                        id="color-1"
                                        name="color"
                                        value="color-1"
                                    />
                                    <label htmlFor="color-1">
                                        <span style={{ background: info.description }}>

                                        </span>
                                    </label>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={index}
                                    onClick={(e) => {
                                        product?.changeVariantByColor(info.id);
                                        getProductDetail(
                                            product?.selectCombination.id
                                        );
                                    }}
                                >
                                    <input
                                        type="radio"
                                        id="color-1"
                                        name="color"
                                        value="color-1"
                                    />
                                    <label htmlFor="color-1">
                                        <span
                                            style={{ background: info.description }}
                                        ></span>
                                    </label>
                                </div>
                            );
                        }
                    })}
            </div>
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
    )
}

export default DetailMobileContent;