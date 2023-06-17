import React, { useEffect, useState } from "react";
import ProductSmallBlock from "../../app/components/product/ProductSmallBlock";
import { products } from "../../app/constants/sampleData";
import GroupProductBlock from "../../app/components/product/GroupProductBlock";
import ProductQuickView from "../../app/components/product/ProductQuickView";
import Header from "../../app/components/common/Header";
import Footer from "../../app/components/common/Footer";
import CartPopup from "../../app/components/common/CartPopup";
import SearchPopup from "../../app/components/common/SearchPopup";
import CategoryFilter from "../../app/components/common/CategoryFilter";
import SearchBlock from "../../app/components/common/SearchBlock";
import SortingBlock from "../../app/components/common/SortingBlock";
import SortByBlock from "../../app/components/common/SortByBlock";
import Paging from "../../app/components/common/Paging";
import { useRouter } from "next/router";
import { CatalogService } from "../../network/gateway/Catalog";
import { Cart } from "../../network/gateway/Cart";
import LocalStorageService from "../../utils/storage/LocalStorageService";
import Toast from "../../utils/Toast";
import useUserStore from "../../zustand/store";
import Loader from "../components/loader/loader";
import ProductQuickViewLoader from "../components/loader/ProductQuickViewLoader";
import { Wishlist } from "../../network/gateway/Wishlist";
import TypeSenseProductSmallBlock from "../components/product/TypeSenseProductSmallBlock";
import { TypeSenseService } from "../../network/gateway/TypeSenseService";
import useLoaderStore from "../../zustand/loader";
import shallow from "zustand/shallow";

