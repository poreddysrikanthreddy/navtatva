import React from "react";

const SavedCards = () => {

    return (
        <div className="col-12 col-lg-8 col-xl-9 ">
            <div className="rightside-bar-area ">
                <button type="button" className="add-address-btn btn fs-13 btn-sm">
                    <i className="fas fa-plus me-1" />
                    <span>Add Payment Method</span>
                </button>
                <div>
                    <label className="form-label mt-4">Saved Cards</label>
                    <ul>
                        <li className="list-inline-item mb-3">
                            <a href="#">
                                <img
                                    src="images/credit-1.png"
                                    alt="logo"
                                    className="img-fluid desk-logo"
                                />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <img
                                    src="images/credit-2.png"
                                    alt="logo"
                                    className="img-fluid desk-logo"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div >)
}

export default SavedCards;