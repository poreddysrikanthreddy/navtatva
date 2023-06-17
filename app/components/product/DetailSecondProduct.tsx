import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Permalink from "../../../utils/Permalink";
import Loader from "../loader/loader";

const DetailSecondProduct = (props: any) => {
    
    const router = useRouter();

    useEffect(() => {
        if(props.nextSlide){
            const {id, slug, variations} = props;
            let index = variations.indexOf(id);
            let nextId = id;
            if (variations.length-1 == index) {
                nextId = variations[0];
            } else {
                let mean = Math.floor(variations.length/2);                
                if(index < mean){
                    nextId = variations[index + 1];
                }else{
                    nextId = variations[index - 1];
                }           
            }
            props.setNextSlide(0)
            router.replace(Permalink.ofProduct({id: nextId ?? id,slug}));
        }
        return () => {};
    }, [props.nextSlide]);

    return (
        <>
            <Loader loading={true} />
            {/* <div>
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
            </div> */}
        </>
    )
}

export default DetailSecondProduct;