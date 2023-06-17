import React0 from "react";

const ProductLightBlock = (props: any) => {
    return (
        <div className="thumb position-relative text-center">
            <div className={"bg"+props.bg_type}>
                <a href="#"><img className="w-100" src={props.image} alt="" /></a>
                <div className="hoverBlock">
                    <div className="overlay text-center">
                        <p className="fs-13 font-r text-color-1">Women Teal Blue & Beige Ethnic Motifs Printed Straight Kurti</p>
                        <p className="fs-19 font-sb text-color-3 py-3">₹3,450</p>
                        <a href="#" className="btn-border fs-13 text-color-3">More Info</a>
                        <a href="#" className="btn fs-13">Add to Cart</a>
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
    )
}

export default ProductLightBlock;