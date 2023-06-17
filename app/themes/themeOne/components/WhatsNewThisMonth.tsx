import React from "react";
import Slider from "react-slick";
import { preferenceSliderSetting } from "../../../../utils/sliderConfig";
import SectionHeader from "./SectionHeader";
import Image from 'next/image';
import NoImage from '../../../../public/images/no-image.png';
import { useRouter } from "next/router";
import Permalink from "../../../../utils/Permalink";
interface iProps {
  data: any;

}

const WhatsNewThisMonth = (props: iProps) => {
  const route = useRouter();
  return (
    <section className="month-trend mt-4 mt-md-5 " >
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"What’s New This Month"} />
          <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
            <div className="Preference-slider">
              <Slider {...preferenceSliderSetting}>
                {props.data.map((info: any, index: number) => {
                  return (
                    <div className="slick-list position-relative text-center" key={index} >
                      <div className="bg2" /* style={{backgroundImage:`url(${info.image})`}} */ style={{marginLeft:10}}>
                        <Image
                          onClick={() => route.replace(Permalink.ofProduct(info))}
                          className="w-100 cursor-pointer"
                          src={info?.image ? info?.image: NoImage}
                          alt=""
                          width={370}
                          height={509}
                        />
                        <div className="overlay text-start p-3">
                          <p className="fs-12 font-r text-color-1" onClick={() => route.replace(Permalink.ofProduct(info))}>
                          {info.description}
                          </p>
                        </div>
                      </div>
                    </div>);
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewThisMonth;
