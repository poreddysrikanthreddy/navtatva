import { NextPage } from "next";
import { useEffect, useState } from "react";
import ProuctWishlist from "../../app/components/product/ProductWishlist";
import Header from "../../app/themes/themeOne/components/Header";

const MycollectionKurtisScreen: NextPage = () => {
  const [wishlistItems, setWishlistItems] = useState<any>([1, 2, 3, 4, 5, 6, 7, 8, 9,]);

  return (
    <div className="mycollection">
      <div className="wrapper">
        {/* Header */}
        <Header />
        {/* End Header */}
      </div>

      <section className="productBar m-5 m-md-5">
        <ul className="breadcrumb">
          <li className="fs-40 font-b text-color-2 list-inline-item">
            <a className="text-color-1" href="#">
              My Collections
            </a>
          </li>
          <li className="fs-40 font-b text-color-2 list-inline-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </li>
          <li className="fs-40 font-b text-color-2 list-inline-item">
            <span className="text-color-3">Kurtis</span>
          </li>
        </ul>

        <div className="mt-4 mt-lg-5">
          <div className="row">
            {wishlistItems?.length &&
              wishlistItems?.map((item: any, index: number) => {
                return <ProuctWishlist key={index} {...item} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );

};

export default MycollectionKurtisScreen;
