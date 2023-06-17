import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
export class RupifiService extends HTTPBaseService {
  private static classInstance?: RupifiService;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new RupifiService(token ?? "");
    }

    return this.classInstance;
  }

  public getRupifiAccessToken = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.RUPIFI.GET_ACCESS_TOKEN, data)
        .then((response) => {
          //let message = response.data.detail;
          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public checkRupifiCreditEligibility = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.RUPIFI.CHECK_CREDIT_ELIGIBILITY, data)
        .then((response) => {
          //let message = response.data.detail;
          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public createRupifiPayment = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.RUPIFI.CREATE_PAYMENT, data)
        .then((response) => {
          //let message = response.data.detail;
          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public captureRupifiAmount = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.RUPIFI.CAPTURE_AMOUNT, data)
        .then((response) => {
          //let message = response.data.detail;
          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public checkRupifiPaymentStatus = ({ merchantPaymentRefId }: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.RUPIFI.CHECK_PAYMENT_STATUS + merchantPaymentRefId)
        .then((response) => {
          //let message = response.data.detail;
          if (response.status == 200) {
            resolve(response);
          } else {
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
