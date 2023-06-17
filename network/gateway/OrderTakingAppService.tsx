import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
import { RupifiService } from "./RupifiService";
export class OrderTakingAppService extends HTTPBaseService {
  private static classInstance?: OrderTakingAppService;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new OrderTakingAppService(token ?? "");
    }

    return this.classInstance;
  }

  public getSellerList = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.ORDER_TAKING_APP.GET_SELLERS)
        .then((response) => {
          if (response.status == 200) {
            resolve(response);
          } else {
            let message = response.data.message;
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public getOrderList = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.ORDER_TAKING_APP.GET_ORDERS)
        .then((response) => {
          if (response.status == 200) {
            resolve(response);
          } else {
            let message = response.data.message;
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public placeOrder = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.ORDER_TAKING_APP.PLACE_ORDER, data)
        .then((response) => {
          if (response.status == 200) {
            const { _id, sellerId, orderTotal } = response?.data?.data
              ? response?.data?.data
              : response?.data?.products;
            const requestJSON = {
              amount: {
                value: orderTotal,
              },
              autoCapture: false,
              callbackUrl:
                constants.baseURL + API.ORDER_TAKING_APP.CALLBACK_URL,
              merchantCustomerRefId: constants.RUPIFI.TEST_ACCOUNT ?? sellerId,
              merchantPaymentRefId: _id,
              redirectCancelUrl: constants.RUPIFI.REDIRECT_CANCEL_URL,
              redirectConfirmUrl: constants.RUPIFI.REDIRECT_CONFIRM_URL,
            };
            RupifiService.getInstance("")
              .createRupifiPayment(requestJSON)
              .then((response: any) => {
                if (response.status == 200) {
                  resolve(response);
                } else {
                  reject(response);
                }
              })
              .catch((error) => {
                console.log(error);
                reject(error);
              });
          } else {
            let message = response.data.message;
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public updateOrder = (data: any, orderId: string) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.ORDER_TAKING_APP.UPDATE_ORDER + orderId, data)
        .then((response) => {
          if (response.status == 200) {
            resolve(response);
          } else {
            let message = response.data.message;
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };
}
