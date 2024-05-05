import React, { useState } from "react";
import Login from "./components/login";
import Register from "./components/register";

type AuthPageProps = {
  isCollapsable?: boolean;
  onCollapse?: () => void;
};

function AuthPage(props: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <Login
          toggle={toggleAuth}
          isCollapsable={props.isCollapsable}
          onCollapse={props.onCollapse}
        />
      ) : (
        <Register
          toggle={toggleAuth}
          isCollapsable={props.isCollapsable}
          onCollapse={props.onCollapse}
        />
      )}
    </>
  );
}

export default AuthPage;
