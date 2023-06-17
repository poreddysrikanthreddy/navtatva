import React, { useState } from "react";
import type { NextPage } from "next";
import PLP from "../../../app/page/PLP";
import { useRouter } from "next/router";

const ProductListingByCategorySlugScreen: NextPage = () => {

  // const router = useRouter();
  // const { slug, id } = router.query;


   return (
     <PLP />
  );
};

export default ProductListingByCategorySlugScreen;

