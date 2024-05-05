import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextConstants } from "./constants";
import Model from "../../../../components/model";
import TextInput from "../../../../components/textInput";
import Button from "../../../../components/button";

type LoginProps = {
  isCollapsable?: boolean;
  toggle?: () => void;
  onCollapse?: () => void;
};

function Login(props: LoginProps) {
  const [authCredentials, setAuthCredentials] = useState({
    name: "",
    password: "",
  });
  const handleInputChange = (e: any) => {
    setAuthCredentials({ ...authCredentials, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/posts");
  };

  return (
    <div className="">
      <Model
        show={show}
        setShow={(show) => {
          setShow(show);
          props.onCollapse && props.onCollapse();
        }}
        styles="border border-[#27292D] w-[463px]"
        isCollapsable={props.isCollapsable}
      >
        <div className="text-center mt-[40px] mb-[45px]">
          <div className="text-sm font-medium text-base mb-2">
            {TextConstants.header}
          </div>
          <div className="text-xl font-semibold text-white">
            {TextConstants.subHeader}
          </div>
        </div>
        <div className="px-6 pb-6 flex flex-col gap-3">
          <TextInput
            title="Name"
            type="text"
            name="name"
            onChange={(e) => handleInputChange(e)}
            value={authCredentials.name}
            placeholder="Enter your email or username"
          />
          <TextInput
            title="Password"
            type="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
            value={authCredentials.password}
            placeholder="Enter your password"
          />
          <Button
            text="Login"
            onClick={handleButtonClick}
            size="lg"
            type="primary"
          />
          <div className="text-base text-sm">
            {TextConstants.registerText}{" "}
            <span className=" text-white cursor-pointer" onClick={props.toggle}>
              {TextConstants.registerLinkText}
            </span>
          </div>
        </div>
      </Model>
    </div>
  );
}

export default Login;
