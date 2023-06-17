import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { Address } from "../../../network/gateway/Address";
import useUserStore from "../../../zustand/store";
import AddAddress from "../../../app/components/common/AddAddress";
import Toast from "../../../utils/Toast";
import Validators from "../../../utils/Validator";
import Loader from "../loader/loader";
import useLoaderStore from "../../../zustand/loader";
import { Modal } from "react-bootstrap";

const SaveAddress = () => {
  const [allAddress, setAllAddress] = useState<any>([]);
  const isLogin = useUserStore((state: any) => state.isLogin, shallow);
  const setLoginPopup = useUserStore((state: any) => state.showLogin);
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [editAddressStaus, setEditAddressStatus] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const enableLoader = useLoaderStore((state: any) => state.setShow);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const [addressFields, setAddressFields] = useState<any>({
    type: "address",
    county: "Sunnyville",
    country: "IN",
  });

  useEffect(() => {
    if (isLogin) {
      getAllAddress();
    } else {
      setLoginPopup(true);
    }
  }, [isLogin]);

  useEffect(() => {
    if (!isShowing) {
      setAddressFields(
        JSON.parse(
          JSON.stringify({
            type: "address",
            county: "Sunnyville",
            country: "IN",
          })
        )
      );
    }
  }, [isShowing]);
  function getAllAddress() {
    Address.getInstance()
      .getAllAddress()
      .then((data: any) => {
        setAllAddress(data?.data.data);
        setLoading(false);
      })
      .catch((error) => {});
  }
  function test(data: any, all: any) {
    let addressStatus = true;
    Object.entries(all).map((item: any) => {
      if (
        item[1].first_name === data.first_name &&
        item[1].line_1 == data.line_1 &&
        item[1].city == data.city &&
        item[1].postcode == data.postcode
      ) {
        return (addressStatus = false);
      }
    });
    return addressStatus;
  }
  const handleChange = (e: any) => {
    console.log("e", e.target.name);
    addressFields[e.target.name] = e.target.value;
    setAddressFields(JSON.parse(JSON.stringify(addressFields)));

    //  addressFields[e.target.name] = e.target.value;
  };
  function validateForm() {
    let formIsValid = true;
    if (!addressFields["first_name"]) {
      formIsValid = false;
      Toast.showError("Please enter your First Name.");
    } else if (!addressFields["last_name"]) {
      formIsValid = false;
      Toast.showError("Please enter your Last Name.");
    } else if (!addressFields["line_1"]) {
      formIsValid = false;
      Toast.showError("Please enter your Address.");
    } else if (!addressFields["city"]) {
      formIsValid = false;
      Toast.showError("Please enter your City.");
    } else if (!addressFields["postcode"]) {
      formIsValid = false;
      Toast.showError("Please enter your Postal Code.");
    } else if (!Validators.isNumberOnly(addressFields["postcode"])) {
      formIsValid = false;
      Toast.showError("Please enter valid Postal Code.");
    }
    return formIsValid;
  }
  function checkout(e: any) {
    e.preventDefault();

    const all = Object.assign({}, allAddress);
    const data = Object.assign({}, addressFields);
    let isDuplicateAddress = !test(data, all);
    if (isDuplicateAddress) {
      Toast.showError("*Address already exists.");
      return;
    }
    let validationFunction = validateForm();
    if (validationFunction) {
      if (!isDuplicateAddress) {
        addAddress();
      }
    }
  }

  function addAddress() {
    if (isLogin && validateForm()) {
      enableLoader(true);
      const param = {
        data: addressFields,
      };
      Address.getInstance()
        .addAddress(param)
        .then((data: any) => {
          enableLoader(false);
          setAllAddress([...allAddress, data.data.data]);
          setIsShowing(false);
          setAddressFields(
            JSON.parse(
              JSON.stringify({
                type: "address",
                county: "Sunnyville",
                country: "IN",
              })
            )
          );
        })
        .catch((error) => {
          enableLoader(false);
          console.log("error", error);
        });
    } else {
      enableLoader(false);
      setLoginPopup(true);
    }
  }

  function editAddress(id: any, index: number) {
    setAddressFields(JSON.parse(JSON.stringify(allAddress[index])));
    setIsShowing(true);
    setEditAddressStatus(false);
  }

  function updateAddress() {
    if (isLogin && validateForm()) {
      const all = Object.assign({}, allAddress);
      const data = Object.assign({}, addressFields);
      let isDuplicateAddress = !test(data, all);
      if (isDuplicateAddress) {
        Toast.showError("*Please Update Address");
        return;
      }
      const param = {
        data: addressFields,
      };
      if (!isDuplicateAddress) {
        enableLoader(true);
        Address.getInstance()
          .updateAddress(param)
          .then((data: any) => {
            enableLoader(false);
            const filteredAllAddressData = allAddress.filter(
              (each: any) => each.id !== data.data.data.id
            );
            setAllAddress([...filteredAllAddressData, data.data.data]);

            setIsShowing(false);
            setAddressFields(
              JSON.parse(
                JSON.stringify({
                  type: "address",
                  county: "Sunnyville",
                  country: "IN",
                })
              )
            );
          })
          .catch((error) => {
            console.log("error", error);
          });
      }
    }
  }

  function deleteAddress(id: any, index: any) {
    setDeleteStatus(false)
     enableLoader(true);
    Address.getInstance()
      .deleteAddress(id)
      .then((response: any) => {
        if (response.statusText === "OK") {
          enableLoader(false);
          let newAllAddress = allAddress;
          newAllAddress.splice(index, 1);
          setAllAddress([...newAllAddress]);
          //con
        }
      })
      .catch((error) => {
         enableLoader(false);
        console.log("error", error);
      });
  }

  return (
    <>
      <div className="col-12 col-lg-8 col-xl-9 ">
        <div className="rightside-bar-area ">
          <button
            type="button"
            className="add-address-btn btn fs-13 btn-sm"
            onClick={() => {
              setIsShowing(true);
              setEditAddressStatus(true);
            }}
          >
            <i className="fas fa-plus me-1" />
            <span>Add Address</span>
          </button>
          <AddAddress
            isShowing={isShowing}
            setIsShowing={setIsShowing}
            handleChange={handleChange}
            onSave={checkout}
            addressFields={addressFields}
            editAddressStaus={editAddressStaus}
            onUpdate={updateAddress}
          />
          {loading && <Loader loading={loading} />}
          {allAddress.map((item: any, index: number) => {
            return (
              <>
                <div className="address-box-area">
                  <div className="row">
                    <div className="col-12 col-md-8">
                      <div className="address-box-content">
                        <h5 className="location-name text-primary mb-2">
                          {item.first_name}
                        </h5>
                        <p>
                          {item.line_1},<br />
                          {item.line_2}
                          <br />
                          {item.city} ({item.country}) - {item.postcode}
                          <br />
                        </p>
                        <div className="address-button-area mt-4">
                          <button
                            type="button"
                            className="address-btn"
                            onClick={() => {
                              editAddress(item.id, index);
                            }}
                          >
                            EDIT
                          </button>
                          <button type="button" className="address-btn">
                            SHARE
                          </button>
                          <button
                            type="button"
                            className="address-btn"
                            onClick={() => {
                              // deleteAddress(item.id, index);
                              setDeleteStatus(true)
                            }}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-12 col-md-4">
                    <div className="map-area">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030850.3776743794!2d132.52611295403742!3d-24.76215616266133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1661429956943!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div> */}
                  </div>
                  <Modal
                    show={deleteStatus}
                    animation={false}
                    // size={"md"}
                    id="checkOut"
                  >
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => {
                        setDeleteStatus(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                      </svg>
                    </button>

                    <div className="modal-body">
                      {" "}
                      Are you sure you want to delete address?
                    </div>
                    <div className="modal-footer">
                      <a
                        className="btn btn-danger fs-16 p-2"
                        onClick={() => setDeleteStatus(false)}
                      >
                        No
                      </a>
                      <a
                        className="btn fs-16 p-2"
                        onClick={() => {
                          deleteAddress(item.id, index);
                        }}
                      >
                        Yes
                      </a>
                    </div>
                  </Modal>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SaveAddress;
