import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
export class CatalogService extends HTTPBaseService {
  private static classInstance?: CatalogService;

  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new CatalogService(token ?? "");
    }

    return this.classInstance;
  }

  public getAllCategory = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_CATEGORY)
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

  public getCategoryWithSubCategory = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_CATEGORY_TREE)
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
  public getBrand = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_BRANDS)
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

  public getOccasion = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_OCCASION)
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

  public getProductListing = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_PRODUCT_LIST)
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

  public getProducDetail = (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_PRODUCT_DETAIL + id)
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
          Toast.showError(error?.response?.data?.errors[0]?.title ?? error.message);
          reject(error);
        });
    });
  };
  public getProductByNode = (id: any) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_PRODUCT_BY_NODE + id)
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

  static getDomainName() {
    return "www.navtatva.fashion";
  }

  public getBanner = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_BANNER + CatalogService.getDomainName())
        .then((response) => {
          if (response.status == 200) {
            let message = response.data;
            //Toast.showSuccess(message);
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

  public getHomeContent = (serviceName: string) => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_HOME_CONTENT + serviceName)
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


  public getProductsBundle = () => {
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_PRODUCTS_BUNDLE)
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
}
