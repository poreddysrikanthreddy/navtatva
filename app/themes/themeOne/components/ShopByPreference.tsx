import React from "react";
import Slider from "react-slick";
import Permalink from "../../../../utils/Permalink";
import { preferenceSliderSetting } from "../../../../utils/sliderConfig";
import SectionHeader from "./SectionHeader";
import Image from 'next/image';
import NoImage from '../../../../public/images/no-image.png';
import { useRouter } from "next/router";

interface iProps {
  data: any;
  onAddCart: () => void;
  onWishlist: () => void;
}

const ShopByPreference = (props: iProps) => {
  const route = useRouter();
  return (
    <section className="mt-4 mt-md-5 preferrnece">
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"Shop By Preference"} />
          <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView Occasion">
            <div className="Preference-slider ">
              <Slider {...preferenceSliderSetting}>
                {props.data.map((info: any, index: number) => {
                  return (
                    <div key={index} className="thumb position-relative text-center" >
                      <div className={"bg6"}>
                        <div className="text-start p-2 p-sm-4" >
                          <p className="fs-20 font-r text-color-1">For</p>
                          <a onClick={ () => route.replace(Permalink.ofCategory(info))}>
                            <h4 className="fs-36 font-Bsoul">{info.title}</h4>
                          </a>
                        </div>
                        <Image
                          onClick={ () => route.replace(Permalink.ofCategory(info))}
                          className="w-100 cursor-pointer"
                          src={info?.image ? info?.image: NoImage}
                          alt=""
                          width={434}
                          height={470}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopByPreference;
