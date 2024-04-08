import React, { useEffect, useState } from "react";
import SignUpForm from "../containers/SignUpForm";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import LoginForm from "../containers/LoginForm";

const SignUp = ({ isLoginComplete, setIsLoginComplete }) => {
  const [isClickedSignUp, setIsClickedSignUp] = useState(false);
  const [isClickedLogin, setIsClickedLogin] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 630) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [isClickedLogin]);

  return (
    <section className="relative grid h-full min-h-[730px] grid-cols-[1.1fr_1fr] place-items-center custom-1050:min-h-[800px] custom-1050:grid-cols-1 custom-630:h-fit custom-630:p-[30px]">
      <div className="flex items-center justify-center custom-1050:hidden">
        <FaTwitter className=" h-[310px] w-[310px] fill-[#1DA1F2]" />
      </div>
      <div className="relative flex w-[630px] flex-col justify-center custom-1050:w-fit">
        <FaTwitter className="hidden h-[70px] w-[70px] fill-[#1DA1F2] custom-1050:block custom-630:h-[50px] custom-630:w-[50px]" />
        <h1 className="mb-[20px] text-[84px] font-[900] custom-1050:mt-[48px] custom-630:text-[50px] custom-630:leading-[60px]">
          Happening now
        </h1>
        <h2 className="mb-[20px] text-[42px] font-[900] custom-630:text-[28px]">
          Join Twitter today.
        </h2>
        <button className="mb-[20px] flex w-full max-w-[403px] items-center justify-center gap-[5px] rounded-full p-[16px] text-[20px] font-medium outline outline-1 outline-[#E4EAED] transition-colors duration-[0.25s] ease-out hover:bg-[#1E97E1] hover:text-[white] custom-630:text-[17px]">
          <FcGoogle className="h-[32px] w-[31px]" /> Sign up with Google
        </button>
        <button className="mb-[20px] flex w-full max-w-[403px] items-center justify-center gap-[5px] rounded-full p-[16px] text-[20px] font-medium outline outline-1 outline-[#E4EAED] transition-colors duration-[0.25s] ease-out hover:bg-[#1E97E1] hover:text-[white] custom-630:text-[17px]">
          <FaApple className="h-[32px] w-[31px]" /> Sign up with Apple
        </button>
        <button
          onClick={() => setIsClickedSignUp(true)}
          className="mb-[20px] w-full max-w-[403px] rounded-full p-[16px] text-[20px] font-medium outline outline-1 outline-[#E4EAED] transition-colors duration-[0.25s] ease-out hover:bg-[#1E97E1] hover:text-[white] custom-630:text-[17px]"
        >
          Sign up with phone or email
        </button>
        <small className="mb-[20px] max-w-[360px] text-[14px]">
          By singing up you agree to the{" "}
          <span className="cursor-pointer text-[#1E97E1]">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="cursor-pointer text-[#1E97E1]">Privacy Policy</span>{" "}
          including{" "}
          <span className="cursor-pointer text-[#1E97E1]">Cookie Use</span>.
        </small>
        <p>
          Already have an account?{" "}
          <span
            onClick={() => setIsClickedLogin(true)}
            className="cursor-pointer text-[#1E97E1]"
          >
            Log in
          </span>
        </p>
      </div>
      <div className="absolute bottom-[20px] left-1/2 col-span-2 m-auto flex h-full max-h-[20px] w-full -translate-x-1/2 flex-wrap justify-center gap-x-[20px] text-center text-[13px] group-hover:text-[#1E97E1] custom-630:max-w-full custom-630:gap-y-[5px] custom-630:px-[30px]">
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          About
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Help Center
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Terms of Service
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Privacy Policy
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Cookie Policy
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Ads Info
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Blog
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Status
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Careers
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Brand Resources
        </p>
        <p className="cursor-pointer  text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Advertsing
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Marketing
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Twitter for Business
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Developers
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Directory
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          Settins
        </p>
        <p className="cursor-pointer text-[gray] transition-colors duration-[0.25s] hover:text-[#1E97E1]">
          © 2024 Twitter,Inc.
        </p>
      </div>
      {isClickedSignUp && (
        <>
          <div className="overlay custom-630:hidden"></div>
          <div className="fixed z-10 hidden h-[1000px] w-full bg-white custom-630:block"></div>
          <SignUpForm
            isClickedSignUp={isClickedSignUp}
            setIsClickedSignUp={setIsClickedSignUp}
            setIsClickedLogin={setIsClickedLogin}
          />
        </>
      )}
      {isClickedLogin && (
        <>
          <div className="overlay custom-630:hidden"></div>
          <div className="fixed z-10 hidden h-[1000px] w-full bg-white custom-630:block"></div>
          <LoginForm
            isClickedLogin={isClickedLogin}
            setIsLoginComplete={setIsLoginComplete}
            isLoginComplete={isLoginComplete}
            setIsClickedLogin={setIsClickedLogin}
            setIsClickedSignUp={setIsClickedSignUp}
          />
          <IoMdClose
            onClick={() => setIsClickedLogin(false)}
            className="absolute right-[35px] top-[30px] z-20 hidden h-[22px] w-[22px] cursor-pointer transition-all duration-150 hover:fill-[#1DA1F2] custom-630:block"
          />
          <FaTwitter className="absolute top-5 z-20 hidden h-[50px] w-[50px] fill-[#1DA1F2] custom-630:block" />
        </>
      )}
    </section>
  );
};

export default SignUp;
