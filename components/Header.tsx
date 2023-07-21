import React, {useState} from 'react'
import {bannerImages} from '../bannerImages'

import Prompt from './Prompt'

const Header: React.FC = (): JSX.Element => {

    const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)].image_url

    const styles = {
        backgroundImage: `url('${randomImage}')`
    }

    return (
        <>
            <div 
                className = "w-full h-[28rem] bg-cover bg-bottom md:bg-center bg-no-repeat flex justify-center items-center" 
                style = {styles}
            >
                <div className = "flex h-full w-[90%] flex-col py-7">
                    <div className = "flex justify-between items-center">
                        <h1 className = "text-xl bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-runwild-light-pink to-runwild-dark-pink">
                            RUNWILD
                        </h1>
                        <h2 className = "text-sm text-white">
                            GitHub Repo
                        </h2>
                    </div>
                    <h2 className = "text-white text-xs">
                        <span className = "text-white font-bold">
                            DALL-E, ChatGPT, Microsoft Azure
                        </span>
                    </h2>

                    <div className = "flex flex-col items-center justify-center mt-10 mb-5">
                        <h1 className = "text-2xl text-center text-white mb-4">
                            Create anything your
                            <br/>
                            <span className = "font-bold">heart </span> 
                            desires
                        </h1>
                        <h1 className = "text-2xl text-center text-white">
                            Let your imagination
                            <br/>
                            <span className = "text-transparent bg-clip-text font-bold bg-gradient-to-r from-runwild-light-pink to-runwild-dark-pink">RUNWILD</span>
                            <span className = "font-bold text-white">.</span>
                        </h1>
                    </div>
                    
                    <Prompt/>

                </div>
            </div>

        </>
    )
}

export default Header