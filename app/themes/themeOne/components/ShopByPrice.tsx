import { useRouter } from "next/router";
import React, { useState } from "react";
import Permalink from "../../../../utils/Permalink";
import constants from "../../../constants/constant";
import SectionHeader from "./SectionHeader";

const ShopByPrice = () => {

    const route = useRouter();
    const [priceList, setPriceList] = useState<any>([
        {
            "label": "999",
            "value": 999
        },
        {
            "label": "1,999",
            "value": 1999
        },
        {
            "label": "3,999",
            "value": 3999
        },
        {
            "label": "6,999",
            "value": 6999
        },
        {
            "label": "9,999",
            "value": 9999
        },
    ])

    const handleClick = (price: number) => {
        route.replace({
            pathname: Permalink.ofShop(),
            query: {
                "shop_by_price": price
            },
        });
    }
    return (
        <section className="ShopPrice">
            <div className="row">
                <SectionHeader title={"Shop By Price"}/>
                <div className="col-md-12 pt-5">
                    <ul className="text-center d-block d-lg-flex justify-content-center">
                        {
                            priceList?.map( (item: any, index: number) => {
                                return <li 
                                    key={index}
                                    className="bg1 fs-64 mx-3 d-inline-block d-lg-flex align-items-center justify-content-center cursor-pointer"
                                    onClick={() => handleClick(item.value)}
                                >
                                    {constants.CURRENCY_SYMBOL.INR.HI+item.label}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ShopByPrice;