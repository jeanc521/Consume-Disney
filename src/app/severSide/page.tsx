
import { Metadata } from "next";
import { Suspense } from "react";

type IData = {
    data: {
        name: string;
        imageUrl: string;
        status: string;
        id: string;
    }[];
}

export const metadata: Metadata = {
    title: "Lista de personagens da Gizney",
    description: "Consumindo api da Gizney"
}

const ServeSide = async () => {
    const res = await fetch("https://api.disneyapi.dev/character")
    const data: IData = await res.json()

    return (
        <>
            <div>Api da Gizney em Server side</div>
            {data?.data.map((item, index) => {
                return(
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <h3>{item.id}</h3>
                        <p>{item.status}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ServeSide