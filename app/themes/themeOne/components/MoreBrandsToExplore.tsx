import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Permalink from "../../../../utils/Permalink";
import SectionHeader from "./SectionHeader";
import { useRouter } from "next/router";
import Image from 'next/image';
import BrandNoImage from '../../../../public/images/brand-1.png';
interface IProps {
  brand: Array<any>;
  loading: boolean
}

const MoreBrandsToExplore = (props: IProps) => {
  const route = useRouter();
  const [brands, setBrands] = useState([1, 2, 3, 4, 5])
  const router = useRouter();
  const handleClick = (brand: string) => {
    route.replace({
      pathname: Permalink.ofShop(),
      query: {
        "brand": brand
      },
    });
  }
  return (
    <section className="mt-4 mt-md-5 brand">
      <div className="wrapper">
        <div className="row">
          <SectionHeader title={"More Brands To Explore"} />
          <div className="col-md-12 mt-4 mt-lg-5">
            <ul className="d-block text-center">
              {props.brand.map((info, index) => {
                return (
                  <li
                    key={index}
                    style={{ backgroundColor: "white" }}
                    className="align-items-center justify-content-center d-inline-flex"
                  >
                    <a 
                      onClick={() => handleClick(info.name)} 
                      title={info.name}
                    >
                      <Image
                        src={info?.image? info?.image: BrandNoImage}
                        alt="brand"
                        width={180}
                        height={180}
                      />
                    </a>
                  </li>
                );
              })}

              {props.loading && brands.map((info, index) => {
                return (
                  <li
                    key={index}
                    className="align-items-center justify-content-center d-inline-flex">
                    <Skeleton style={{ width: 180, height: 100 }} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreBrandsToExplore;

const params = {
  id: "bridal",
};
