import * as React from 'react'
import './App.css'
import { DogImage } from './DogImage';

export const Description = () => {
    const [dogUrl, setDogUrl] = React.useState("https://images.dog.ceo/breeds/pyrenees/n02111500_8915.jpg");
    const onClickChangeImg = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    setDogUrl(data.message)
                }
            })
    }
    return (
        <>
            <p>犬の画像を表示するサイトです</p>
            <DogImage url={dogUrl}/>
            <br />
            <button className='update-btn' onClick={onClickChangeImg}>更新</button>
        </>
    )
}