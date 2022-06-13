import * as React from "react"
import './App.css'

export const BreedsSelect = (props) => {
    const { breeds } = props
    const [selectedBreed, setSelectedBreed] = React.useState()
    const onChangeBreeds = (e) => setSelectedBreed(e.target.value)
    return (
        <select onChange={onChangeBreeds}>
            {breeds.map((breed) => (
                <option key={breed} value={selectedBreed}>{breed}</option>
            ))}
        </select>
    )
}