import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import { BsPlus } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { subpage: "Product", link: "/" },
    { subpage: "Team", link: "/" },
    { subpage: "Doc.", link: "/" },
    { subpage: "Contact", link: "/" },
  ];

  return (
    <div className="bg-transparent w-full z-20 relative md:absolute md:top-0">
      <Container className="justify-between lg:h-32 py-4  space-y-6 lg:space-y-0 text-white items-center flex flex-col lg:flex-row">
        <Link href="/">
          <Image src={Logo} alt="logo" className="w-[15rem]" />
        </Link>
        <div className="flex flex-row mx-auto space-x-8 text-lg">
          {/* @dev Temporarily removed mapping, because there are no such subpages at this time. */}
          {/* {links.map((index, i) =>
                        <Link href={index.link} key={i} className="cursor-pointer">
                            <p className='cursor-pointer'>{index.subpage}</p>
                        </Link>
                    )} */}
        </div>
        {/* <div className='flex flex-row items-center w-[15rem]  space-x-5'>
					<a
						href='https://google.com'
						target='_blank'
						rel='noreferrer'>
						<FaLinkedinIn size={20} />
					</a>
					<a
						href='https://google.com'
						target='_blank'
						rel='noreferrer'>
						<FaTwitter size={20} />
					</a>
					<button onClick={() => window.alert("Coming soon...")} className='h-12 w-[10rem] cursor-pointer rounded-3xl bg-gradient-to-bl from-green  to-blue p-[2px]'>
						<div className='flex h-full w-full mx-auto items-center justify-center rounded-3xl bg-background back'>
							<p className='text-sm text-white'>Launch App</p>
							<BsPlus size={30} className='ml-2' />
						</div>
					</button>
				</div> */}
      </Container>
    </div>
  );
};

export default Navbar;
