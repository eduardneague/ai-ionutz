"use client"
import fetchSuggestionFromChatGPT from '@/lib/fetchSuggestionFromChatGPT'
import React, {useEffect, useState} from 'react'
import useSWR from 'swr'
import fetchImages from '../lib/fetchImages'
import toast from 'react-hot-toast'

const Propmt: React.FC = (): JSX.Element => {
    const [inputValue, setInputValue] = useState<string>('')

    const {data: suggestion, isLoading, mutate, isValidating} = useSWR('/api/suggestion', fetchSuggestionFromChatGPT, {
      revalidateOnFocus: false,
    })
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
                    `shadow-md w-1/3 sm:text-sm justify-center items-center flex text-white text-xs bg-runwild-light-gray rounded-lg`}
                    >
                  Generate
                </button>
            </div>
          </>
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