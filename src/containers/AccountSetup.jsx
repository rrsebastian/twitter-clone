import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const AccountSetup = ({ setIsClickedSignUp, setIsClickedLogin }) => {
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;

    const userNameInput = e.target.username && e.target.username.value;
    const passwordInput = e.target.password && e.target.password.value;
    const confirmPasswordInput =
      e.target.confirmPassword && e.target.confirmPassword.value;

    const isUsernameValid =
      userNameInput.length >= 4 &&
      userNameInput.length <= 15 &&
      usernameRegex.test(userNameInput);

    const isPasswordValid = passwordRegex.test(passwordInput);
    const doPasswordsMatch = passwordInput === confirmPasswordInput;

    setIsUsernameError(!isUsernameValid);
    setIsPasswordError(!isPasswordValid);
    setIsConfirmPasswordError(!doPasswordsMatch || confirmPasswordInput === "");

    if (isUsernameValid && isPasswordValid && doPasswordsMatch) {
      setIsFormValid(true);
      setIsClickedLogin(true);
      setIsClickedSignUp(false);
      localStorage.setItem("userPassword", passwordInput);
      localStorage.setItem("username", userNameInput);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed left-1/2 top-1/2 z-20 flex w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-xl bg-white px-[35px] py-[30px] pb-[35px]"
    >
      <IoMdClose
        onClick={() => setIsClickedSignUp(false)}
        className="absolute right-[35px] top-[35px] h-[22px] w-[22px] cursor-pointer transition-all duration-150 hover:fill-[#1DA1F2]"
      />
      <h1 className="text-[30px] font-bold">Account Setup</h1>
      <ul className="list-inside list-disc text-[15px]">
        <li className="mb-[5px] list-none">
          <h2 className="mt-[10px] text-[20px]">Password must contain:</h2>
        </li>
        <li>At least 1 Uppercase letter</li>
        <li>At least 8 Letters long</li>
        <li>At least 1 Number</li>
      </ul>
      <div className="my-5 flex flex-col gap-3">
        <input
          style={{ borderColor: isUsernameError && "red" }}
          type="text"
          name="username"
          className="custom-input"
          placeholder="Username"
          autoComplete="off"
          maxLength={15}
        />
        <div className="relative">
          <input
            style={{ borderColor: isPasswordError && "red" }}
            name="password"
            className="custom-input"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
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
        <div className="relative">
          <input
            style={{ borderColor: isConfirmPasswordError && "red" }}
            name="confirmPassword"
            className="custom-input"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
          />
          {!showConfirmPassword ? (
            <FaRegEye
              onClick={() => setConfirmShowPassword(true)}
              className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
            />
          ) : (
            <FaRegEyeSlash
              onClick={() => setConfirmShowPassword(false)}
              className="absolute right-[20px] top-[50%] translate-y-[-50%] cursor-pointer"
            />
          )}
        </div>
      </div>
      <button className="custom-button">Submit</button>
    </form>
  );
};

export default AccountSetup;
