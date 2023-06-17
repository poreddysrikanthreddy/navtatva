import React, { useEffect } from "react";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import shallow from "zustand/shallow";
import useLoaderStore from "../../../zustand/loader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
};

const PageLoader = (props: any) => {
    const isLoading = useLoaderStore((state: any) => state.show, shallow);
    return (
        <>
            {isLoading && (
                <div className="page-loader">
                    <div className="loader-icon">
                        <ClipLoader size={50} cssOverride={override} loading={true} />
                    </div>
                </div>
            )}
        </>
    );
};

export default PageLoader;
