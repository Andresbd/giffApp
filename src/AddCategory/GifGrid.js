import React from "react";
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../useFetchGifs";

export const GifGrid = ({ category }) => {
    const {data, loading} = useFetchGifs(category);

    return(
        <>
            <h3>{category}</h3>
            {
                loading
                    ? <p>Cargando...</p>
                    : <></>
            }
            {
                data.map(img => (
                    <GifGridItem key={img.id} id={img.id} title={img.title} url={img.url} />
                ))
            }
        </>
    )
}
