import React from "react";
import Container from "./Container";
import Image from "next/image";
import DotGalaxy from "../../public/DotGalaxy.png";
import Tech from "../../public/Showcase.png";
import GreenFlare from "../../public/greenFlare.png";
import { FiKey, FiShield, FiTool, FiTrendingUp, FiWind, FiZap } from "react-icons/fi";
import Chart from "../../public/chart.png";

const Info = () => {
  return (
    <div className="w-full bg-background relative flex-col z-30 font-sora pt-10">
      <Image src={GreenFlare} alt="flare" className="absolute top-0 h-[90rem]" />
      <Container className="h-auto py-8 relative flex flex-col text-paragraph">
        <div className="flex flex-col xl:flex-row items-center">
          <div className="space-y-6 flex-row">
            <p className="text-green tracking-widest text-sm text-center lg:text-left">
              WHY
            </p>
            <p className="text-white tracking-wide text-4xl text-center lg:text-left font-semibold">
              DeFi meets<span className="text-green"> AI</span>
            </p>
            <p className="tracking-widest text-sm text-center lg:text-left">
              We are building a platform that utilizes AI to protect users from fraud in
              DeFi. <br /> Our mission is providing super-advanced analysis and security
              tools to the retail investor.
            </p>
          </div>
          <div className="w-full lg:w-[40rem] mx-auto lg:ml-auto relative lg:mt-0 hidden lg:block ">
            <Image src={DotGalaxy} alt="galaxy" />
            <p className="w-fit px-8 h-12 text-lg absolute bottom-20 bg-white text-black items-center flex rounded-3xl ">
              Super-advanced
            </p>
            <p className="w-fit px-8 h-12 text-lg absolute bottom-48 left-24 bg-white text-black items-center flex rounded-3xl">
              Beginner-friendly
            </p>
            <p className="w-fit px-8 h-12 text-lg absolute bottom-52 left-[24rem] bg-white text-black items-center flex rounded-3xl">
              Gamified
            </p>
            <p className="w-fit px-8 h-12 text-lg absolute bottom-72 left-64 bg-white text-black items-center rounded-3xl flex ">
              Secure
            </p>
            <p className="w-fit px-8 h-12 text-lg absolute bottom-16 left-64 bg-white text-black items-center flex rounded-3xl">
              AI-powered
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-16 lg:mt-32">
          <Image
            src={Tech}
            alt="tech"
            className="w-[20rem] 2xl:w-[30rem] mt-10  lg:mt-0 lg:mr-auto relative "
          />

          <div className="space-y-6  flex flex-col">
            <p className="text-white tracking-wide text-4xl text-center lg:text-left font-semibold">
              So how are we{" "}
              <span className="text-green">
                going to do <br /> all of this?
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 w-full lg:w-[40rem] justify-center 2xl:w-[40rem] lg:gap-y-10 2xl:gap-10">
              <div className="w-[20rem] mx-auto lg:mx-0 lg:mr-auto">
                <div className="flex flex-row items-center lg:justify-start justify-center space-x-2 ">
                  <FiTool size={25} color="white" />{" "}
                  <p className="text-white">Synergy TOOLS</p>
                </div>
                <p className="lg:w-2/3 mt-2 justify-center text-center lg:text-left">
                  You will be able to discover projects before others, make investment
                  decisions based on metrics provided by AI, and evaluate risk more
                  accurately.
                </p>
              </div>
              <div className="w-[20rem]  mx-auto lg:mx-0 lg:mr-auto">
                <div className="flex flex-row justify-center lg:justify-start nitems-center space-x-2 ">
                  <FiKey size={25} color="white" />{" "}
                  <p className="text-white">Synergy SAFU</p>
                </div>
                <p className="lg:w-2/3 mt-2 justify-center text-center lg:text-left">
                  Be safeguarded from rug-pulls. Our AI models scan smart contracts to
                  identify relevant features that could prevent purchases or mint new
                  tokens.
                </p>
              </div>
              <div className="w-[20rem]  mx-auto lg:mx-0 lg:mr-auto">
                <div className="flex flex-row justify-center lg:justify-start items-center space-x-2 ">
                  <FiTrendingUp size={25} color="white" />{" "}
                  <p className="text-white">Synergy REAL YIELD</p>
                </div>
                <p className="lg:w-2/3 mt-2 justify-center text-center lg:text-left">
                  Staking our token will produce real yield, a percent of the total
                  platform’s fees paid in ETH.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center justify-between mt-10 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-2 w-full lg:w-[40rem] justify-center 2xl:w-[40rem] lg:gap-y-10 2xl:gap-10">
            <div className="w-[20rem] mx-auto lg:mx-0 lg:mr-auto">
              <div className="flex flex-row items-center lg:justify-start justify-center space-x-2 ">
                <FiZap size={25} color="white" />{" "}
                <p className="text-white">Synergy MEME GEN</p>
              </div>
              <p className="lg:w-2/3 mt-2 justify-center text-center lg:text-left">
                Users who are fans of decentralized markets and memecoins can use our
                MEMECOINS GENERATOR to create their own assets.
              </p>
            </div>
            <div className="w-[20rem]  mx-auto lg:mx-0 lg:mr-auto">
              <div className="flex flex-row justify-center lg:justify-start nitems-center space-x-2 ">
                <FiWind size={25} color="white" />{" "}
                <p className="text-white">Synergy FRONTRUNNER</p>
              </div>
              <p className="lg:w-2/3 mt-2 justify-center text-center lg:text-left">
                The project founders are removing liquidity? Frontrun them! Synergy
                FRONTRUNNER monitors mempool transactions and automatically sells your
                tokens before the founders manage to rug pull.
              </p>
            </div>
            <div className="w-[20rem]  mx-auto lg:mx-0 lg:mr-auto">
              <div className="flex flex-row justify-center lg:justify-start items-center space-x-2 ">
                <FiShield size={25} color="white" />{" "}
                <p className="text-white">Synergy AUDIT</p>
              </div>
              <p className="lg:w-2/3 mt-2 justify-center text-center lg:text-left">
                Every developer on the Ethereum network can take advantage of a free,
                brief audit of their token contract for security and hidden features. The
                audit will be fully automatic and instantaneous.
              </p>
            </div>
          </div>

          <Image className="lg:w-4/12" src={Chart} alt="chart" />
        </div>
      </Container>
    </div>
  );
};

export default Info;
