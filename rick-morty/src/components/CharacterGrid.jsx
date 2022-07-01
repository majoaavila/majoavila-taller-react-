import { useState, useEffect } from "react"
import Card from "./Card"

const CharacterGrid = () => {
    const [chars, setChars] = useState([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json())
        .then(data => {
            setChars(data.results)
            console.log({chars})

        })

    }, [])
    
    return (
        <div className="container-mxauto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8">
            {chars.map(char => (         
            <Card char = {char}/>
        ))}
        </div>
        </div>
    )
}

export default CharacterGrid