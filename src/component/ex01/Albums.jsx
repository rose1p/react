import React, { useState } from 'react'

const Albums = () => {
    const [albums, setAlbums] = useState([])


    const getAlbums = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                
                console.log(json);
                setAlbums(json);
            })
    }

    return (
        <div>Albums</div>
    )
}

export default Albums