import React from "react";
import ValidationMessage from "../app/constants/validationMessage";
import Toast from "../utils/Toast";

import Validators from "../utils/Validator";

export default class FormValidation {
  static UserNamePassword(params: any) {
    const { email, password } = params;

    if (Validators.isEmpty(email)) {
      Toast.showError(ValidationMessage.email);
      return false;
    } else if (!Validators.isEmpty(email) && !Validators.isEmailValid(email)) {
      Toast.showError(ValidationMessage.validEmail);
      return false;
    } else if (Validators.isEmpty(password)) {
      Toast.showError(ValidationMessage.password);
      return false;
    }

    return true;
  }

  static signup(params: any) {
    const { name, email, password } = params;

    if (Validators.isEmpty(name)) {
      Toast.showError(ValidationMessage.name);
      return false;
    }else if (Validators.isEmpty(email)) {
      Toast.showError(ValidationMessage.email);
      return false;
    } else if (!Validators.isEmpty(email) && !Validators.isEmailValid(email)) {
      Toast.showError(ValidationMessage.validEmail);
      return false;
    } else if (Validators.isEmpty(password)) {
      Toast.showError(ValidationMessage.password);
      return false;
    } else if (!Validators.isEmpty(password) && !Validators.isPasswordValidMatch(password)) {
      Toast.showError(ValidationMessage.validPassword);
      return false;
    }

    return true;
  }
}
