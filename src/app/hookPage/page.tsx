"use client"

// um box shadow caro queira usar shadow-xl/

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
        <h1 className="text-center text-2x1">Pagina da Api da Gisney</h1>
        <div className=" flex flex-col  ">
            {characters.map((item, index) => {
                return(
                    <div key={index} className="w-[220px] border-2 border-black rounded-lg shadow-xl m-4 p-4 bg-white text-center justify-self-center md:justify-center">
                         <h1 className="font-serif">{item.name}</h1>  
                         <Image className="" src={item.imageUrl} alt={item.name} width={200} height={200}/>
                    </div>      
                )
            })}
        </div>
        </>
    )
}

export default HookPage