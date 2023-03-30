import React from 'react'
import Image from 'next/image'

import LogoSidebar from "../public/assets/LogoSidebar.png"
import SidebarIcon from "../public/assets/SidebarIcon.png"
import UserIcon from "../public/assets/UserIcon.png"

export default function Sidebar() {
  return (
    <nav className='fixed lg:h-screen h-20 lg:top-0 bottom-0 left-0 lg:w-24 w-full flex lg:flex-col flex-row lg:justify-start justify-center items-center gap-10 z-10 bg-[#041E40] lg:border-r-2 lg:border-t-0 border-t-2 border-[#80E1EE]'>
        <div className='lg:pt-10'>
            <Image src={LogoSidebar} alt="logo" />
        </div>
        <div className='scale-125'>
            <Image src={SidebarIcon} alt="sidebar icon" />
        </div>
        <div className='scale-125'>
            <Image src={UserIcon} alt="user icon" />
        </div>
    </nav>
  )
}
