const API_ENDPOINTS = {
  user_development: "user",
};

class URLBuilder {
  buildUrl() {
    throw new Error("buildUrl method must be implemented");
  }
}

class CreateUserURLBuilder extends URLBuilder {
  buildUrl() {
    return `${process.env.EXPO_PUBLIC_DEVELOPMENT_API}/${API_ENDPOINTS.user_development}/sign-up`;
  }
}

class UserSignInBuilder extends URLBuilder {
  buildUrl() {
    return `${process.env.EXPO_PUBLIC_DEVELOPMENT_API}/${API_ENDPOINTS.user_development}/sign-in`;
  }
}

export class URLDirector {
  constructor(type, code, options) {
    this.type = type;
    this.code = code;
    this.options = options;
    this.URL = "";
  }

  buildURL() {
    let urlBuilder;

    switch (this.type) {
      case "CREATE_USER":
        urlBuilder = new CreateUserURLBuilder();
        break;
      case "USER_SIGN_IN":
        urlBuilder = new UserSignInBuilder();
        break;
      default:
        throw new Error("Invalid type");
    }

    this.URL = urlBuilder.buildUrl(this.code);
  }

  getURL() {
    return this.URL;
  }
}
