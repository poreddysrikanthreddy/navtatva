import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
export class RupifiUCService extends HTTPBaseService {
  private static classInstance?: RupifiUCService;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new RupifiUCService(token ?? "");
    }

    return this.classInstance;
  }

  public checkRupifiCreditEligibility = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.RUPIFI_UC.CHECK_CREDIT_ELIGIBILITY, data)
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
        .post(API.RUPIFI_UC.CREATE_PAYMENT, data)
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
        .post(API.RUPIFI_UC.CAPTURE_AMOUNT, data)
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
        .get(API.RUPIFI_UC.CHECK_PAYMENT_STATUS + merchantPaymentRefId)
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

  public cancelPayment = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.RUPIFI_UC.CANCEL_PAYMENT, data)
        .then((response) => {
          //let message = response.data.detail;
          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error?.response?.data?.msg?.detail || error.message);
          reject(error);
        });
    });
  };

  public successPayment = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.RUPIFI_UC.SUCCESS_PAYMENT, data)
        .then((response) => {
          //let message = response.data.detail;
          if (response.status == 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error?.response?.data?.msg?.detail || error.message);
          reject(error);
        });
    });
  };

}
