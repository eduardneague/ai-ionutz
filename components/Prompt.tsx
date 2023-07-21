import React from 'react'

const Propmt: React.FC = (): JSX.Element => {
    return (
      <>
        <div className = "flex flex-col gap-2">
          <label htmlFor = "prompt_input" className = "text-white text-sm">
              Try it out!
          </label>
          <input 
            type = "text"
            id = "prompt_input"
            placeholder = "A dog running through a sea of candy"
            className = "bg-runwild-darker-gray text-white rounded-lg h-[3rem] px-3 focus:outline-runwild-light-pink shadow-md"
          />
        </div>
        <div className = "flex w-full h-[3rem] mt-[0.5rem] gap-2">
          <button className = "shadow-md w-1/3 justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-gray to-runwild-light-gray rounded-lg">
            New Suggestion
          </button>
          <button className = "shadow-md w-1/3 justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-purple to-runwild-light-purple rounded-lg">
            Use Suggestion
          </button>
          <button className = "shadow-md w-1/3 justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-pink to-runwild-light-pink rounded-lg">
            Generate
          </button>
        </div>
      </>
    )
}

export default Propmt