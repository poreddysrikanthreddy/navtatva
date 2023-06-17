import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Draggable from 'react-draggable';
import { customerSliderSetting, sliderNavSetting } from "../../../utils/sliderConfig";
import NoImage from "../../../public/images/no-image.png";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { useRouter } from "next/router";

const DetailMobile = (props: any) => {
  const router = useRouter();
  const { asPath } = router;
  const { setNextSlide } = props;
  const [mainImage, setMainImage] = useState<string>("");
  const [deltaPosition, setDeltaPosition] = useState<any>({ x: 0, y: 0 });
  const [enableShare, setEnableShare] = useState<boolean>(false);

  useEffect(() => {
    setMainImage(props?.data?.attributes?.images[0])
    return () => { };
  }, [props?.data?.id])

  const handleDrag = (e: any, ui: any) => {
    const { x, y } = deltaPosition;
    setDeltaPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY
    });
  }
  const scrollToViewSimilar = () => {
    const viewSimilar = document.getElementById("view-similar");
    console.log(viewSimilar)
    viewSimilar?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    if (deltaPosition.y > 250 || deltaPosition.y < -250) {
      setNextSlide(1)
    }
    return () => { };
  }, [deltaPosition])

  return (
    <div className="main d-lg-none d-block">
      <div className="discount-pdp">
        <ul className="d-flex align-item-center">
          <li className="list-inline-item"><img className="" src="/images/offer-discount.png" alt="" /></li>
          <li className="fs-42 list-inline-item ms-2 me-3">
            <p className="fs-90">20%</p>
            Discount
          </li>
          <li>  <p className="fs-34 offers">Get Upto 20% off on selected brands for the next 24hrs.</p></li>
        </ul>
      </div>
      <Draggable axis="y" onDrag={handleDrag}>
        <div className="slider slider-for draggable ui-widget-content">
          <Slider {...customerSliderSetting}>
            <div>
              <Image
                className="w-100"
                src={mainImage || NoImage}
                alt=""
                width={292}
                height={523}
              />
            </div>
          </Slider>
        </div>
      </Draggable>
      <div className="slider-button-area">
        <button className="sharebtn"
          onClick={() => setEnableShare(!enableShare)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <g opacity="0.5" clipPath="url(#clip0_1717_2528)">
              <path d="M4.5 11.25C5.74264 11.25 6.75 10.2426 6.75 9C6.75 7.75736 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 7.75736 2.25 9C2.25 10.2426 3.25736 11.25 4.5 11.25Z" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.5 6.75C14.7426 6.75 15.75 5.74264 15.75 4.5C15.75 3.25736 14.7426 2.25 13.5 2.25C12.2574 2.25 11.25 3.25736 11.25 4.5C11.25 5.74264 12.2574 6.75 13.5 6.75Z" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.5 15.75C14.7426 15.75 15.75 14.7426 15.75 13.5C15.75 12.2574 14.7426 11.25 13.5 11.25C12.2574 11.25 11.25 12.2574 11.25 13.5C11.25 14.7426 12.2574 15.75 13.5 15.75Z" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.52539 8.0251L11.4754 5.4751" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.52539 9.9751L11.4754 12.5251" stroke="black" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </g></svg>
        </button>
        <button onClick={() => scrollToViewSimilar()} className="btnview-similar">View Similar</button>
        {enableShare && <div className="social-share">
          <div className="network">
            <FacebookShareButton
              url={process.env.HOST_NAME + asPath}
              quote={props?.name}
              className="network__share-button"
            >
              <FacebookIcon
                size={"2rem"} // You can use rem value isntead of numbers
                round
              />
            </FacebookShareButton>
          </div>
          <div className="network mt-1">
          <TwitterShareButton
            url={process.env.HOST_NAME + asPath}
            title={props?.name}
            className="network__share-button"
          >
            <TwitterIcon size={"2rem"} round />
          </TwitterShareButton>
        </div>

        <div className="network mt-1">
          <WhatsappShareButton
             url={process.env.HOST_NAME + asPath}
             title={props?.name}
            separator=":: "
            className="network__share-button"
          >
            <WhatsappIcon size={"2rem"} round />
          </WhatsappShareButton>
        </div>
        </div>}
      </div>
      <div className="slider-nav">
        <Slider {...sliderNavSetting}>
          {
            props?.data?.attributes?.images?.map((item: any, index: number) => {
              return (
                <div key={index} className="slider-nav-item"
                  onClick={() => setMainImage(item)}
                >
                  <img
                    className="w-100"
                    src={item}
                    alt=""
                    width={86}
                    height={115}
                  />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
};

export default DetailMobile;
