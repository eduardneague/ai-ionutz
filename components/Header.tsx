import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
// d
const Header: React.FC = (): JSX.Element => {
  return (
    <>
        <header className = "flex justify-between items-center w-full bg-white shadow-md z-50 sticky h-20 px-5"> 
            <div className="left-side flex space-x-2 items-center">
                <Image
                    src = 'https://links.papareact.com/4t3'
                    alt = 'IONUT-Z LOGO'
                    height = {30}
                    width = {30}
                    draggable = "false"
                    className = "aspect-square select-none"
                />
                <div className = "flex flex-col">
                    <h1 className = "font-bold">
                        IONUT-Z <span className = "text-purple-500">AI</span> Image Generator
                    </h1>
                    <h2 className = "text-xs">
                        Powered by DALL-E 2, Chat GPT & Microsoft Azure
                    </h2>
                </div>
            </div>
            
            <div className="right-side flex items-center text-sm md:text-base divide-x text-gray-500">
                <Link
                        href = "https://eduardneague.netlify.app"
                        target = "_blank"
                        className = "px-2 font-light text-right"
                    >
                    My Portfolio
                </Link>
                <Link
                    href = "https://github.com/eduardneague/ai-ionutz"
                    target = "_blank"
                    className = "px-2 font-light text-right"
                >
                    GitHub Repo
                </Link>
            </div>

        </header>
    </>
  )
}

export default Header