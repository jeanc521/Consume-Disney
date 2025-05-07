"use client"

import { useEffect,useState,Suspense } from "react"
import Image from "next/image"
import { DisneyApi } from "../constants/api"

interface IData {
    name: string;
    films: string;
    tvShows: string;
    videoGames: string;
    imageUrl: string;
}

const AxiosPage = () => {
    const [data, setData] = useState<IData[]>([])

    useEffect(() => {
        DisneyApi.get("/character").then((res) => {
            setData(res.data.data)
        }).catch((error) => {
            console.error("Nao deu certo, tente de novo mais tarde!")
        })
    },[])
        return(
            <>
            <h1 className="text-center text-2xl">Axios da Gizney</h1>
            <Suspense  fallback={<div>Carregando...</div>}>
            {data.map((item, index) => (
                <div key={index} className="w-[220px] border-2 border-black rounded-lg shadow-xl m-4 p-4 bg-white text-center ">
                    <h2>{item.name}</h2>
                    <Image className="flex flex-row" src={item.imageUrl} alt={item.name} width={200} height={200}/>
                    <p>{item.films}</p>
                    <p>{item.tvShows}</p>
                    <p>{item.videoGames}</p>
                </div>
            ))}
            </Suspense>
            </>
        )

}

export default AxiosPage
