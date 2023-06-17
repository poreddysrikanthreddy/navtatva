import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
export class TypeSenseService extends HTTPBaseService {
  private static classInstance?: TypeSenseService;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new TypeSenseService(token ?? "");
    }

    return this.classInstance;
  }

  public getFacetAttributes = (type:string) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_FACET_ATTRIBUTES+type)
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

  public getProductCollections = (data: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(API.GET_PRODUCT_COLLECTIONS, data)
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
