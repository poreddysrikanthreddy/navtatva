import React from "react";
import Slider from "react-slick";
import { useRouter } from "next/router";
import Permalink from "../../../../utils/Permalink";
import { customerSliderSetting } from "../../../../utils/sliderConfig";
import Image from 'next/image';
import ModalImage from '../../../../public/images/modelslide-1.png';

const OurValuedCustomerSlider = () => {
  const router = useRouter();
  return (
    <section className="mt-4 mt-md-5 mt-lg-0 mostSearch">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-12 sliderView">
            <div className="Preference-slider">
              <Slider {...customerSliderSetting}>
                <div className="mx-0 ">
                  <a onClick={() => router.replace(Permalink.ofShop())}>
                    <Image
                      className="w-100"
                      src={ModalImage}
                      alt=""
                      width={440}
                      height={669}
                    />
                  </a>
                </div>
                <div className="mx-0">
                  <a onClick={() => router.replace(Permalink.ofShop())}>
                    <Image
                      className="w-100"
                      src={ModalImage}
                      alt=""
                      width={440}
                      height={669}
                    />
                  </a>
                </div>
                <div className="mx-0">
                  <a onClick={() => router.replace(Permalink.ofShop())}>
                    <Image
                      className="w-100"
                      src={ModalImage}
                      alt=""
                      width={440}
                      height={669}
                    />
                  </a>
                </div>
                <div className="mx-0">
                  <a onClick={() => router.replace(Permalink.ofShop())}>
                    <Image
                      className="w-100"
                      src={ModalImage}
                      alt=""
                      width={440}
                      height={669}
                    />
                  </a>
                </div>
                <div className=" mx-0">
                  <a onClick={() => router.replace(Permalink.ofShop())}>
                    <Image
                      className="w-100"
                      src={ModalImage}
                      alt=""
                      width={440}
                      height={669}
                    />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuedCustomerSlider;
