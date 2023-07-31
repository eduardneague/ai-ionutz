"use client"

import React, {useEffect} from 'react'
import {bannerImages} from '../bannerImages'

import Link from "next/link"
import Prompt from './Prompt'
//dd
const Header: React.FC = (): JSX.Element => {
    const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)].image_url

    const styles = {
        backgroundImage: `url('${randomImage}')`
    }

    return (
        <>
            <div 
                className = "w-full h-[28rem] xl:h-[45rem] bg-cover bg-center xl:bg-top md:bg-center bg-no-repeat flex justify-center items-center" 
                style = {styles}
            >
                <div className = "flex h-full w-[90%] xl:w-[70%] 2xl:w-[60%] flex-col justify-center">
                    <div className = "flex justify-between items-center">
                        <h1 className = "text-xl xl:text-2xl bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-runwild-light-pink to-runwild-dark-pink">
                            RUNWILD
                        </h1>
                        <Link href = "https://github.com/eduardneague/ai-ionutz" target = "_blank" className = "text-sm text-white xl:text-lg cursor-pointer hover:text-runwild-light-pink transition-all">
                            GitHub Repo
                        </Link>
                    </div>
                    <h2 className = "text-white text-xs">
                        <span className = "text-white font-bold">
                            DALL-E, ChatGPT, Microsoft Azure
                        </span>
                    </h2>

                    <div className = "w-full xl:flex xl:items-center xl:justify-between">
                        <div className = "flex flex-col items-center xl:items-start justify-center mt-10 xl:mt-[6rem] mb-5 xl:mb-[5rem]">
                            <h1 className = "text-2xl text-center text-white mb-4 xl:text-5xl xl:text-left">
                                Create anything your
                                <br/>
                                <span className = "font-bold xl:leading-[4rem] ">heart </span> 
                                desires
                            </h1>
                            <h1 className = "text-2xl text-center text-white xl:text-left xl:text-5xl">
                                Let your imagination
                                <br/>
                                <span className = "text-transparent xl:leading-[4rem] bg-clip-text font-bold bg-gradient-to-r from-runwild-light-pink to-runwild-dark-pink">RUNWILD</span>
                                <span className = "font-bold text-white">.</span>
                            </h1>
                        </div>
                        <img 
                            src = "illustration.png" 
                            alt = "Illustration" 
                            className = "xl:block hidden object-contain h-[23rem] 2xl:h-[25rem] aspect-square select-none"
                            draggable = {false}
                        />
                    </div>
                    
                    <Prompt/>

                </div>
            </div>

        </>
    )
}

export default Header