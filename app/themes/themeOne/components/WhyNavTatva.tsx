import React from "react";
import { useRouter } from "next/router";
import Permalink from "../../../../utils/Permalink";

const WhyNavTatva = () => {
  const route = useRouter();
  return (
    <section className="whyNav position-relative pb-5">
      <div className="wrapper">
        <div className="heading3 pt-5">
          <h2>
            <span className="bg8">Why NavTatva?</span>
          </h2>
        </div>
        <div className="row mt-4 mt-lg-5">
          {/* <div className="col-md-12 col-lg-7">
                        <div className="row">
                            <div className="col-md-6 col-xl-5 mb-4 mb-lg-5">
                                <div className="whyBlock  h-100">
                                    <h3 className="fs-32 text-color-2">Discounts</h3>
                                    <p className="fs-14 font-r text-color-1 py-3 py-md-4 pe-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <a onClick={() => route.replace(Permalink.ofShop())} className="fs-14 font-sb text-color-3">
                                        Learn More
                                    </a>
                                    <div className="text-end">
                                        <img src="images/offers.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-7 mb-4 mb-lg-5">
                                <div className="whyBlock  h-100">
                                    <h3 className="fs-32 text-color-2">Discounts</h3>
                                    <p className="fs-14 font-r text-color-1 py-3 py-md-4 pe-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <a onClick={() => route.replace(Permalink.ofShop())} className="fs-14 font-sb text-color-3">
                                        Learn More
                                    </a>
                                    <div className="text-end">
                                        <img
                                            className="w-100"
                                            src="images/No Delivery Charges.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-7  mb-4 mb-lg-0">
                                <div className="whyBlock  h-100">
                                    <h3 className="fs-32 text-color-2">Discounts</h3>
                                    <p className="fs-14 font-r text-color-1 py-3 py-md-4 pe-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <a onClick={() => route.replace(Permalink.ofShop())} className="fs-14 font-sb text-color-3">
                                        Learn More
                                    </a>
                                    <div className="text-end">
                                        <img
                                            className="w-100"
                                            src="images/Customer Service.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-5  mb-4 mb-lg-0">
                                <div className="whyBlock  h-100">
                                    <h3 className="fs-32 text-color-2">Discounts</h3>
                                    <p className="fs-14 font-r text-color-1 py-3 py-md-4 pe-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <a onClick={() => route.replace(Permalink.ofShop())} className="fs-14 font-sb text-color-3">
                                        Learn More
                                    </a>
                                    <div className="text-end">
                                        <img
                                            className="w-100"
                                            src="images/customer-offers.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
          <div className="col-12">
            <div className="whyBlock h-100 whyBlock-full">
              <h3 className="fs-32 text-color-2">Discounts</h3>
              <h6 className="fs-14  text-color-1 py-4 pe-5">
                ONLINE SHOPPING MADE EASY AT NavTatva If you would like to
                experience the best of online shopping for men, women and kids
                in India, you are at the right place. NavTatva is the ultimate
                destination for fashion and lifestyle, being host to a wide
                array of merchandise including clothing, footwear, accessories,
                jewellery, personal care products and more. It is time to
                redefine your style statement with our treasure-trove of trendy
                items. Our online store brings you the latest in designer
                products straight out of fashion houses. You can shop online at
                NavTatva from the comfort of your home and get your favourites
                delivered right to your doorstep.
              </h6>
              <h6 className="fs-14  text-color-1 py-4 pe-5">
                BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION Be it clothing,
                footwear or accessories, NavTatva offers you the ideal
                combination of fashion and functionality for men, women and
                kids. You will realise that the sky is the limit when it comes
                to the types of outfits that you can purchase for different
                occasions.
              </h6>
              <br />

              <button
                onClick={() => route.replace(Permalink.ofShop())}
                className="fs-12 font-sb text-color-3"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                Learn More
              </button>

              <br />
              <br />
              <div className="text-end">
                <img src="images/DoorStep Delivery.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNavTatva;
