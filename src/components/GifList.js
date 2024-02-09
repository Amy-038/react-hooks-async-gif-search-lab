import React from "react";
import GifSearch from "./GifSearch";

function GifList({ gifs }){
    const gifList = gifs.map(gif => {
        return (
            <li key={gif.id}>
                <img  src={gif.images.original.url} alt={gif.title}/>
            </li>
        )
    })

    return (
        <div className="gif-list">
            <ul>
                {gifList}
            </ul>
        </div>
    )
}

export default GifList;