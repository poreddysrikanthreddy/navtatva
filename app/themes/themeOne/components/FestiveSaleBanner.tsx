import React, { useEffect, useState } from "react";
import { CatalogService } from "../../../../network/gateway/Catalog";
import Slider from "react-slick";
import { bannerSliderSettings } from "../../../../utils/sliderConfig";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import constants from "../../../constants/constant";
import Image from 'next/image';

const FestiveSaleBanner = () => {

    const [bannerUrl, setBannerUrl] = useState<any>()
    const [loading, setLoading] = useState(true)
    const [banners, setBanners] = useState<any>([1])
    useEffect(() => {
        getBannersData();

    }, []);

    function getBannersData() {
        CatalogService.getInstance()
            .getBanner()
            .then((info: any) => {
                setBannerUrl(info?.data?.data[0].attributes.image.data.attributes.url);
                setLoading(false)
            });
    }

    return (
        <>
            {loading ?
                <Skeleton height={500} style={{ borderRadius: 25, }} /> :
                <section className="category mt-5 mt-md-5">
                    <Slider {...bannerSliderSettings}>
                        {banners?.map((items: any, index: number) => {
                            return (
                                <div key={index}>
                                    <div className="col-md-12 col-lg-12" >
                                        <Image
                                            className="w-100"
                                            src={`${constants.assetsBaseURL}${bannerUrl}`}
                                            alt=""
                                            width={1440}
                                            height={511}
                                        />
                                    </div>
                                </div>)
                        })}
                    </Slider>
                </section>
            }
        </>
    )
}

export default FestiveSaleBanner;