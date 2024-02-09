import React, { useState } from "react";

function GifSearch({ onSubmit }){
    const [ searchResult, setSearchResult ] = useState("")

    function handleChange(event){
        const searchedGif = event.target.value
        setSearchResult(searchedGif)
    }

    function handleSubmit(event){
        event.preventDefault();
        onSubmit(searchResult)
    }

    return (
        <div className="gif-search-form">
            <form>
                <label htmlFor="gif-search">Enter a Search Term:</label>
                <input id="gif-search" type="text" name="gifsearch" value={searchResult} onChange={handleChange} />
                <button onClick={handleSubmit}>Find Gifs</button>
            </form>
        </div>
    )
}

export default GifSearch;