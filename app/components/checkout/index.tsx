import { useEffect } from "react";
import shallow from "zustand/shallow";
import { Cart } from "../../../network/gateway/Cart";
import useUserStore from "../../../zustand/store";

const CheckoutItem = (props: any) => {
  function getSize() {
    let data = props.meta?.variant.filter((info: any) => {
      return info.name == "Size";
    });

    if (data && data.length > 0) return data[0].options?.name;
  }
  function getColor() {
    let data = props.meta?.variant.filter((info: any) => {
      return info.name == "Color";
    });
    if (data && data.length > 0) return data[0].options?.name;
  }

  //console.log("this is checkout props", props)

  const removeCartitem = () => {
    props.removeCart(props?.id);
  };
  return (
    <div className="row">
      <div className="col-md-3 col-lg-4">
        <div className="imgbar ">
          <img className="w-100" src={props.image?.href} alt="" />
        </div>
      </div>

      <div className="col-md-9 col-lg-8 position-relative">
        <h3 className="fs-16 font-sb text-color-2">{props.name}</h3>
        <p className="fs-14 font-r text-color-1 pt-1 prodes">
          {props.description}
        </p>
        <div className="d-flex py-3 align-items-center">
          <p className="fs-14 font-sb text-color-1">
            Size: <span className="text-color-2">{getSize()}</span>
          </p>
          <p className="fs-14 font-sb text-color-1 ms-4">
            Colour: <span className="text-color-2">{getColor()}</span>
          </p>
          <div className="d-flex topBarAlign position-static ms-2">
            <div className="quantity d-flex px-2 ">
              <label className="fs-14 font-r text-color-1 pt-1">Qty</label>
              <select
                className="form-select fs-14 font-r"
                aria-label="Default select example"
              >
                <option value={1}>{props.quantity}</option>
                {/* <option value={2}>2</option>
                  <option value={3}>3</option> */}
              </select>
            </div>
          </div>
        </div>
        {/* <div className="d-flex pb-3 align-items-center">
            <p className="fs-14 font-sb text-color-1">
              Size: <span className="text-color-2">XL</span>
            </p>
            <p className="fs-14 font-sb text-color-1 ms-4">
              Colour: <span className="text-color-2">Blue</span>
            </p>
            <div className="d-flex topBarAlign position-static ms-2">
              <div className="quantity d-flex px-2 ">
                <label className="fs-14 font-r text-color-1 pt-1">
                  Qty
                </label>
                <select
                  className="form-select fs-14 font-r"
                  aria-label="Default select example"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex pb-3 align-items-center">
            <p className="fs-14 font-sb text-color-1">
              Size: <span className="text-color-2">XL</span>
            </p>
            <p className="fs-14 font-sb text-color-1 ms-4">
              Colour: <span className="text-color-2">Blue</span>
            </p>
            <div className="d-flex topBarAlign position-static ms-2">
              <div className="quantity d-flex px-2 ">
                <label className="fs-14 font-r text-color-1 pt-1">
                  Qty
                </label>
                <select
                  className="form-select fs-14 font-r"
                  aria-label="Default select example"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
          </div> */}
        <div className="d-flex pb-3">
          <p className="fs-14 font-sb text-color-1">
            Total: <span className="text-color-2">{props.value.amount}</span>
          </p>
        </div>
        <div className="d-flex mt-4 mb-4">
          <a className="fs-14 font-sb text-color-3" href="#">
            Move to Wishlist
          </a>
          <a
            className="fs-14 font-sb text-color-3 ms-4"
            onClick={() => {
              removeCartitem();
            }}
          >
            Remove
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CheckoutItem;
