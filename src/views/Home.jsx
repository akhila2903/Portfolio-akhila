import React, { useContext } from "react";
import heroBg from "../assets/myimage.jpeg"; // Ensure this path is correct
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Akhila Sai Kuncha
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={["Front End Developer", 1000, "Full Stack Developer", 1000]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
             
              I’m Akhila Sai Kuncha, a Software Engineer with a Master’s in Computer Science. I specialize in full-stack development, healthcare data, and machine learning, with experience in React, Node.js, and AWS. Passionate about building impactful, user-focused applications, I thrive on creating innovative and scalable solutions.
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a href={el.link} className="mr-5 cursor-pointer mt-8 hover:scale-125">
                  <img alt="" src={el.url} />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <Link className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                  Resume
                </Link>
              </div>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt="Hero Image"
            className="md:w-2/6 hidden sm:block" // Adjusted width here
            style={{
              width: "30%",  // Adjust width to make it smaller
              height: "80%",  // Keep aspect ratio intact
              objectFit: "cover",  // Ensures the image fits correctly
              borderRadius: "20px", // Optional rounding of corners
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for better contrast
            }}
          />
        </main>
      </div>
    </>
  );
};

export default Home;
