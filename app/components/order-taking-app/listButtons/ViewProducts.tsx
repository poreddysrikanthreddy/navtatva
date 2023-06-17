import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

const ViewProducts = ({ data }: any) => {

    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-xs btn-green" onClick={() => handleShow()}>View Products</button>
            <Modal show={show} onHide={handleClose} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Products list</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Vendor ID</th>
                                <th>Product ID</th>
                                <th>Product SKU</th>
                                <th>Product Title</th>
                                <th>Qty</th>
                                <th>Price</th>
                                <th>Discount(%)</th>
                                <th>Selling Price</th>
                                <th>GST(%)</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.products?.map( (item: any, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.vendorId}</td>
                                            <td>{item.productId}</td>
                                            <td>{item.sku}</td>
                                            <td>{item.productName}</td>
                                            <td>{item.qty}</td>
                                            <td>{item.price}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.sellingPrice}</td>
                                            <td>{item.gst}</td>
                                            <td>{item.total}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-xs btn-red" onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ViewProducts;