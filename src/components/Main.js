import React from "react";

function Main(){
    
    const [meme , setMeme] =React.useState({
        topText : "",
        bottomText : "",
        url : "http://i.imgflip.com/1bij.jpg"
    })
    //const[randomUrl, setRandomUrl] = React.useState("");
    const[memeArray, setMemeArray] = React.useState([]);

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(resp => resp.json())
        .then(data => setMemeArray(data.data.memes))
    },[])
   
    function getMemeImage(){
        const randomIndex=Math.floor(Math.random()*memeArray.length);
        setMeme(prevState =>{
            return {
                ...prevState,
                url : memeArray[randomIndex].url
            }
        })
    }

    function handleChange(event){
        const {name , value} = event.target;
        setMeme(prevMeme =>{
            return ({
                ...prevMeme,
                [name] : value
            })
        })
    }

    return(
        <main>
            <div className="main-div">
                <input type="text" name="topText" id="up" onChange={handleChange} value={meme.topText} placeholder="Top text"/>
                <input type="text" name="bottomText" id="down" onChange={handleChange} value={meme.bottomText} placeholder="Bottom text"/>
                <button className="generate-btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
                <div className="image-container">
                    <img className="random-img" src={(meme.url)} alt="" />
                    <h1 className="top-text">{meme.topText}</h1>
                    <h1 className="bottom-text">{meme.bottomText}</h1>
                </div>
            </div>
        </main>
    );
}

export default Main;