import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import AccountSetup from "./AccountSetup";
import { SharedContext } from "../context";

const SignUpForm = ({
  setIsClickedSignUp,
  isClickedSignUp,
  setIsClickedLogin,
}) => {
  const [isNameError, setIsNameError] = useState(false);
  const [isPhoneError, setPhoneError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [isMonthError, setIsMonthError] = useState(false);
  const [isDayError, setIsDayError] = useState(false);
  const [isYearError, setIsYearError] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [usePhone, setUsePhone] = useState(true);
  const { setFollowedUsers } = useContext(SharedContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const letterRegex = /^[A-Za-z]+$/;
    const numberRegex = /^[0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameInput = e.target.name && e.target.name.value;
    const phoneInput = usePhone && e.target.phoneNumber.value;
    const emailInput = !usePhone && e.target.email.value;

    const isNameValid = letterRegex.test(nameInput);

    const isPhoneValid = usePhone
      ? phoneInput !== "" && numberRegex.test(phoneInput)
      : true;

    const isEmailValid = !usePhone
      ? emailInput !== "" && emailRegex.test(emailInput)
      : true;

    const selectedMonth = e.target.monthSelect.value;
    const selectedDay = e.target.daySelect.value;
    const selectedYear = e.target.yearSelect.value;

    const isMonthValid = selectedMonth !== "month";
    const isDayValid = selectedDay !== "day";
    const isYearValid = selectedYear !== "year";

    setIsNameError(!isNameValid);
    setPhoneError(!isPhoneValid);
    setEmailError(!isEmailValid);

    setIsMonthError(!isMonthValid);
    setIsDayError(!isDayValid);
    setIsYearError(!isYearValid);

    if (
      !isMonthValid ||
      !isDayValid ||
      !isYearValid ||
      !isPhoneValid ||
      !isEmailValid
    ) {
      setFormValid(false);
      return;
    }

    localStorage.clear();

    if (isNameValid) {
      localStorage.setItem("name", nameInput);
    }

    if (isPhoneValid) {
      localStorage.setItem("userPhone", phoneInput);
    }
    if (isEmailValid) {
      localStorage.setItem("userEmail", emailInput);
    }

    setFormValid(isNameValid && isPhoneValid && isEmailValid);
    setFollowedUsers([]);
  };
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isClickedSignUp) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    }

    return () => {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0";
    };
  }, [isClickedSignUp]);

  return (
    <>
      {!formValid ? (
        <form
          onSubmit={handleSubmit}
          className="fixed left-1/2 top-1/2 z-20 flex max-h-[90vh] w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 transform flex-col overflow-auto rounded-xl bg-white px-[35px] py-[20px] pb-[35px] custom-630:max-h-full"
        >
          <FaTwitter className="h-[33px] w-[40px] self-center fill-[#1DA1F2] custom-500:absolute" />
          <IoMdClose
            onClick={() => setIsClickedSignUp(false)}
            className="absolute left-[35px] h-[22px] w-[22px] cursor-pointer transition-all duration-150 hover:fill-[#1DA1F2]"
          />
          <div className="mb-[30px] mt-[20px] flex flex-col gap-5 custom-500:mt-[50px]">
            <h1 className="text-[30px] font-bold">Create an account</h1>
            <input
              style={{ borderColor: isNameError && "red" }}
              autoComplete="on"
              name="name"
              placeholder="Name"
              className="mt-[10px] custom-input"
              type="text"
              onInput={() => setIsNameError(false)}
              maxLength={15}
            />
            {usePhone ? (
              <input
                style={{
                  borderColor: isPhoneError && "red",
                }}
                autoComplete="on"
                name="phoneNumber"
                placeholder="Phone Number"
                className="custom-input"
                type="text"
                onInput={() => setPhoneError(false)}
              />
            ) : (
              <input
                style={{
                  borderColor: isEmailError && "red",
                }}
                autoComplete="on"
                name="email"
                placeholder="Email"
                className="custom-input"
                type="text"
                onInput={() => setEmailError(false)}
              />
            )}
            <p
              onClick={() => setUsePhone(!usePhone)}
              className="w-fit cursor-pointer text-[#1DA1F2]"
            >
              {usePhone ? "Use email" : "Use phone"}
            </p>
          </div>
          <div>
            <h3 className="text-[18px] font-bold">Date of birth</h3>
            <p className="mt-[10px] max-w-[670px] text-[16px]">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div className="relative mb-[60px] mt-5 flex flex-row justify-between gap-3 custom-500:mb-[20px] custom-500:flex-col">
              <div className="relative w-[100%]">
                <select
                  style={{ borderColor: isMonthError && "red" }}
                  className="custom-select"
                  name="monthSelect"
                  defaultValue="month"
                  onInput={() => setIsMonthError(false)}
                >
                  <option disabled value="month">
                    Month
                  </option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-5 w-5 text-black text-opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative w-[50%] custom-500:w-full">
                <select
                  style={{ borderColor: isDayError && "red" }}
                  className="custom-select"
                  name="daySelect"
                  defaultValue="day"
                  onInput={() => setIsDayError(false)}
                >
                  <option disabled value="day">
                    Day
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-5 w-5 text-black text-opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative w-[50%] custom-500:w-full">
                <select
                  style={{ borderColor: isYearError && "red" }}
                  className="custom-select"
                  name="yearSelect"
                  defaultValue="year"
                  onInput={() => setIsYearError(false)}
                >
                  <option disabled value="year">
                    Year
                  </option>
                  <option>1950</option>
                  <option>1951</option>
                  <option>1952</option>
                  <option>1953</option>
                  <option>1954</option>
                  <option>1955</option>
                  <option>1956</option>
                  <option>1957</option>
                  <option>1958</option>
                  <option>1959</option>
                  <option>1960</option>
                  <option>1961</option>
                  <option>1962</option>
                  <option>1963</option>
                  <option>1964</option>
                  <option>1965</option>
                  <option>1966</option>
                  <option>1967</option>
                  <option>1968</option>
                  <option>1969</option>
                  <option>1970</option>
                  <option>1971</option>
                  <option>1972</option>
                  <option>1973</option>
                  <option>1974</option>
                  <option>1975</option>
                  <option>1976</option>
                  <option>1977</option>
                  <option>1978</option>
                  <option>1979</option>
                  <option>1980</option>
                  <option>1981</option>
                  <option>1982</option>
                  <option>1983</option>
                  <option>1984</option>
                  <option>1985</option>
                  <option>1986</option>
                  <option>1987</option>
                  <option>1988</option>
                  <option>1989</option>
                  <option>1990</option>
                  <option>1991</option>
                  <option>1992</option>
                  <option>1993</option>
                  <option>1994</option>
                  <option>1995</option>
                  <option>1996</option>
                  <option>1997</option>
                  <option>1998</option>
                  <option>1999</option>
                  <option>2000</option>
                  <option>2001</option>
                  <option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                  <option>2005</option>
                  <option>2006</option>
                  <option>2007</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 ">
                  <svg
                    className="h-5 w-5 text-black text-opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <button className="custom-button">Next</button>
        </form>
      ) : (
        <AccountSetup
          setIsClickedLogin={setIsClickedLogin}
          setIsClickedSignUp={setIsClickedSignUp}
        />
      )}
    </>
  );
};

export default SignUpForm;
