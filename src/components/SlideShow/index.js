import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

export default function Index(props) {
    const {album} = props
    const [img, setImg] = useState('')
    const [imgCount, setImgCount] = useState(0)

    console.log(props);

    useEffect(() => {
        let newImg = String(album[imgCount])
        setImg(newImg)
    },[])

    const changePhoto = async (e) => {
        console.log(e);
        let albumLen = album.length - 1
        if(e === 1){
            if(imgCount >= albumLen){
                await setImgCount(0)
                await setImg(album[imgCount])
            } else {
                let newCount = imgCount + 1
                await setImgCount(newCount)
                await setImg(album[imgCount])
            }
        } else {
            if(imgCount <= 0){
                await setImgCount(albumLen)
                await setImg(album[imgCount])
            } else {
                let newCount = imgCount - 1
                await setImgCount(newCount)
                await setImg(album[imgCount])
            }
        }

        console.log(imgCount);
        console.log(albumLen);
    }

    return (
        <div className="imgBox">
            <button onClick={() => changePhoto(-1)}>{`<`}</button>
            {img !== ''? <img src={img} alt=""/>: <p>Loading</p>}
            <button onClick={() => changePhoto(1)}>{`>`}</button>
        </div>
    )
}
