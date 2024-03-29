import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="w-full relative  z-20 ">
      <Container className="justify-between lg:h-40 relative py-4 space-y-6 lg:space-y-0  text-white items-center flex flex-col-reverse lg:flex-row">
        <div className="w-[20rem] lg:w-[40rem] h-[1px] bg-gradient-to-l from-green  to-blue absolute top-0 left-0 right-0 mr-auto ml-auto" />
        <p className="w-[20rem] text-center  lg:text-left">
          © <span className="text-green">SynergyAI</span>. <br />
          Made by 👨 and 🤖. <br />
          All Rights Reserved.
        </p>
        <div className="flex flex-row mx-auto space-x-8 text-sm items-center justify-center">
          <a
            href="https://www.linkedin.com/company/synergyai/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://twitter.com/synergyai_io"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={20} />
          </a>
        </div>

        <button
          className="cursor-pointer text-center lg:text-right w-[20rem] mt-4 lg:mt-0"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Back to top
        </button>
      </Container>
    </div>
  );
};

export default Footer;
