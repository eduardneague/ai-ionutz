"use client"
import React, {useEffect, useState} from 'react'

const Propmt: React.FC = (): JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth) 

      useEffect(() => {
        const resizeWindow = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', resizeWindow)
        return () => {
            window.removeEventListener('resize', resizeWindow)
        }

    }, [windowWidth])

    return (
     <>
      {
        windowWidth < 800 ? 
        ( // Mobile Prompt (<800px width) dd
          <>
            <div className = "flex flex-col gap-2">
              <label htmlFor = "prompt_input" className = "text-white text-sm">
                  Try it out!
              </label>
              <input 
                type = "text"
                id = "prompt_input"
                placeholder = "A dog running through a sea of candy"
                className = "bg-runwild-darker-gray text-white rounded-lg h-[3rem] px-3 focus:outline-none focus:outline-runwild-light-pink shadow-md"
              />
            </div>
            <div className = "flex w-full h-[3rem] mt-[0.5rem] gap-2">
              <button className = "shadow-md w-1/3 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-gray to-runwild-light-gray rounded-lg">
                New Suggestion
              </button>
              <button className = "shadow-md w-1/3 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-purple to-runwild-light-purple rounded-lg">
                Use Suggestion
              </button>
              <button className = "shadow-md w-1/3 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-pink to-runwild-light-pink rounded-lg">
                Generate
              </button>
            </div>
          </>
        ) : 
        ( // Desktop Prompt
          <div className = "flex flex-col gap-2">
            <label htmlFor = "prompt_input" className = "text-white text-lg">
                Try it out!
            </label>
            <div className = "max-w-[81rem] w-full relative self-center">
              <input 
                type = "text"
                id = "prompt_input"
                placeholder = "A dog running through a sea of candy"
                className = "bg-runwild-darker-gray w-full self-center text-white rounded-lg h-[3.3rem] pl-3 pr-[21.5rem] focus:outline-none focus:outline-runwild-light-pink shadow-md"
              />
              <div className = "absolute bottom-[0%] right-0 flex mt-[0.5rem]">
                <button className = "shadow-md h-[3.3rem] px-2 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-gray to-runwild-light-gray">
                  New Suggestion
                </button>
                <button className = "shadow-md h-[3.3rem] px-2 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-purple to-runwild-light-purple">
                  Use Suggestion
                </button>
                <button className = "shadow-md h-[3.3rem] px-2 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-pink to-runwild-light-pink rounded-tr-lg rounded-br-lg">
                  Generate
                </button>
              </div>
            </div>
            
        </div>
        )
      }
     </>
    )
}

export default Propmt