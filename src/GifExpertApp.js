import React, {useState} from "react";
import {AddCategory} from "./AddCategory/AddCategory";
import {GifGrid} from "./AddCategory/GifGrid";


const GifExpertApp = () => {
    const [ categories, setCategories] = useState(['Halo']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map( (game, key) => (
                        <GifGrid key={key} category={game}></GifGrid>
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
