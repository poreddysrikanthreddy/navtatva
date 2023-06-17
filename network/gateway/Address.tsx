import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";

import { v4 as uuidv4 } from "uuid";
import LocalStorageService from "../../utils/storage/LocalStorageService";
export class Address extends HTTPBaseService {
  private static classInstance?: Address;
  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new Address(token ?? "");
    }
    return this.classInstance;
  }

  static getCustomerId() {
    let customer_id: any = LocalStorageService.getCustomerId();
    return customer_id;
  }

  public addAddress = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.ADD_ADDRESS + "/" + Address.getCustomerId(), data)
        .then((response) => {
          if (response.status == 200) {
            //console.log("this is address response", response);
            let message = response.data.msg ?? "";
            Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(
            JSON.parse(error.response.request.response).msg.detail
          );
          reject(error);
        });
    });
  };

  public updateAddress = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .put(
          API.UPDATE_ADDRESS +
            "/" +
            Address.getCustomerId() +
            "/" +
            data.data.id,
          data
        )
        .then((response) => {
          if (response.status == 200) {
            // console.log("this is address response", response);
            let message = response.data.msg ?? "";
            Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(
            JSON.parse(error.response.request.response).msg.detail
          );
          reject(error);
        });
    });
  };

  public getAllAddress = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_ALL_ADDRESS + "/" + Address.getCustomerId())
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";

            //Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(error.message);
          reject(error);
        });
    });
  };
  public deleteAddress = (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .delete(API.DELETE_ADDRESS + "/" + Address.getCustomerId() + "/" + id)
        .then((response) => {
          if (response.status == 200) {
            let message = response.data;
            Toast.showSuccess(message);
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

  public getCustomerOrder = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_CUSTOMER_ORDER)
        .then((response) => {
          if (response.status == 200) {
            //console.log("this is get customer order",response)
            let message = response.data.msg ?? "";
            //Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(error.message);

          reject(error);
        });
    });
  };
}
