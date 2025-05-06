"use client"

import { useEffect,useState } from "react"
import Image from "next/image"

interface IData {
    name: string;
    imageUrl: string;
}

const HookPage = () => {
    const [characters, setCharacters] = useState<IData[]>([]);

useEffect(() => {
    const load = async () => {
        const res = await fetch("https://api.disneyapi.dev/character")
        const data = await res.json()
        setCharacters(data.data)
    };
    load();
},[])

    return(
        <>
        <h1 className="text-center text-5x1">Pagina da Api da Gisney</h1>
        <div className="border border-indigo-600  flex flex-col  ">
            {characters.map((item, index) => {
                return(
                    <div key={index}>
                         <h1>{item.name}</h1>
                         <Image className=" " src={item.imageUrl} alt={item.name} width={200} height={200}/>
                    </div> 
                )
            })}
        </div>
        </>
    )
}

export default HookPage