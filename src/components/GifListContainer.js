import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GiftListContainer(){
    const [ gifs, setGifs ] = useState([]);

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=W324Ck6lBdFlSggnkhYpFLeLA5kENntX&rating=g")
          .then(response => response.json())
          .then(data => {
            const firstGifs = data.data.slice(0, 3)
            setGifs(firstGifs);
          })
    }, [])

    function handleUpdateList(searchResult){
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=W324Ck6lBdFlSggnkhYpFLeLA5kENntX&rating=g`)
          .then(response => response.json())
          .then(data => {
            const relevantGifs = data.data.filter(gif => {
                return gif.title.toLowerCase().includes(searchResult) || gif.slug.toLowerCase().includes(searchResult) || gif.images.original.url.toLowerCase().includes(searchResult)
            })
            console.log(relevantGifs)
            setGifs(relevantGifs)
          })
    }

    return(
        <div>
            <GifList gifs={gifs} />
            <GifSearch onSubmit={handleUpdateList} />
        </div>
    )
}

export default GiftListContainer;