import API from "../../app/constants/APIEndpoints";
import constants from "../../app/constants/constant";
import { HTTPBaseService } from "../HTTPBaseService";
import Toast from "../../utils/Toast";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import useWishlistStore from "../../zustand/wishlist";

export class Wishlist extends HTTPBaseService {
  private static classInstance?: Wishlist;
  constructor(token: string) {
    super(constants.baseURL, token);
  }

  public static getInstance(token?: string) {
    if (!this.classInstance) {
      this.classInstance = new Wishlist(token ?? "");
    }

    return this.classInstance;
  }

  static async getWishlistEntry() {
    let wishListId = localStorage.getItem("WISHLIST_ENTRY");

    if (wishListId) {
      return new Promise((resolve: any, reject: any) => {
        resolve(wishListId);

      });
    } else {
      let obj = Wishlist.getInstance();
      return obj.createWishlistEntry();
    }

  }

  public createWishlistEntry() {
    return new Promise((resolve: any, reject: any) => {
      let params = {
        type: "entry",
      };
      this.instance
        .post(API.CREATE_WISHLIST_ENTRY, params)
        .then(async (response) => {
          if (response.status == 200) {
            let wistList = response.data.data.id ?? "";

            localStorage.setItem("WISHLIST_ENTRY", wistList);
            let obj = Wishlist.getInstance();
            let associationid = await obj.wishListAssociationWithCustomer(
              wistList
            );
            resolve(associationid);
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
  }

  public wishListAssociationWithCustomer = async (id: any) => {
    let params = {
      data: [
        {
          type: "wishlist",
          id: id,
        },
      ],
    };
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(
          API.ADD_WISHLIST_WITH_CUSTOMER +
            LocalStorageService.getCustomerId() +
            "/relationships/cwishlists",
          params
        )
        .then((response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";
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

  public addToWishList = async (pId: any) => {
    let params = {
      data: [
        {
          type: "product",
          id: pId,
        },
      ],
    };

    let entryId = await Wishlist.getWishlistEntry();

    return new Promise((resolve: any, reject: any) => {
      this.instance
        .post(
          API.ADD_PRODUCT_WISHLIST + entryId + "/relationships/products",
          params
        )
        .then(async (response) => {
          if (response.status == 200) {
            let message = response.data.msg ?? "";

            let obj = Wishlist.getInstance();
            await obj.getWishlist();
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

  public getWishlist = async () => {

    return new Promise((resolve: any, reject: any) => {
      this.instance
        .get(API.GET_WISHLIST + LocalStorageService.getCustomerId())
        .then((response) => {
          if (response.status == 200) {
            let productIds: any = [];
            // if(response?.data?.included){
            //     response?.data?.included?.cwishlists[0]?.relationships?.wproducts?.data?.map((item: any) => {
            //       productIds.push(item.id)
            //     }
            //   )
            // }
            let newWishlist: any = []
                response?.data?.included?.cwishlists?.map((each: any) => {
                    if (each?.relationships?.wproducts) {
                        if (each?.relationships.wproducts?.data?.length > 0) {
                            newWishlist.push({id:each.relationships?.wproducts?.data[0].id,entry_id:each.id})
                            productIds.push(each.relationships?.wproducts?.data[0].id)
                        }
                    }
                })
                LocalStorageService.setWishlistIDEntry_ID(newWishlist)

                LocalStorageService.setWishlist(productIds);
                useWishlistStore.setState({
                  wishlistItems:productIds,
                  count:productIds.lenght

                });

            resolve(newWishlist);
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

  static isWishlistProduct(id: string) {
    let data = LocalStorageService.getWishlist();
    return data?.includes(id) || false;
  }

  public deleteWishListItem = async (entry_id: any,id:any) => {
    let entryId = await Wishlist.getWishlistEntry();
    let data = [
      {
        type: "product",
        id: id,
      },
    ];
    return new Promise((resolve: any, reject: any) => {
      this.instance
        .delete(
          API.DELETE_WISHLIST_ITEM + entry_id + "/relationships/products",
          { data: data }
        )
        .then(async (response) => {
          if (response.status == 200) {
            let message = response.data;
            let obj = Wishlist.getInstance();
            await obj.getWishlist();
            resolve(response);
          } else {
            let message = response.data.message;
            Toast.showError(message);
            let obj = Wishlist.getInstance();
            await obj.getWishlist();
            reject(response);
          }
        })
        .catch((error) => {
          Toast.showError(error.message);
          reject(error);
        });
    });
  };

  public deleteWishListEntry = async (id: any) => {

    return new Promise((resolve: any, reject: any) => {
      this.instance
        .delete(
          API.DELETE_WISHLIST_ENTRY + id,
        )
        .then(async (response) => {
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
