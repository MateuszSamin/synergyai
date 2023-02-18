import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import BgLogo from "../../public/bgLogo.png";
import Flare from "../../public/flare.png";

const ThankYou = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>SynergyAI</title>
      </Head>
      <main className="bg-background font-sora overflow-hidden w-full h-screen flex flex-col max-h-screen justify-center items-center text-white">
        <Navbar />
        <Image
          draggable={false}
          className="z-10 absolute w-11/12 md:w-8/12"
          src={BgLogo}
          alt={"bglogo"}
        />
        <Image
          draggable={false}
          className="blur-[5px] z-10 mix-blend-color-dodge absolute w-full top-0 left-0 overflow-hidden max-h-screen"
          src={Flare}
          alt={"flare"}
        />

        <h1 className="relative z-20 text-5xl md:text-7xl font-semibold text-center">
          Thank <br /> <span className="text-light-green">you</span>.
        </h1>
        <p className="relative z-20 w-8/12 md:w-1/2 text-center mt-8 leading-loose text-paragraph">
          You are now a part of our community! <br /> We will be in touch soon.
          💙
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
