import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
import { Cart } from "./Cart";
import LocalStorageService from "../../utils/storage/LocalStorageService";

export class Auth extends HTTPBaseService {
  private static classInstance?: Auth;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new Auth(token ?? "");
    }

    return this.classInstance;
  }
  static getCustomerId() {
    let customer_id: any = LocalStorageService.getCustomerId()
    return customer_id;
  }


  public login = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.LOGIN, data)
        .then(async (response) => {
          if (response.status == 200) {
            console.log("login data", response);
            let message = response.data.msg ?? "Login success";
            const { customer_id, token, expires } = response.data.data;
            const { refId } = response?.data;
            localStorage.setItem("cartRef",refId);
            localStorage.setItem("expires",expires);
            let params = {
              data: [
                {
                  type: "customer",
                  id: customer_id,
                },
              ],
            };
            //console.log("login data", params);
            LocalStorageService.setToken(token);
            LocalStorageService.setCustomerId(customer_id);


            let obj = Cart.getInstance();
            LocalStorageService.setCustomerId(customer_id);

            await obj.cartAssociationWithCustomer(params);

            Toast.showSuccess(message);
            resolve(response);
          } else {
            let message = response.data.msg ?? "Login failed";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          // Toast.showError(
          //   JSON.parse(error.response.request.response).msg.detail
          // );
          reject(error);
        });
    });
  };

  public getCustomerData = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_CUSTOMER + "/" + Auth.getCustomerId())
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";
            // Toast.showSuccess(message);
            localStorage.setItem("customer_name",response?.data?.data?.userDetails?.name)
            resolve(response);
          } else {
            let message = response.data.msg ?? "";
            Toast.showError(message);
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          Toast.showError(error.message ??
            JSON.parse(error.response.request.response).msg.detail
          );
          reject(error);
        });
    });
  };



  public register = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.SIGNUP, data)
        .then(async (response) => {
          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          reject(error);
        });
    });
  };

  public verify = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .put(API.VERIFY_CUSTOMER, data)
        .then(async (response) => {
          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          console.log("Error", error);
          reject(error);
        });
    });
  };
}
