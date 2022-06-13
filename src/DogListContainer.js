import * as React from "react"
import { BreedsSelect } from "./BreedsSelect"

export const DogListContainer = () => {
    const [breeds, setBreeds] = React.useState([])

    React.useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(res => res.json())
            .then((data) => {
                setBreeds(data.message)
            })
    }, [])
    return (
        <>
            <p>Breeds Select</p>
            <BreedsSelect breeds={breeds}/>
        </>
    )
}