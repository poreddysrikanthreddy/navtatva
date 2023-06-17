import React from "react";

const HOST_NAME = process.env.HOST_NAME;
const API_BASE_URL = process.env.API_BASE_URL;

const RupifiSandbox = {
  BASE_URL_V1: "https://api-sandbox.rupifi.com/v1/",
  BASE_URL_V2: "https://credit-line-api-sandbox.rupifi.com/v2.1/",
  TEST_ACCOUNT: 7976545492, //8660178047 // 7976545492
  MERCHANT_ID: "TESTCLIENT",
  MERCHANT_SECRET: "OGFlN2Q2MGItMmJiYy00OTU0LWE1MWItMTU1OGJmYTU4YThm",
  REDIRECT_CANCEL_URL: `${HOST_NAME}/order-taking-app/cancel`,
  REDIRECT_CONFIRM_URL:
  `${HOST_NAME}/order-taking-app/success`,
};

const RupifiProduction = {
  BASE_URL_V1: "https://api.rupifi.com/v1/",
  BASE_URL_V2: "https://credit-line-api.rupifi.com/v2.1/",
  TEST_ACCOUNT: null,
  MERCHANT_ID: "NAVTATVA_FASHION",
  MERCHANT_SECRET: "YjZiMGViYzYtNGJjZS00NGM3LTgxNDMtMDVkNzRhNTcwYjAw",
  REDIRECT_CANCEL_URL: `${HOST_NAME}/order-taking-app/cancel`,
  REDIRECT_CONFIRM_URL:
  `${HOST_NAME}/order-taking-app/success`,
};

const RupifiUC = {
  BASE_URL: API_BASE_URL+"/rupifi/",
  REDIRECT_CANCEL_URL: `${HOST_NAME}/checkout/cancel`,
  REDIRECT_CONFIRM_URL: `${HOST_NAME}/checkout/thank-you`,
  TEST_ACCOUNT: 7976545492, //8660178047 // 7976545492
};

const constants = {
  assetsBaseURL: API_BASE_URL,
  baseURL: API_BASE_URL+"/",
  ACCESS_TOKEN: "0f40c705ef74aa0b3f20817c4aaf70d65938de66",
  RUPIFI: RupifiProduction,
  PAYMENT_METHOD: {
    RUPIFI: RupifiUC
  },
  PAYMENT_TYPE: {
    RUPIFI: "RUPIFI",
    COD: "COD",
    CARD: "CARD",
    UPI: "UPI",
    RAZORPAY: "RAZORPAY",
  },
  CURRENCY_SYMBOL: {
    INR: {
      HI: "₹",
      EN: "Rs.",
    }
  }
};
export default constants;
