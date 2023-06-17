import React from "react";
import { useRouter } from "next/router";
import SectionHeader from "./SectionHeader";
import Permalink from "../../../../utils/Permalink";
import Image from 'next/image';
import AnarkaliKurtiImage from '../../../../public/images/anarkali-kutis.jpg';
import BridalImage from '../../../../public/images/bridal.jpg';

const MostSearchedStyles = () => {
    const router = useRouter();
    return (
        <section className="mt-4 mt-md-5 mostSearch pb-5">
            <div className="wrapper">
                <div className="row">
                    <SectionHeader title={"Most Searched Styles"} />
                    <div className="col-md-12 mt-4 mt-lg-5 position-relative">
                        <div className="row">
                            <div className="col-width-5 mb-4  text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <Image
                                            src={AnarkaliKurtiImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={521}
                                            height={344}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Anarkali Kurtis
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-width-5 mb-4 text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())} >
                                        <Image
                                            src={AnarkaliKurtiImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={521}
                                            height={344}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Sarees
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-width-2 mb-4  text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <Image
                                            src={BridalImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={331}
                                            height={341}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Bridal
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-width-2 mb-4 text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <Image
                                            src={BridalImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={331}
                                            height={341}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Lehengas
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-width-5 mb-4  text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <Image
                                            src={AnarkaliKurtiImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={521}
                                            height={344}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Ghagra Choli Sets
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-width-5 mb-4 text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <Image
                                            src={AnarkaliKurtiImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={521}
                                            height={344}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Sherwani
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-width-5 mb-4  text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <Image
                                            src={AnarkaliKurtiImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={521}
                                            height={344}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Anarkali Kurtis
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-width-5 mb-4 text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <Image
                                            src={AnarkaliKurtiImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={521}
                                            height={344}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Sarees
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-width-2  text-center">
                                <div className="stylebg position-relative">
                                    <a onClick={() => router.replace(Permalink.ofShop())}>
                                        <Image
                                            src={BridalImage}
                                            className="w-100"
                                            alt="Detail image"
                                            width={331}
                                            height={341}
                                        />
                                        <div className="overlay text-start">
                                            <p className="fs-32 pb-4 font-Bsoul text-white d-flex align-items-end justify-content-center h-100">
                                                Bridal
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MostSearchedStyles;