import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import API from "../app/constants/APIEndpoints";
import LocalStorageService from "../utils/storage/LocalStorageService";
import constants from "../app/constants/constant";
import useUserStore from "../zustand/store";
interface RefreshToken {
  status: number;
  data: {
    access_token: string;
  };
}

export abstract class HTTPBaseService {
  protected instance: AxiosInstance;
  protected token: string;
  protected readonly baseURL: string;

  public constructor(baseURL: string, token: string) {
    this.baseURL = baseURL;
    this.instance = axios.create({
      baseURL,
    });

    if (token && token != "") {
      this.token = token;
    } else {
      this.token = localStorage.getItem("access_token") ?? "";

      if (this.token == "") {
        //this.getToken();
      }
    }

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  async getToken() {
    const refreshToken = await this.refreshToken();
    if (refreshToken.status === 200) {
      this.token = refreshToken.data?.access_token || "";
      localStorage.setItem("hashToken", this.token);
    }
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response) => {
      if (response.headers && response.headers.authorization) {
        const responseToken = (response.headers.authorization as string).split(
          " "
        )[1];
        this.token = responseToken;

        localStorage.setItem("hashToken", this.token);
      }
      return response;
    }, this.handleError);
  };

  private handleRequest = async (config: AxiosRequestConfig) => {
    // if (this.token == "") {
    //   const refreshToken = await this.refreshToken();
    //   if (refreshToken.status === 200) {
    //     this.token = refreshToken.data.access_token;
    //     localStorage.setItem("hashToken", this.token);
    //     console.log("hashToken", this.token);
    //     //  return this.instance(originalRequest);
    //   }
    // }

    let headerJson: any = {
      "Content-Type": `application/json`,
      Accept: `application/json`,
      Authorization: `Bearer ${this.token}`,
      "customer_access_token": this.token,
      api_key: "7e61357c-137b-4093-9220-87484f6cf87b",
    };

    config.headers = headerJson;

    if (config.url?.startsWith(API.GET_CUSTOMER_ORDER)) {
      headerJson['customer_access_token'] = `${this.token}`;
    }
    if (config.url?.startsWith(API.VERIFY_CUSTOMER)) {
      headerJson['token'] = `${this.token}`;
    }

    return config;
  };

  private handleError = async (error: AxiosError) => {
    const originalRequest = error.config;
    /* if (error.response?.status === 401) {
      const refreshToken = await this.refreshToken();
      if (refreshToken.status === 200) {
        this.token = refreshToken.data?.access_token || "";
        localStorage.setItem("hashToken", this.token);
        return this.instance(originalRequest);
      }
    } */
    if (error.response?.status === 403) {
      LocalStorageService.logoutUser();
      useUserStore.setState({ isLogin: false });
      throw error;
    } else {
      throw error;
    }
  };

  private async refreshToken(): Promise<RefreshToken> {
    // const refreshTokenRequest = {
    //   hashToken: this.token,
    // };

    // const { data } = await this.addRequestOptionsForClientSecrect();
    // const options: AxiosRequestConfig = {
    //   headers: {
    //     CLIENT_KEY: data.clientKey,
    //   },
    // };

    return axios.get(`${this.baseURL}access-token`);

    // return axios.get(
    //   `${this.baseURL}/access-token`,
    //   refreshTokenRequest,
    //   options
    // );
  }

  private addRequestOptionsForClientSecrect() {
    return axios.get(`${this.baseURL}access-token`);
  }
}
