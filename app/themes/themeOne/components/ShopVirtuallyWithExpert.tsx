import React from "react";

const ShopVirtuallyWithExpert = () => {
  return (
    <section className="expertshop mt-4 mt-md-5">
      <div className="row">
        <div className="col-md-12 col-lg-6 order-2 order-lg-0 align-self-center">
          <div className="leftbar">
            <h3>Shop virtually with a Product Expert.</h3>
            <p className="fs-29 my-4 my-md-5">
              Enjoy the live store shopping experience over a video call.
            </p>
            <a href="/appointment" className="btn ms-auto fs-29">
              Book Appointment
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
        </div>
        <div className="col-md-12 col-lg-6">
          <img className="w-100" src="images/appointment.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ShopVirtuallyWithExpert;
