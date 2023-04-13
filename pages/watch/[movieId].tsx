import React from "react";
import useMovie from "@/hooks/useMovie";
import Router, { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";


const watch =() => {
    const router = useRouter()
    const { movieId } = router.query

    const { data } = useMovie(movieId as string)
    return(
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex  flex-row items-center gap-8 bg-black bg-opacity-70">
                <AiOutlineArrowLeft
                onClick={() => router.push('/')}
                className="text-white size={40} cursor-pointer"/>
                <p className="text-white text-1xl lg:text-3xl font-bold">
                    <span className="font-light mr-2">Watching:</span>
                    {data?.title}
                </p>

            </nav>
            <video className="h-full w-full bg-transparent t"
            autoPlay
            controls src={data?.videoUrl}></video>

        </div>
    )
}

export default watch