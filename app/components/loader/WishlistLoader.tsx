import React from "react";
import Skeleton from "react-loading-skeleton";
import ClipLoader from "react-spinners/ClipLoader";
import 'react-loading-skeleton/dist/skeleton.css'


const WishlistLoader = () => {
    return (<div className="row text-center m-3">

        <div className="col-12 col-md-4 col-lg-3 ">

            <Skeleton style={{ height: 480, width: 300, borderRadius: 20 }} />
        </div>

        <div className="col-12 col-md-4 col-lg-3 d-none d-md-block d-lg-block">

            <Skeleton style={{ height: 480, width: 300, borderRadius: 20 }} />
        </div>

        <div className="col-12 col-md-4 col-lg-3 d-none d-md-block d-lg-block">

            <Skeleton style={{ height: 480, width: 300, borderRadius: 20 }} />
        </div>

        <div className="col-12 col-md-4 col-lg-3 d-none d-md-block d-lg-block">

            <Skeleton style={{ height: 480, width: 300, borderRadius: 20 }} />
        </div>
    </div>

    );
};

export default WishlistLoader;
