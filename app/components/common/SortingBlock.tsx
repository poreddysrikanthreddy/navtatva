import React from "react";

const SortingBlock = () => {
    return (
        <div className="sorting-detail my-5">
            <span className="textlight">Age</span>
            <button type="button" className="btn-sorting active">
            Under 10
            </button>
            <button type="button" className="btn-sorting">
            10-30
            </button>
            <button type="button" className="btn-sorting">
            30-50
            </button>
            <button type="button" className="btn-sorting">
            Above 50{" "}
            </button>
            <br />
            <span className="textlight">Material</span>
            <button type="button" className="btn-sorting active">
            Khaadi
            </button>
            <button type="button" className="btn-sorting">
            Cotton
            </button>
            <button type="button" className="btn-sorting">
            Nylon
            </button>
            <button type="button" className="btn-sorting">
            Rayon
            </button>
            <button type="button" className="btn-sorting">
            Mixed
            </button>
            <button type="button" className="btn-sorting">
            Silk
            </button>
            <br />
            <span className="textlight">Discount Range</span>
            <button type="button" className="btn-sorting active">
            10%
            </button>
            <button type="button" className="btn-sorting">
            20%
            </button>
            <button type="button" className="btn-sorting">
            30%
            </button>
            <button type="button" className="btn-sorting">
            40%
            </button>
        </div>
    )
}

export default SortingBlock;