import React, { useState } from "react";

const SortByBlock = (props: any) => {
  const [sortBy, setSortBy] = useState("");

  const handleSort = (type: string) => {
    setSortBy(type);
    const currentPath = props.route.pathname;
    const currentQuery = { ...props.route.query };
    currentQuery["sort_by"] = type;
    props.route.replace({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  return (
    <>
      <div className="sorting mt-mb-4 mb-md-5">
        <span className="textlight d-none d-md-inline-block">Sort</span>
        <button
          type="button"
          className={"btn-sorting " + (sortBy == "relevance" ? "active" : "")}
          onClick={() => handleSort("relevance")}
          style={{ marginRight: 5 }}
        >
          Relevance
        </button>
        <button
          type="button"
          className={"btn-sorting " + (sortBy == "popular" ? "active" : "")}
          onClick={() => handleSort("popular")}
          style={{ marginRight: 5 }}
        >
          Popular
        </button>
        <button
          type="button"
          className={"btn-sorting " + (sortBy == "created_at" ? "active" : "")}
          onClick={() => handleSort("created_at")}
          style={{ marginRight: 5 }}
        >
          All New
        </button>
        <button
          type="button"
          className={"btn-sorting " + (sortBy == "price" ? "active" : "")}
          onClick={() => handleSort("price")}
          style={{ marginRight: 5 }}
        >
          Price <i className="fas fa-angle-down fa-fw" />
        </button>
        <button
          type="button"
          className={
            "btn-sorting " +
            (sortBy == "minimum_order_quantity" ? "active" : "")
          }
          onClick={() => handleSort("minimum_order_quantity")}
          style={{ marginRight: 5 }}
        >
          Min Order Qty <i className="fas fa-angle-down fa-fw" />
        </button>
      </div>
    </>
  );
};

export default SortByBlock;
