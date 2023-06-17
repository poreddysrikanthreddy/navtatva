import React, { useState } from "react";
import { useRouter } from "next/router";
import SectionHeader from "./SectionHeader";
import Permalink from "../../../../utils/Permalink";
import Image from 'next/image';
import SareeImage from '../../../../public/images/sarees.png';
import LehangsImage from '../../../../public/images/lehangs.png';
import ChuridarImage from '../../../../public/images/churidar.png';
import FancyImage from '../../../../public/images/fancy.png';

const MustInWardrobe = () => {
    const router = useRouter();
    const [rows,] = useState<any>([1, 2]);
    const [items,] = useState<any>([
        {
            "name": "SAREES",
            "image": SareeImage,
        },
        {
            "name": "SAREES",
            "image": LehangsImage,
        },
        {
            "name": "Churidars",
            "image": ChuridarImage,
        },
        {
            "name": "fancy",
            "image": FancyImage,
        },
    ]);
    return (
        <section className="mt-4 mt-md-5 pb-md-5 mb-5">
            <div className="wrapper">
                <div className="row">
                    <SectionHeader title={"Must haves In Your Wardrobe"} />
                    <div className="col-md-12 mt-4 mt-lg-5 position-relative  wardrobecate">
                        {
                            rows?.map((row: any, rIndex: number) => {
                                return (
                                    <div key={rIndex} className="row">
                                        {
                                            items?.map((item: any, iIndex: number) => {
                                                return (
                                                    <div key={iIndex} className="thumb col-sm-6 mb-4 mb-lg-0 col-lg-3 position-relative text-center">
                                                        <div className={"bg" + (iIndex + 1)}>
                                                            <a onClick={() => router.replace(Permalink.ofShop())}>
                                                                <Image className="w-100" src={item.image} alt="" width={342} height={568} />
                                                                <h4>{item.name}</h4>
                                                            </a>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MustInWardrobe;