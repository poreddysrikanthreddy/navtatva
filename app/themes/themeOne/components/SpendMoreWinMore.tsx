import React from "react";

const SpendMoreWinMore = () => {
    return (
        <section className="mt-4 mt-md-5">
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading2">
                            <h2>Spend More, Win More</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 mt-lg-5">
                    <div className="col-md-12 col-lg-8">
                        <div className="row">
                            <div className="col-sm-4 mb-4 md-sm-0">
                                <img
                                    className="w-100"
                                    src="images/coin-img1.png"
                                    alt="Coin"
                                />
                            </div>
                            <div className="col-sm-4 mb-4 md-sm-0">
                                <img
                                    className="w-100"
                                    src="images/coin-img2.png"
                                    alt="Coin"
                                />
                            </div>
                            <div className="col-sm-4">
                                <img
                                    className="w-100"
                                    src="images/coin-img3.png"
                                    alt="Coin"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4 mt-4 mt-lg-0">
                        <div className="activeCoins">
                            <table className="table table-strip">
                                <tbody>
                                    <tr>
                                        <td className="fs-14 text-color-1">
                                            <span className="text-color-2 font-sb me-2">4.</span>{" "}
                                            Aarav Patel
                                        </td>
                                        <td className="fs-14 text-color-3 font-sb">
                                            <img className="me-2" src="images/coins.png" alt="" />
                                            5068 Coins{" "}
                                            <small className="fs-10 text-color-1">This Month</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fs-14 text-color-1">
                                            <span className="text-color-2 font-sb me-2">5.</span>{" "}
                                            Aarav Patel
                                        </td>
                                        <td className="fs-14 text-color-3 font-sb">
                                            <img className="me-2" src="images/coins.png" alt="" />
                                            5068 Coins{" "}
                                            <small className="fs-10 text-color-1">This Month</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fs-14 text-color-1">
                                            <span className="text-color-2 font-sb me-2">5.</span>{" "}
                                            Aarav Patel
                                        </td>
                                        <td className="fs-14 text-color-3 font-sb">
                                            <img className="me-2" src="images/coins.png" alt="" />
                                            5068 Coins{" "}
                                            <small className="fs-10 text-color-1">This Month</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fs-14 text-color-1">
                                            <span className="text-color-2 font-sb me-2">5.</span>{" "}
                                            Aarav Patel
                                        </td>
                                        <td className="fs-14 text-color-3 font-sb">
                                            <img className="me-2" src="images/coins.png" alt="" />
                                            5068 Coins{" "}
                                            <small className="fs-10 text-color-1">This Month</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fs-14 text-color-1">
                                            <span className="text-color-2 font-sb me-2">89</span>{" "}
                                            You
                                        </td>
                                        <td className="fs-14 text-color-3 font-sb">
                                            <img className="me-2" src="images/coins.png" alt="" />
                                            5068 Coins{" "}
                                            <small className="fs-10 text-color-1">This Month</small>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a href="button" className="btn w-100 fs-22 mt-4">
                            Explore More Rewards
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={22}
                                height={22}
                                fill="currentColor"
                                className="bi bi-arrow-up-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                                />
                            </svg>
                        </a>
                    </div>
                    <p className="fs-26 winner font-sb text-color-1 text-center mt-4 mt-lg-5">
                        Top 3 Winners get{" "}
                        <small className="text-color-2">Assured Cashback upto ₹999</small>{" "}
                        on Next Purchase
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SpendMoreWinMore;