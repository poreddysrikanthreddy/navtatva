import React from "react";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const Loader = (props: any) => {
  return (
    <div className="col-md-12" style={{height: props?.height ?? "100px", padding: props?.padding ?? "10%"}}>
      <ClipLoader size={50} cssOverride={override} loading={props.loading} />
    </div>
  );
};

export default Loader;
