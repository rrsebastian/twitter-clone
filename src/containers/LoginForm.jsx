import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const LoginForm = ({
  setIsClickedLogin,
  setIsClickedSignUp,
  isClickedLogin,
  isLoginComplete,
  setIsLoginComplete,
  addAccount,
  setAddAccount,
}) => {
  const navigate = useNavigate();
  const [contactInput, setContactInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  const [showErrorDiv, setShowErrorDiv] = useState(false);
  const [isContactError, setIsContactError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPhone = localStorage.getItem("userPhone");
    const storedPassword = localStorage.getItem("userPassword");

    const contactInput = e.target.contact ? e.target.contact.value : "";
    const passwordInput = e.target.password ? e.target.password.value : "";

    const isContactValid =
      (storedPhone && contactInput === storedPhone) ||
      (storedEmail && contactInput === storedEmail);

    const isPasswordValid = passwordInput === storedPassword;

    setIsContactError(!isContactValid);
    setIsPasswordError(!isPasswordValid);

    if (!isContactValid || !isPasswordValid) {
      if (!showErrorDiv) {
        setShowErrorDiv(true);

        setTimeout(() => {
          setShowErrorDiv(false);
        }, 3000);
      }
    } else {
      setShowErrorDiv(false);
    }

    if (!addAccount) {
      const isFormValid = isContactValid && isPasswordValid;
      setFormValid(isFormValid);
      localStorage.setItem("isUserLoggedIn", JSON.stringify(isFormValid));
    }
  };

  useEffect(() => {
    const storedFormValid = localStorage.getItem("isUserLoggedIn");
    const parsedFormValid = storedFormValid
      ? JSON.parse(storedFormValid)
      : false;
    setFormValid(parsedFormValid);
  }, []);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isClickedLogin || addAccount) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    };
  }, [isClickedLogin, addAccount]);

  const handleClick = () => {
    setIsClickedLogin(false);
    setIsClickedSignUp(true);
  };

  useEffect(() => {
    if (formValid && !addAccount) {
      setIsLoginComplete(true);
      window.scrollTo({
        top: 0,
      });
      navigate("/home");
    }
  }, [formValid, navigate, addAccount]);

  return (
    <form
      style={{ display: isLoginComplete && "none" }}
      onSubmit={handleSubmit}
      className="fixed left-2/4 top-[50%] z-20 flex w-[450px] -translate-x-2/4 -translate-y-2/4 flex-col gap-5 rounded-xl bg-white p-[35px] custom-500:w-[350px]"
    >
      <FaTwitter className="h-[41px] w-[50px] fill-[#1DA1F2] custom-630:hidden" />
      <IoMdClose
        onClick={
          addAccount
            ? () => setAddAccount(false)
            : () => setIsClickedLogin(false)
        }
        className="absolute right-[35px] h-[22px] w-[22px] cursor-pointer transition-all duration-150 hover:fill-[#1DA1F2] custom-630:hidden"
      />
      <h1 className="text-[42px] font-black custom-500:text-[33px]">
        Login in to Twitter
      </h1>
      <input
        style={{ borderColor: isBtnClicked && contactInput === "" && "red" }}
        name="contact"
        placeholder="Phone number, email address"
        className="custom-input"
        type="text"
        onChange={(e) => setContactInput(e.target.value)}
        onInput={() => setIsBtnClicked(false)}
      />
      <div className="relative">
        <input
          style={{ borderColor: isBtnClicked && passwordInput === "" && "red" }}
          name="password"
          placeholder="Password"
          className="custom-input"
          type={!showPassword ? "password" : "text"}
          onChange={(e) => setPasswordInput(e.target.value)}
          onInput={() => setIsBtnClicked(false)}
        />
        {!showPassword ? (
          <FaRegEye
            onClick={() => setShowPassword(true)}
            className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
          />
        ) : (
          <FaRegEyeSlash
            onClick={() => setShowPassword(false)}
            className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
          />
        )}
      </div>

      {showErrorDiv && (
        <div className="absolute bottom-[-90px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3">
          <p>Incorrect. Please try again.</p>
        </div>
      )}
      <button onClick={() => setIsBtnClicked(true)} className="custom-button">
        Log in
      </button>
      <div className={`mt-3 flex justify-between ${addAccount && "hidden"}`}>
        <p className="cursor-pointer text-[#1DA1F2]">Forgot password?</p>
        <p onClick={handleClick} className="cursor-pointer text-[#1DA1F2]">
          Sign up to Twitter
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
