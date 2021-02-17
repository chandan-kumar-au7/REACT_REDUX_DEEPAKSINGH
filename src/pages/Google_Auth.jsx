import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActionHelper } from "../redux/action/userAction";

const Google_Auth = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.profileObj);
    localStorage.setItem("email", response.profileObj.email);
    localStorage.setItem("name", response.profileObj.name);
    localStorage.setItem("imageUrl", response.profileObj.imageUrl);
    localStorage.setItem("islogedin", true);

    dispatch(userActionHelper({ type: "CREATE_USER" }));
    history.push("/dashboard");
  };

  return (
    <div>
      <GoogleLogin
        clientId="470395989453-bl8mtule2ndsoic2o6q8jl73jlfk8b63.apps.googleusercontent.com"
        buttonText="Login_by_GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Google_Auth;
