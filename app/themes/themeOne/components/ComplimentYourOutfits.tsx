import React from "react";
import Slider from "react-slick";
import { preferenceSliderSetting } from "../../../../utils/sliderConfig";
import Image from 'next/image';
import NoImage from '../../../../public/images/no-image.png';
import { useRouter } from "next/router";
import Permalink from "../../../../utils/Permalink";
interface iProps {
  data: any;

}
const ComplimentYourOutfits = (props:iProps) => {
  const route = useRouter();
  return (
    <section className="mt-4 mt-md-5 complement pb-5">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-12">
            <div className="heading2">
              <h2>Compliment your Outfits</h2>
            </div>
          </div>
          <div className="col-md-12 mt-4 mt-lg-5 position-relative sliderView">
            <div className="Preference-slider slick-slider">
              <Slider {...preferenceSliderSetting}>
                {props.data.map((info: any, index: number) => {
                  return (
                    <div className="thumb position-relative text-center" key={index} >
                      <div className="bg1" style={{backgroundImage:`url(${info.image})`,margin:10}} >
                        <Image
                          onClick={() => route.replace(Permalink.ofProduct(info))}
                          className="w-100 cursor-pointer"
                          src={info?.image ? info?.image: NoImage}
                          alt=""
                          width={370}
                          height={509}
                        />
                        <div className="overlay text-start p-3 outfit">
                          <p className="fs-12 font-r text-color-1" onClick={() => route.replace(Permalink.ofProduct(info))} >
                          {info.description}
                          </p>
                        </div>
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

export default ComplimentYourOutfits;
