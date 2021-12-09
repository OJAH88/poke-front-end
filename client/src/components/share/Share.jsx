import "./share.css";
import { PermMedia, Label, EmojiEmotions  } from "@material-ui/icons";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Share = () => {
    const [content, setContent] = useState('')
    const [imgurl, setImgurl] = useState('')
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();  
    const newPost = { content, imgurl }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])
        setIsLoading(true);
        setTimeout(() => {
            fetch('/post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPost)
            }).then(() => {
                console.log("New Post Added")
                console.log(newPost)
                setIsLoading(false)
                navigate('/');
            })
        },600)}
    

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/pic1.jpg" />
                    <input 
                        onSubmit={handleSubmit} 
                        type="text" 
                        placeholder="What's in your mind?" 
                        className="shareInput" 
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <input 
                                onSubmit={handleSubmit}
                                type="text"
                                placeholder="Type in image URL"
                                className="shareOptionText"
                                onChange={(e) => setImgurl(e.target.value)}
                            />
                        </div>
                        {/* <div className="shareOption">
                            <Label htmlColor="lightgreen" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feeling</span>
                        </div> */}
                    </div>
                    <button type="submit" className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share;