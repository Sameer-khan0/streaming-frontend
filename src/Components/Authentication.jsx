import { useState } from "react";
import { motion } from "framer-motion";
import img from "../assets/Images/vactorlp.png";

function Authentication() {
  const [authvalues, setAuthValues] = useState({});
  const [authType, setAuthType] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(authvalues);
    setAuthValues({});
  };

  const handleChange = (e) => {
    setAuthValues({ ...authvalues, [e.target.name]: e.target.value });
  };

  const handleAuthType = () => {
    setAuthType(!authType);
    setAuthValues({});
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex justify-center items-center w-full md:shadow-xl shadow-none p-10 md:w-[100%] h-[35rem]"
    >
      <div className="h-full w-[50%] hidden md:block">
        <img src={img} alt="Design" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white h-full flex flex-col justify-center items-center w-full md:w-[50%] p-[4%]">
        {authType ? (
          <>
            <h2 className="text-2xl md:text-xl font-semibold">LOGIN</h2>
            <form
              className="h-[60%] flex flex-col pt-5 w-full gap-5 justify-evenly"
              onSubmit={handleSubmit}
            >
              <input
                id="email"
                className="p-[2%] shadow-sm"
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                id="password"
                className="p-[2%] shadow-sm"
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <input
                type="submit"
                value="Submit"
                className="p-[2%] bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition-colors duration-300"
                disabled={!authvalues.email || !authvalues.password}
              />
              <p className="text-sm md:text-sm">
                New account?{" "}
                <span onClick={handleAuthType} className="text-blue-400 cursor-pointer">
                  Sign up
                </span>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl md:text-xl font-semibold">SIGN UP</h2>
            <form
              className="h-[60%] flex flex-col gap-5 pt-5 w-full justify-evenly"
              onSubmit={handleSubmit}
            >
              <input
                id="username"
                className="p-[2%] shadow-sm"
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
              <input
                className="p-[2%] shadow-sm"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                className="p-[2%] shadow-sm"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <input
                type="submit"
                value="Submit"
                className="p-[2%] bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:from-blue-600 hover:to-blue-800 transition-colors duration-300"
                disabled={
                  !authvalues.username ||
                  !authvalues.email ||
                  !authvalues.password
                }
              />
              <p className="text-sm md:text-sm">
                Already have an account?{" "}
                <span onClick={handleAuthType} className="text-blue-400 cursor-pointer">
                  Login
                </span>
              </p>
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Authentication;
