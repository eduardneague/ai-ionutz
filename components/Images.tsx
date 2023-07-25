"use client"
import React from 'react'

import useSWR from 'swr'
import fetchImages from '../lib/fetchImages'

type ImageType = {
    name: string;
    url: string;
}

const Images: React.FC = (): JSX.Element => {

    const {
        data: images,
        isLoading,
        mutate: refreshImages,
        isValidating
    } = useSWR("images", fetchImages, {
        revalidateOnFocus: false
    })

    return (
        <div className = "flex flex-col items-center">
        <div className = "flex flex-col">    
        {
            isLoading && (
                <p className = "text-white text-xl animate-pulse text-left pb-7 font-light py-4">
                    Loading <span className = "text-runwild-light-pink font-bold">AI </span>
                    Generated Images...
                </p>
            )
        }

        <button 
            className = "fixed z-20 bottom-5 right-5 p-5 bg-runwild-dark-pink text-white font-bold rounded-md hover:bg-runwild-light-pink duration-200 focus:outline-none focus:ring-2 focus:ring-runwild-dark-pink"
            onClick = {() => refreshImages(images)}
        >
            {!isLoading && isValidating ? "Refreshing..." : "Refresh Images"}
        </button>

            <div className = "bg-[#111111] flex justify-center items-center py-10">
                <div className = "w-[90%] xl:w-[100%] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10">
    
                {images?.imageUrls?.map((image: ImageType, index: number) => {
                    console.log(image.url)
                    return (
                        <div key = {image.name}
                            className = {`relative ${
                                index === 0 && "md:col-span-2 md:row-span-2"
                            }
                            hover:scale-[103%] transition-transform duration-200 ease-in-out
                            `}
                        >
                            <div className = "rounded-md absolute top-0 left-0 flex justify-center text-white items-center w-full h-full bg-black opacity-0 hover:opacity-80 transition-opacity duration-200 z-10">
                                <p className = "text-center font-light text-lg p-5">
                                    {image.name.split("_").shift()?.toString().split(".").shift()}
                                </p>
                            </div>
                            <img
                                src = {image.url}
                                alt = {image.name}
                                height = {800}
                                width = {800}
                                className = "w-full rounded-md shadow-2xl drop-shadow-lg -z-10"
                            />
                        </div>
                    )
                })}

                </div>
            </div>
        </div>
        </div>
    )
}

export default Images