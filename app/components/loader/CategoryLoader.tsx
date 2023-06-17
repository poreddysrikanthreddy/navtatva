import React, { useState, CSSProperties } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ClipLoader } from "react-spinners";
import Slider from "react-slick";
import { menuSliderSettings } from "../../../utils/sliderConfig";
import 'react-loading-skeleton/dist/skeleton.css'

const CategoryLoader = () => {
    const [cateory, setCategory] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return (
        //   <ClipLoader  size={props.size}  cssOverride={override} loading={props.loading}/>
        <>
            <section className="category mt-4 mt-md-5 position-relative side-category">
                <div className="testimonial-slider">
                    <Slider {...menuSliderSettings} >
                        {cateory?.map((items, index: number) => {
                            return (
                                <div className="ms-2" key={index}><Skeleton style={{ height: 210, borderRadius: 25, width: 222 }} />
                                    <Skeleton style={{ borderRadius: 30, width: 220, }} />
                                </div>)
                        })}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default CategoryLoader