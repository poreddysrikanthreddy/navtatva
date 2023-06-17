import { useRouter } from "next/router";
import { useState } from "react";
import { RatingService } from "../../../network/gateway/RatingService";
import Permalink from "../../../utils/Permalink";
import LocalStorageService from "../../../utils/storage/LocalStorageService";
import Toast from "../../../utils/Toast";
import NoImage from "../../../public/images/no-image.png";
import useLoaderStore from "../../../zustand/loader";

const OrderItems = (props: any) => {
  const router = useRouter();
  const [openReviewModel, setOpenReviewModel] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [reviewTitle, setReviewTitle] = useState<string>("");
  const [ratings,] = useState<any>([1, 2, 3, 4, 5]);
  const [display, setDisplay] = useState<boolean>(true);
  const enableLoader = useLoaderStore((state: any) => state.setShow);
  function getSize() {
    let data = props?.meta?.variant?.filter((info: any) => {
      return info.name == "Size";
    });
    if (data && data.length > 0) return data[0].options?.name;
  }

  function getColor() {
    let data = props?.meta?.variant?.filter((info: any) => {
      return info.name == "Color";
    });
    if (data && data.length > 0) return data[0].options?.name;
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function getDate(data: any) {
    let newDate = new Date(data);
    newDate.setDate(newDate.getDate() + 3);
    return (
      newDate.getDate() +
      " " +
      months[newDate.getMonth()] +
      " " +
      newDate.getFullYear()
    );
  }

  // function cancelOrder(id: any, index: number) {
  //     props.cancelOrder(id, index)

  // }

  const handleSubmit = (sku: string) => {

    if(rating<1){
      Toast.showError("Please select your rating")
    }else if(reviewTitle==""){
      Toast.showSuccess("Please enter review comments");
    }else{
      let customer_id: any = LocalStorageService.getCustomerId();
      let customer_name: any = localStorage.getItem("customer_name");
      enableLoader(true)

      RatingService.getInstance()
      .addProductRating(
        sku,
        {
          "rating_value": rating,
          "user_id": customer_id,
          "review_title": reviewTitle,
          "review_detail": "",
          "media_urls": [],
          "user_name": customer_name || "Dummy name"
        })
      .then((response: any) => {
        enableLoader(false)
        if (response.data) {
          setDisplay(false)
           Toast.showSuccess("Review submitted successfully.")
        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => {  enableLoader(false)});
    }
  }

  return (
    <>
      <div className="bgbar position-relative mt-2 ms-0">
        <div className="row mb-3">
          <div className="col-md-12 col-lg-9">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-3">
                <div className="imgbar">
                  <img
                    className="w-100"
                    src={props?.attributes?.mainImage || NoImage}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-8 col-lg-8 position-relative">
                <h3 className="fs-16 font-sb text-color-2 cursor-pointer"
                  onClick={() => router.replace(Permalink.ofProduct(props))}
                >{props.name}</h3>
                <p className="fs-14 font-r text-color-1 pt-1 prodes">
                  {props?.attributes?.description}
                </p>
                <div className="d-flex pt-3 pb-2">

                  <p className="fs-14 font-sb text-color-1">
                    Size: <span className="text-color-2">{getSize()}</span>
                  </p>
                  <p className="fs-14 font-sb text-color-1 ms-4">
                    Colour: <span className="text-color-2">{getColor()}</span>
                  </p>
                  <p className="fs-14 font-sb text-color-1 ms-4">
                    QTY: <span className="text-color-2">{props?.quantity}</span>
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-10 col-xl-6 mt-3">
                {props.status === 'cancelled' ? <><a className="btn-can d-inline-block">
                  <svg style={{ marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                  </svg>
                  Cancelled
                </a> </> : <> <a href="#" className="btn-gray d-inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-up-right me-2" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                  </svg>
                  Arriving {getDate(props?.meta?.timestamps?.created_at)}
                </a></>}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3 offet-1">
            {
              !openReviewModel && (
                <a
                  onClick={() => setOpenReviewModel(true)}
                  className="btn-new btn-bor d-block mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" style={{ marginRight: 5 }}>
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                  Leave Feedback
                </a>
              )
            }
            {
              openReviewModel && display && (
                <>
                  <form>
                    <div className="mb-3 rating-form">
                      <label
                        htmlFor="rating"
                        className="form-label"
                      >

                      </label>
                      <ul className="list-inline">
                        {
                          ratings?.map((item: any, index: number) => {
                            return (
                              <li
                                key={index}
                                onClick={() => setRating(item)}
                                className={`list-inline-item ${item<=rating?"yellow-star":"gray-star"}`}>
                                  <i className="fas fa-star fa-fw"></i>
                              </li>
                            )
                          })
                        }
                      </ul>
                    </div>
                    <div className="mb-3 mt-4">
                      <label htmlFor="reviewTitle" className="form-label">
                        Enter comments <span className="star-red">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="reviewTitle"
                        aria-describedby="emailHelp"
                        onChange={(event: any) => {
                          setReviewTitle(event.target.value);
                        }}
                        value={reviewTitle}
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={(event) => {
                          handleSubmit(props?.sku)
                        }}
                        type="button"
                        className="btn btn-sm btn-light mt-3"
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItems;
