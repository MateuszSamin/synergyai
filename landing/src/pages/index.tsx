import Container from "@/components/Container";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import TeamSection from "@/components/TeamSection";
import WaitlistSignup from "@/components/WaitlistSignup";
import Head from "next/head";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import BgLogo from "../../public/bgLogo.png";
import Dots1 from "../../public/dots/1.png";
import Dots2 from "../../public/dots/2.png";
import Flare from "../../public/flare.png";
import Loco from "../../public/loco.png";
import Chainlink from "../../public/logos/chainlink.png";
import Tonstarter from "../../public/logos/Tonstarter.png";
import Parlour from "../../public/logos/parlour.png";
import Wilner from "../../public/logos/wilner.png";
import PurpelFlare from "../../public/PurpleFlare.png";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import useMediaQuery from "../hooks/useMediaQuery";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Head>
        <title>SynergyAI</title>
        <meta
          name="description"
          content="Never get rugged again. The AI-powered Toolkit for DeFi is here."
          key="desc"
        />

        <meta
          property="og:title"
          content="SynergyAI | Never get rugged again. The AI-powered Toolkit for DeFi is here."
        />
        <meta
          property="og:description"
          content="Meet SynergyAI, your AI-powered dashboard to DeFi. Explore decentralized markets with a super-advanced toolkit at your fingertips. Make better decisions based on AI predictions and ensure the safety of your investments."
        />
        <meta property="og:image" content="https://i.imgur.com/rEw9bgB.png" />
      </Head>

      <main className="bg-background font-sora overflow-hidden w-full md:h-screen flex flex-col justify-center items-center text-white">
        <Navbar />
        <Image
          draggable={false}
          className="z-10 absolute w-11/12 md:w-8/12"
          src={BgLogo}
          alt={"bglogo"}
        />
        <Image
          draggable={false}
          className="blur-[5px] z-10 mix-blend-color-dodge absolute w-full top-0 left-0"
          src={Flare}
          alt={"flare"}
        />
        <Image
          draggable={false}
          className="absolute w-24 -ml-[60vw] md:-ml-[35rem] mt-32 z-10"
          src={Dots1}
          alt="dots"
        />
        <Image
          draggable={false}
          className="absolute w-24 ml-[60vw] md:ml-[30rem] -mt-[22rem]"
          src={Dots2}
          alt="dots"
        />
        <h1 className="relative z-20 text-5xl md:text-7xl font-semibold text-center">
          Never get <br /> <span className="text-light-green">rugged</span>{" "}
          again.
        </h1>
        <p className="relative z-20 w-8/12 md:w-1/2 text-center mt-8 leading-loose text-paragraph">
          SynergyAI is the AI toolkit for DeFi. We provide a suite of tools to
          help you make the best decisions in the DeFi space.
        </p>

        <WaitlistSignup />
      </main>
      <section className="pt-24 md:pt-0 bg-background font-sora text-white">
        <Container className="flex flex-col xl:flex-row justify-between">
          <div className="flex items-center">
            <div className="border-2 rounded-full aspect-square w-20 h-20">
              <Image src={Loco} alt="loco" />
            </div>
            <div className="w-[20rem] text-sm ml-4">
              <p>
                {'"'}SynergyAI will democratize the access to super-advanced
                DeFi analysis tools. <br /> It
                {"'"}s a total game-changer.{'"'}
              </p>
              <br />
              <p className="text-light-green">
                Jakub Stefanek, Founder & CEO at RoboHero
              </p>
            </div>
          </div>
          <div>
            <h2 className="mt-8">Our Partners and Advisors</h2>
            <div className="mt-2 w-10 h-1 bg-light-green mb-2"></div>
            {isDesktop ? (
              <div className="flex w-full gap-6 items-center">
                <Image
                  className="w-32 opacity-50 hover:opacity-100 duration-300 transition"
                  src={Chainlink}
                  alt="partner logo"
                />
                <Image
                  className="w-24 opacity-50 hover:opacity-100 grayscale duration-300 transition"
                  src={Tonstarter}
                  alt="partner logo"
                />
                <Image
                  className="w-20 opacity-50 hover:opacity-100 duration-300 transition"
                  src={Parlour}
                  alt="partner logo"
                />
              </div>
            ) : (
              <ScrollContainer
                vertical={false}
                horizontal
                className="overflow-hidden"
              >
                <div className="flex w-full gap-6 items-center">
                  <Image
                    className="w-32 opacity-50 hover:opacity-100 duration-300 transition"
                    src={Chainlink}
                    alt="partner logo"
                  />
                  <Image
                    className="w-32 opacity-50 grayscale hover:opacity-100 duration-300 transition"
                    src={Tonstarter}
                    alt="partner logo"
                  />
                  {/* <Image
										className='w-24 opacity-50 hover:opacity-100 duration-300 transition'
										src={Bitget}
										alt='partner logo'
									/> */}
                  <Image
                    className="w-20 opacity-50 hover:opacity-100 duration-300 transition"
                    src={Parlour}
                    alt="partner logo"
                  />
                </div>
              </ScrollContainer>
            )}
          </div>
        </Container>
      </section>
      <Info />
      <TeamSection />
      <section className="bg-background h-auto">
        <Faq />
      </section>
      <section className="relative bg-background h-auto pt-24 font-sora">
        <Roadmap />
        <h1 className="text-white relative z-20 text-5xl px-8 md:text-6xl font-semibold text-center">
          Looking forward to it?
        </h1>
        <WaitlistSignup />
        <Footer />
        <Image
          src={PurpelFlare}
          alt="purpleflare"
          className="absolute bottom-0 z-10"
        />
      </section>
    </>
  );
}
