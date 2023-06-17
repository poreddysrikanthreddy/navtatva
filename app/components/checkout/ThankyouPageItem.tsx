import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CatalogService } from "../../../network/gateway/Catalog";
import Permalink from "../../../utils/Permalink";
import NoImage from "../../../public/images/no-image.png";

const ThankyouPageItem = (props: any) => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState<any>();

  useEffect(() => {
    console.log(props)
    getProduct(props.product_id);
  }, []);

  function getProduct(id: any) {
    CatalogService.getInstance()
      .getProducDetail(id)
      .then((data: any) => {
        setProductDetails(data?.data?.data);
      })
      .catch((error) => {});
  }

  function getSize(each: any) {
    let data = each?.meta?.variations.filter((info: any) => {
      return info.name == "Size";
    });

    if (data && data.length > 0) return data[0].options[0]?.name;
  }

  function getColor(each: any) {
    let data = each?.meta?.variations.filter((info: any) => {
      return info.name == "Color";
    });
    if (data && data.length > 0) return data[0].options[0]?.name;
  }

  return (
    <div className="bgbar position-relative mt-2 ms-0">
      <div className="row">
        <div className="col-md-3 col-lg-3">
          <div className="imgbar ">
            <Image
              className="w-100"
              src={productDetails?.attributes?.images[0] ?? NoImage}
              alt=""
              width={312}
              height={422}
            />
          </div>
        </div>
        <div className="col-md-9 position-relative">
          <h3 className="fs-16 font-sb text-color-2 cursor-pointer" onClick={() => router.replace(Permalink.ofProduct(props))}>{props?.name}</h3>
          <p className="fs-14 font-r text-color-1 pt-1 prodes">
            {productDetails?.attributes?.description}
          </p>
          <div className="d-flex pt-3">
            <p className="fs-14 font-sb text-color-1">
              Size:{" "}
              <span className="text-color-2">{getSize(productDetails)}</span>
            </p>
            <p className="fs-14 font-sb text-color-1 ms-4">
              Colour:{" "}
              <span className="text-color-2">{getColor(productDetails)}</span>
            </p>
            <p className="fs-14 font-sb text-color-1 ms-4">
              Qty: <span className="text-color-2">{props.quantity}</span>
            </p>
          </div>
          <div className="d-flex topBarAlign">
            <p className="fs-16 font-b text-color-3 align-self-center me-3">
              ₹{props.value.amount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPageItem;
