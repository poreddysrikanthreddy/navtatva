import React from "react";
import Slider from "react-slick";
import { customerSliderSetting } from "../../../../utils/sliderConfig";
import SectionHeader from "./SectionHeader";
import Image from 'next/image';
import LogoImage from '../../../../public/images/logo.png';
import ClientImage from '../../../../public/images/client.png';
import ReviewImage1 from '../../../../public/images/review-1.png';
import ReviewImage2 from '../../../../public/images/review-2.png';
import ReviewImage3 from '../../../../public/images/review-3.png';

const OurValuedCustomers = () => {
  return (
    <section className="mt-5 mostSearch">
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"Our Valued Customers"} />
          <div className="col-md-12">
            <div className="customerSlider mt-4 mt-lg-5">
              <Slider {...customerSliderSetting}>
                <div className="contentInner p-4 p-xl-5">
                  <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                    <li className="d-inline-flex">
                      <span>
                        <Image
                          src={ClientImage}
                          alt="Detail image"
                          width={42}
                          height={55}
                        />
                      </span>
                      <h4 className="fs-29 font-sb ms-3">
                        Aarav Patel
                        <p className="fs-16 font-r text-start">
                          Certified Buyer
                        </p>
                      </h4>
                    </li>
                  </ul>
                  <Image
                    src={ReviewImage1}
                    className={"w-100"}
                    alt="Detail image"
                    width={380}
                    height={215}
                  />
                  <p className="mt-4 mt-md-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="contentInner p-4 p-xl-5">
                  <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                    <li className="d-inline-flex">
                      <span>
                        <Image
                          src={LogoImage}
                          alt="Detail image"
                          width={88}
                          height={48}
                        />
                      </span>
                      <h4 className="fs-29 font-sb ms-3">
                         Nick Jonas
                        <p className="fs-16 font-r text-start">
                          Certified Buyer
                        </p>
                      </h4>
                    </li>
                  </ul>
                  <Image
                    src={ReviewImage2}
                    className={"w-100"}
                    alt="Detail image"
                    width={380}
                    height={215}
                  />
                  <p className="mt-4 mt-md-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="contentInner p-4 p-xl-5">
                  <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                    <li className="d-inline-flex">
                      <span>
                        <Image
                          src={LogoImage}
                          alt="Detail image"
                          width={88}
                          height={48}
                        />
                      </span>
                      <h4 className="fs-29 font-sb ms-3">
                        Samya Pareek
                        <p className="fs-16 font-r text-start">
                          Certified Buyer
                        </p>
                      </h4>
                    </li>
                  </ul>
                  <Image
                    src={ReviewImage3}
                    className={"w-100"}
                    alt="Detail image"
                    width={380}
                    height={215}
                  />
                  <p className="mt-4 mt-md-5 ">
                    I really loved the fabric . It's pure cotton and soft. It is
                    going to fit you perfectly in the bust area but you might
                    need to alter it in the waist area.
                  </p>
                </div>
                <div className="contentInner p-4 p-xl-5">
                  <ul className="mb-4 mb-xl-5 d-block text-lg-center">
                    <li className="d-inline-flex">
                      <span>
                        <Image
                          src={LogoImage}
                          alt="Detail image"
                          width={88}
                          height={48}
                        />
                      </span>
                      <h4 className="fs-29 font-sb ms-3">
                        Manik Patra
                        <p className="fs-16 font-r text-start">
                          Certified Buyer
                        </p>
                      </h4>
                    </li>
                  </ul>
                  <Image
                    src={ReviewImage2}
                    className={"w-100"}
                    alt="Detail image"
                    width={380}
                    height={215}
                  />
                  <p className="mt-4 mt-md-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuedCustomers;
