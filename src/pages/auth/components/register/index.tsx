import { useState } from "react";
import Model from "../../../../components/model";
import TextInput from "../../../../components/textInput";
import Button from "../../../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { TextConstants } from "./constants";

type RegisterProps = {
  isCollapsable?: boolean;
  onCollapse?: () => void;
  toggle?: () => void;
};

function Register(props: RegisterProps) {
  const [authCredentials, setAuthCredentials] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [show, setShow] = useState(true);
  const handleInputChange = (e: any) => {
    setAuthCredentials({ ...authCredentials, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/posts");
  };
  return (
    <div className="">
      <Model
        show={true}
        setShow={() => {
          setShow(!show);
          props.onCollapse && props.onCollapse();
        }}
        styles="border border-[#27292D] w-[463px]"
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
            title="Email"
            type="text"
            name="email"
            onChange={(e) => handleInputChange(e)}
            value={authCredentials.email}
            placeholder="Enter your email"
          />
          <TextInput
            title="Username"
            type="text"
            name="username"
            onChange={(e) => handleInputChange(e)}
            value={authCredentials.username}
            placeholder="Enter your prefered username"
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
            text="Register"
            onClick={handleButtonClick}
            size="lg"
            type="primary"
          />
          <div className="text-base text-sm">
            {TextConstants.registerText} {""}
            <span className="text-white cursor-pointer" onClick={props.toggle}>
              {TextConstants.registerLinkText}
            </span>
          </div>
        </div>
      </Model>
    </div>
  );
}

export default Register;
