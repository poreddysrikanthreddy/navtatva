import React from "react";
import { useRouter } from "next/router";
import Permalink from "../../../utils/Permalink";

const EmptyCart = (props: any) => {
  const route = useRouter();
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="fs-30 font-b text-color-2 list-inline-item">
            Your cart is empty!
          </h1>
          <p className="fs-15 mt-2 text-color-2">Add items to it now.</p>
          <div>
            <a href="/shop" className="btn mt-3">
              Shop Now!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
