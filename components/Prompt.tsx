"use client"
import fetchSuggestionFromChatGPT from '@/lib/fetchSuggestionFromChatGPT'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import fetchImages from '../lib/fetchImages'
import toast from 'react-hot-toast'

const Propmt: React.FC = (): JSX.Element => {
    const [windowWidth, setWindowWidth] = useState<number>() 
    const [inputValue, setInputValue] = useState<string>('')

    const {data: suggestion, isLoading, mutate, isValidating} = useSWR('/api/suggestion', fetchSuggestionFromChatGPT, {
      revalidateOnFocus: false,
    })

      useEffect(() => {
        const resizeWindow = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', resizeWindow)
        return () => {
            window.removeEventListener('resize', resizeWindow)
        }
    }, [windowWidth])

    const loading = isLoading || isValidating

    const submitPrompt = async (useSuggestion?: boolean) => {
      const inputPrompt = inputValue;
      setInputValue("")

      // p is prompt to send to api endpoint

      const p = useSuggestion ? suggestion : inputPrompt 

      // hot toast notification

      const notificationPrompt = p 
      const notificationPromptShort = notificationPrompt.slice(0, 20)

      const notification = toast.loading(
        `RUNWILD is creating: ${notificationPromptShort}...`
      )

      const res = await fetch("api/generateImage", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({prompt: p})
      })
      const data = await res.json()

      if(data.error) {
        toast.error(data.error, {
          id: notification
        })
      } else {
        toast.success("Your AI Image has been generated!", {
          id: notification
        })
      }

      updateImages()
    }

    const handleSubmit = async (event: any) => {
      event.preventDefault()
      await submitPrompt()
    }

    const {mutate: updateImages} = useSWR("images", fetchImages, {
      revalidateOnFocus: false
    })

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
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
                type = "text"
                id = "prompt_input"
                placeholder = {loading ? " ChatGPT is thinking..." : typeof suggestion !== 'object' && typeof suggestion !== 'undefined' ? ` ${suggestion}` : " ChatGPT is not available. Try it yourself."}
                className = "bg-runwild-darker-gray opacity-70 text-white rounded-lg h-[3rem] px-3 focus:outline-none focus:outline-runwild-light-pink shadow-md"
              />
            </div>
            <div className = "flex w-full h-[3rem] mt-[0.5rem] gap-2">
              <button 
                onClick = {mutate}
                className = "new-suggestion-button shadow-md w-1/3 sm:text-sm justify-center items-center flex text-runwild-dark-purple text-xs bg-white rounded-lg"
                >
                New Suggestion
              </button>
              <button 
                onClick = {() => {submitPrompt(true);}}
                className = "use-suggestion-button shadow-md w-1/3 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-purple to-runwild-light-purple rounded-lg"
                >
                Use Suggestion
              </button>
              <button 
                  onClick = {(e) => {handleSubmit(e);}}
                  disabled = {!inputValue}
                  className = {inputValue ? 
                    `generate-button shadow-md w-1/3 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-pink to-runwild-light-pink rounded-lg` 
                    : 
                    `generate-button shadow-md w-1/3 sm:text-sm justify-center items-center flex text-white text-xs bg-runwild-light-gray rounded-lg`}
                    >
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
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
                type = "text"
                id = "prompt_input"
                placeholder = {loading ? " ChatGPT is thinking..." : typeof suggestion !== 'object' && typeof suggestion !== 'undefined' ? ` ${suggestion}` : " ChatGPT is not available. Try it yourself."}
                className = "bg-runwild-darker-gray w-full opacity-70 self-center text-white rounded-lg h-[3.3rem] pl-3 pr-[21.5rem] xl:pr-[24rem] focus:outline-none focus:outline-runwild-light-pink shadow-md"
              />
              <div className = "absolute bottom-[0%] right-0 flex mt-[0.5rem]">
                <button 
                    onClick = {mutate}
                    className = "new-suggestion-button shadow-md h-[3.3rem] px-2 xl:px-3 sm:text-sm justify-center items-center flex text-runwild-dark-purple text-xs bg-white"
                  >
                  New Suggestion
                </button>
                <button 
                    onClick = {() => {submitPrompt(true);}}
                    className = "use-suggestion-button shadow-md h-[3.3rem] px-2 xl:px-3 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-purple to-runwild-light-purple"
                >
                  Use Suggestion
                </button> 
                <button
                  onClick = {(e) => {handleSubmit(e);}}
                  disabled = {!inputValue}
                  className = {inputValue ? 
                    `generate-button shadow-md h-[3.3rem] px-2 xl:px-5 sm:text-sm justify-center items-center flex text-white text-xs bg-gradient-to-r from-runwild-dark-pink to-runwild-light-pink rounded-tr-lg rounded-br-lg` 
                    : 
                    `shadow-md h-[3.3rem] px-2 xl:px-5 sm:text-sm justify-center items-center flex text-white text-xs bg-runwild-light-gray rounded-tr-lg rounded-br-lg`}
                    >
                  Generate
                </button>
              </div>
            </div>
            
        </div>
        )
      }
      {
        inputValue && (
          <p className = "font-bold text-runwild-light-pink text-sm fixed bottom-0 z-[1000] md:bottom-[2%] max-w-[40rem] left-0 right-0 m-auto bg-runwild-dark-purple shadow shadow-runwild-dark-purple md:rounded-lg p-3">
            ChatGPT Suggestion: 
            <span className = "font-normal text-sm text-white"> 
              {loading ? " ChatGPT is thinking..." : typeof suggestion !== 'object' && typeof suggestion !== 'undefined' ? ` ${suggestion}` : " ChatGPT is not available."}
            </span>
          </p>
        )
      }
     </>
    )
}

export default Propmt