import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { OrderTakingAppService } from "../../../network/gateway/OrderTakingAppService";
import OrderTakingAppTitle from "./OrderTakingAppTitle";
import CapturePayment from "./listButtons/CapturePayment";
import ViewProducts from "./listButtons/ViewProducts";

const OrdersList = (props: any) => {
  const [orderList, setOrderList] = useState<any>([]);
  useEffect(() => {
    getOrderList();
    return () => {};
  }, []);

  const getOrderList = () => {
    OrderTakingAppService.getInstance("")
      .getOrderList()
      .then((response: any) => {
        if (response.data) {
          setOrderList(response?.data?.data);
        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => {});
  };

  const [columnDefs] = useState([
    { field: "_id", headerName: "OrderID" },
    { field: "sellerName", headerName: "Seller Name" },
    { field: "orderTotal", headerName: "Order Total" },
    { field: "", headerName: "Products", cellRenderer: ViewProducts },
    { field: "orderStatus", headerName: "Order Status" },
    { field: "paymentStatus", headerName: "Payment Status" },
    { field: "createdAt", headerName: "Created At" },
    { field: "updatedAt", headerName: "Updated At" },
    { field: "", headerName: "Action", cellRenderer: CapturePayment },
  ]);

  return (
    <div className="shoppingCart orderTakingApp">
      <div className="wrapper">
        <section className="cartItem mt-4 mt-md-5">
          <div className="row">
            <OrderTakingAppTitle />
            <div className="col-lg-12 text-end">
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => props.checkOrders()}
              >
                Create Order
              </button>{" "}
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => props.logout()}
              >
                Logout
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-lg-3">
              <h3 className="fs-32 font-b text-color-2 list-inline-item">
                ORDERS LIST
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <br />
              <div className="ag-theme-alpine" style={{ height: 499 }}>
                <AgGridReact
                  rowData={orderList}
                  columnDefs={columnDefs}
                  pagination={true}
                  paginationPageSize={10}
                ></AgGridReact>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </div>
    </div>
  );
};

export default OrdersList;
