import { useEffect, useState } from "react";
import { URLDirector } from "../helper/URLDirector";
import { save } from "../helper";

const useUser = (options) => {
  const [userData, setUserData] = useState();
  const [userIsLoading, setUserIsLoading] = useState(false);
  const [userError, setUserError] = useState(false);

  useEffect(() => {}, []);

  const userSignUpHandler = (name, email, password) => {
    const body = { name, email, password };
    handleUserRequest(body, options.type, options.method);
  };

  const userSignInHandler = (email, password) => {
    const body = { email, password };
    handleUserRequest(body, options.type, options.method);
  };

  const handleUserRequest = (body, type, method) => {
    let userUrl;
    const urlDirector = new URLDirector(type);
    urlDirector.buildURL();
    userUrl = urlDirector.getURL();

    if (userUrl) {
      setUserIsLoading(true);
      fetch(userUrl, {
        method: method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          setUserIsLoading(false);
          if (data?.statusCode === 200) {
            const token = JSON.parse(data?.body)?.token;

            if (token) {
              save("token", token);
              setUserError(false);
              setUserData(data);
            }
          } else {
            setUserError(true);
          }
        })
        .catch((error) => {
          setUserIsLoading(false);
          console.log("Error:", error);

          setUserError(true);
        });
    }
  };

  return {
    userSignUpHandler,
    userSignInHandler,
    userIsLoading,
    userData,
    userError,
  };
};

export default useUser;
