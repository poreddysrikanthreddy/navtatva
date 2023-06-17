import React, { useEffect } from "react";
import Image from "next/image";

interface iProps {
  onClick?: () => void;
  onMouseLeave?: () => void;
  title: string;
  image: string;
  isLoading?: boolean;
}

function NavMenuCategory(props: iProps) {
  return (
    <div className="thumb position-relative text-center category-thumb">
      <a
        onClick={() => {
          props.onClick && props.onClick();
        }}
        onMouseEnter={() => {
          props.onClick && props.onClick();
        }}
        onMouseLeave={() => {
          props.onMouseLeave && props.onMouseLeave();
        }}
      >
        <Image
            className="img-fluid w-100"
            src={props.image}
            alt={props.title}
            width={220}
            height={227}

        />
        {/* <img className="img-fluid w-100" src={props.image} alt={props.title} /> */}
        <p className="fs-20">{props.title}</p>
        <div className="overlay" />
      </a>
    </div>
  );
}

export default NavMenuCategory;
