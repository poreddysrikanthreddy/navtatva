import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { ChangeEventHandler } from "react";
import shallow from "zustand/shallow";
import useCartStore from "../../../zustand/cart";
import LoadingSpinner from "./loadingSpinner";
import Badge from "react-bootstrap/Badge";
import { useRouter } from "next/router";
import Permalink from "../../../utils/Permalink";
import useUserStore from "../../../zustand/store";

function CartButton() {
  const router = useRouter();
  const cartCount = useCartStore((state: any) => state.count, shallow);
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const isLogin = useUserStore((state: any) => state.isLogin, shallow);
  useEffect(() => {
    return () => { };
  }, []);

  return (
    <li className="list-inline-item">
      {cartCount > 0 ? <Badge bg="danger">{cartCount}</Badge> : null}
      <a className="cart rounded-circle d-block" onClick={() => {
        if (isLogin) {
          router.replace(Permalink.ofCart())
        } else {
          useUserStore.setState({ loginPopup: true });
        }
      }} title={""}>
        <img src="/images/cart.png" alt="" />
      </a>
    </li>
  );
}

export default CartButton;
