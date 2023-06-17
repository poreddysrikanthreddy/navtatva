import React, { useState, useEffect } from "react";
import Header from "../../app/themes/themeOne/components/Header";
import Slider from "react-slick";
import { myCollectionMenu } from "../../app/constants/sampleData";
import ProuctWishlist from "../../app/components/product/ProductWishlist";
import { ocassionSliderSetting } from "../../utils/sliderConfig";
import { NextPage } from "next";

const CustomisedShoppingExperienceScreen: NextPage = () => {
  const [wishlistItems, setWishlistItems] = useState<any>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);


  return (
    <div className="mycollection">
      <div className="wrapper">
        {/* Header */}
        <Header />
        {/* End Header */}
      </div>
      <section className="sliderView m-5 m-md-5 ">
        <h2 className="fs-40 font-b text-color-2">My Collections</h2>
        <div className="ocassion-slider mt-4 mt-lg-5 ml-4">
          <Slider {...ocassionSliderSetting} className="">
            {typeof window !== undefined &&
              myCollectionMenu.map((item: any, index: number) => {
                return (
                  <>
                    <div className="collection position-relative ">
                      {" "}
                      <a href="/shop">
                        <div className="imgsec m-5 m-lg-5">
                          <img
                            className="w-110"
                            src={item.collection_image}
                            alt=""
                          />
                        </div>
                        <div className="text-center mt-4">
                          <h3 className="fs-20  font-sb text-color-2 mb-0">
                            {item.collection_name}
                          </h3>
                          <p className="fs-12 font-r text-color-1">
                            {item.created_data}
                          </p>
                        </div>{" "}
                      </a>
                    </div>
                  </>
                );
              })}
          </Slider>
        </div>
      </section>
      <section className="productBar m-5 m-lg-5">
        <h2 className="fs-40 font-b text-color-2">
          Other Wishlisted Products
        </h2>
        <div className="mt-5 mt-lg-5">
          <div className="row">
            {wishlistItems?.length &&
              wishlistItems?.map((item: any, index: number) => {
                return <ProuctWishlist key={index} {...item} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );

};

export default CustomisedShoppingExperienceScreen;