const PLP = () => {
  const route = useRouter();
  const {
    slug,
    id,
    q,
    category,
    color,
    price,
    brand,
    discount_percentage,
    material,
    occasion,
    print,
    page,
    sort_by,
    shop_by_price,
    catalogues,
  } = route.query;
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(1);
  const [found, setFound] = useState<number>(0);
  const userData = useUserStore((state: any) => state.userInfo);
  const setLoginPopup = useUserStore((state: any) => state.showLogin);
  const [openProductQuickView, setOpenProductQuickView] =
    useState<boolean>(false);

  const [login, setLogin] = useState<boolean>(false);
  const [productId, setProductId] = useState<string>("");
  const [openCartPopup, setOpenCartPopup] = useState<boolean>(false);
  const [productListing, setProductListing] = useState<Array<any>>([]);
  const [selectedProductData, setSelectedProductData] = useState<Array<any>>(
    []
  );
  const [productsBundle, setProductsBundle] = useState<Array<any>>([]);
  const isPageLoading = useLoaderStore((state: any) => state.show, shallow);
  const enableLoader = useLoaderStore((state: any) => state.setShow);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<boolean>(true);

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(
      "product-search-detail",
      "product-category-page"
    );
  });

  useEffect(() => {
    if (productId != "") {
      addToCart(`${productId}`);
      setProductId("");
    }
    return () => {};
  }, [userData]);

  useEffect(() => {
    //getProductLists("1661b1f9-64c5-44c4-aeeb-d7e8e9385fc4");
    getProductCollections();
    return () => {};
  }, [id, route.query]);

  /*   function getProductList() {
    CatalogService.getInstance()
      .getProductListing()
      .then((response: any) => {
        if (response.data) {
          setProductListing(response.data.data);
        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => { });
  } */

  /*   function getProductLists(id: any) {
    CatalogService.getInstance()
      .getProductByNode(id)
      .then((response: any) => {
        setLoading(false);
        if (response.data) {
          setProductListing(response.data.data);

        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => { });
  } */

  function getFilterQuery() {
    let queryString = "";

    if (category) {
      queryString += "category:=" + category + "&&";
    }
    if (color) {
      queryString += "color:=" + color + "&&";
    }
    if (price) {
      let priceRange: any = price;
      priceRange = priceRange.split(",");
      queryString +=
        "sale_price:>" +
        priceRange[0] +
        "&&sale_price:<" +
        priceRange[1] +
        "&&";
    }
    if (brand) {
      queryString += "brand:=" + brand + "&&";
    }
    if (discount_percentage) {
      queryString += "discount_percentage:<" + discount_percentage + "&&";
    }
    if (material) {
      queryString += "material:=" + material + "&&";
    }
    if (occasion) {
      queryString += "occasion:=" + occasion + "&&";
    }
    if (print) {
      queryString += "print:=" + print + "&&";
    }
    if (shop_by_price) {
      queryString += "sale_price:=" + shop_by_price + "&&";
    }
    if (catalogues) {
      queryString += "catalogues:=" + catalogues + "&&";
    }
    return queryString;
  }

  function getSortQuery() {
    let queryString = "created_at:desc";
    switch (sort_by) {
      case "revelance":
        //queryString="revelance:asc";
        break;
      case "popular":
        //queryString="popular:asc";
        break;
      case "created_at":
        queryString = "created_at:asc";
        break;
      case "price":
        queryString = "sale_price:asc";
        break;
      case "minimum_order_quantity":
        queryString = "minimum_order_quantity:asc";
        break;
      default:
        break;
    }
    return queryString;
  }

  function getProductCollections() {
    enableLoader(true)
    // setLoading(true);
    let requestJSON: any = {
      q: q ?? "",
      query_by: "name,category,color,brand,material,occasion,description",
      page: Number(page) || 1,
      per_page: 20,
      filter_by: getFilterQuery(),
      sort_by: getSortQuery(),
    };
    TypeSenseService.getInstance()
      .getProductCollections(requestJSON)
      .then((response: any) => {
        if (response.data) {
          setFound(response.data.found || 0);
          setPageCount(
            Math.ceil(
              response.data.found / response.data.request_params.per_page
            )
          );
          setProductListing(response.data.data);
        } else {
          console.log("ERROR:", response.data);
        }
        // setLoading(false);
        enableLoader(false)
      })
      .catch((error) => {
        enableLoader(false)
      });
  }

  function getProductDetail(id: any) {
    CatalogService.getInstance()
      .getProducDetail(id)
      .then((response: any) => {
        if (response.data) {
          setSelectedProductData(response.data.data);
          setOpenProductQuickView(true);
          enableLoader(false);
        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => {});
  }

  function addToCart(id: string) {
    enableLoader(true);
    const params = {
      data: {
        id: id,
        type: "cart_item",
        quantity: 1,
      },
    };
    Cart.getInstance()
      .addToCart(params)
      .then((info) => {
        enableLoader(false);
        console.log("info", info);
      })
      .catch((error) => {
        enableLoader(false);
        console.log("error", error);
      });
  }

  function addToWishList(id: string) {
    enableLoader(true);
    Wishlist.getInstance()
      .createWishlistEntry()
      .then((info) => {
        console.log("info", info);
      })
      .then(() => {
        Wishlist.getInstance()
          .addToWishList(id)
          .then((info) => {
            console.log("info", info);
            enableLoader(false);
            localStorage.removeItem("WISHLIST_ENTRY");
          })
          .catch((error) => {
            enableLoader(false);
            console.log("error", error);
          });
      })
      .catch((error) => {
        enableLoader(false);
        console.log("error", error);
      });
  }

  function getProductsBundle() {
    CatalogService.getInstance()
      .getProductsBundle()
      .then((response: any) => {
        if (response.data) {
          setProductsBundle(response.data.data);
        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => {});
  }
  function deletwishlistItem(id: string) {
    let entry_id;
    LocalStorageService.getWishlistIDEntry_ID().data?.map((each: any) => {
      if (each.id === id) {
        return (entry_id = each.entry_id);
      }
    });
    Wishlist.getInstance()
      .deleteWishListItem(entry_id, id)
      .then((response: any) => {})
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <>
      <div className="wrapper">
        {/* Header */}
        <Header />
        {/* End Header */}
        {/* Category */}
        {/* <Login
          onSuccess={() => {}}
          visible={login}
          onClose={() => setLogin(false)}
        /> */}
        <section className="category-section">
          <div className="container-fluid">
            <div className="row">
              <CategoryFilter
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
              />
              <div className="col-lg-9 col-xl-10">
                <div className="rightside-bar">
                  <SearchBlock setOpenSearchBox={setOpenSearchBox} />
                  {found > 0 && <SortByBlock route={route} />}
                  <div className="row">
                    {/* {loading && <Loader loading={loading} />} */}
                    {productListing.map((item: any, index: number) => {
                      return (
                        <TypeSenseProductSmallBlock
                          key={index}
                          {...item}
                          onClickQuickView={(id: any) => {
                            getProductDetail(id);
                            enableLoader(true);
                          }}
                          setOpenCartPopup={setOpenCartPopup}
                          addToCart={(id: string) => {
                            if (LocalStorageService.getAccessToken()) {
                              addToCart(`${id}`);
                            } else {
                              setProductId(`${id}`);
                              setLoginPopup(true);
                            }
                          }}
                          addToWishList={(id: string) => {
                            if (LocalStorageService.getAccessToken()) {
                              addToWishList(`${id}`);
                            } else {
                              setProductId(`${id}`);
                              setLoginPopup(true);
                            }
                          }}
                          onDeletwishlistItem={(id: string) => {
                            if (LocalStorageService.getAccessToken()) {
                              deletwishlistItem(`${id}`);
                            } else {
                              setLoginPopup(true);
                            }
                          }}
                        />
                      );
                    })}
                    {/*
                    {productsBundle.length >0 && productsBundle.map((item: any, index: number) =>{
                      return(
                        <GroupProductBlock {...item.attributes}
                      setOpenProductQuickView={setOpenProductQuickView}
                      setOpenCartPopup={setOpenCartPopup}
                    />

                      )
                    })} */}

                    {/* {products?.slice(2, 4)?.map((item: any, index: number) => {
                      return (
                        <ProductSmallBlock
                          key={index}
                          {...item}
                          setOpenProductQuickView={setOpenProductQuickView}
                          setOpenCartPopup={setOpenCartPopup}
                        />
                      );
                    })} */}
                  </div>
                  {found == 0 && !loading && (
                    <div className="text-center">
                      <br />
                      <b>No products found mathing the applied search.</b>
                    </div>
                  )}
                </div>
                {/* <SortingBlock />
                <div className="rightside-bar">
                  <div className="row">
                    {products?.slice(4, 5)?.map((item: any, index: number) => {
                      return (
                        <ProductSmallBlock
                          key={index}
                          {...item}
                          setOpenProductQuickView={setOpenProductQuickView}
                          setOpenCartPopup={setOpenCartPopup}
                        />
                      );
                    })}
                    {products?.slice(5, 6)?.map((item: any, index: number) => {
                      return (
                        <ProductSmallBlock
                          key={index}
                          {...item}
                          setOpenProductQuickView={setOpenProductQuickView}
                          setOpenCartPopup={setOpenCartPopup}
                        />
                      );
                    })}
                  </div>
                </div>*/}
                {found > 0 && (
                  <Paging
                    currentPage={page || 1}
                    pageCount={pageCount}
                    router={route}
                  />
                )}
              </div>
            </div>
            <button
              className="btn-filter d-lg-none"
              onClick={() => {
                setFilterStatus(!filterStatus);
              }}
              style={{ marginBottom: "20%" }}
            >
              Filters
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M1.79242 1.19238H15.5386C15.6909 1.24579 15.829 1.33335 15.9422 1.44834C16.0554 1.56334 16.1408 1.70272 16.1918 1.85582C16.2429 2.00892 16.2582 2.17166 16.2366 2.33159C16.215 2.49152 16.1571 2.64439 16.0674 2.77849L10.7803 8.5942V15.996L6.55073 12.8238V8.5942L1.26372 2.77849C1.17393 2.64439 1.11604 2.49152 1.09446 2.33159C1.07288 2.17166 1.08819 2.00892 1.13922 1.85582C1.19026 1.70272 1.27565 1.56334 1.38887 1.44834C1.50209 1.33335 1.64013 1.24579 1.79242 1.19238Z"
                  stroke="#300056"
                  strokeWidth="1.5861"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
        {/* End Category */}
        {/* Footer */}
        <Footer />
        {/* End Footer */}
      </div>
      {/* Cart Popup */}
      <CartPopup
        openCartPopup={openCartPopup}
        setOpenCartPopup={setOpenCartPopup}
      />
      {/* Search Popup */}
      <SearchPopup
        openSearchBox={openSearchBox}
        setOpenSearchBox={setOpenSearchBox}
      />
      {!isPageLoading && openProductQuickView && (
        <ProductQuickView
          openProductQuickView={openProductQuickView}
          setOpenProductQuickView={setOpenProductQuickView}
          data={selectedProductData}
          onSelectedProduct={(id: any) => {
            getProductDetail(id);
          }}
          enableLoader={enableLoader}
        />
      )}
    </>
  );
};

export default PLP;
