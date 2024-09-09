

import React from "react";
// import MemesData from "./MemesData.js";


function Meme () {


    // const [memeImg, setMemeImg] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/261o3j.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=>{

        async function getMemes (){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }

        getMemes();

        // fetch("https://api.imgflip.com/get_memes")
        // .then(res => res.json())
        // .then(data => setAllMemes(data.data.memes))

    },[])
    

    // console.log(allMemes)
    

    function getMemeImg(event){
        
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme, 
                randomImage: url,
              

        }))
        
        
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    

    return(
        <main>
            <div className="form">
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} 
                />
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    onClick={getMemeImg} 
                    className="form-btn"
                >
                    Get a new meme image 🖼️

                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img" alt="meme img" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;