import React from "react";
import { useRouter } from "next/router";
import Permalink from "../../../utils/Permalink";
const EmptyCart = (props: any) => {
  const route = useRouter();
  return (
    <>
      <div className="text-center">
        <h1 className="fs-30 font-b text-color-2 list-inline-item">
          Wishlist is empty!!
        </h1>
        <p className="fs-15 mt-2 text-color-2">Add items to it now.</p>
        <div>
          <a
            className="btn mt-3"
            onClick={() => route.replace(Permalink.ofShop())}
          >
            Click to add item in wishlist
          </a>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
