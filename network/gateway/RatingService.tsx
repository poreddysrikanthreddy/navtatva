import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
export class RatingService extends HTTPBaseService {
  private static classInstance?: RatingService;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new RatingService(token ?? "");
    }

    return this.classInstance;
  }

  public getProductRating = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_PRODUCT_RATING(data))
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
          //Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public getProductRatingStats = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_PRODUCT_RATING_STATS(data))
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
          //Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public addProductRating = (sku: string, data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.ADD_PRODUCT_RATING({sku}), data)
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
