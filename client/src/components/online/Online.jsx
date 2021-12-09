import "./online.css";

export default function Online({user}) {
    return(
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img className="rightbarProfileImg" src={user.profilePicture} />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
        </li>
        // <li className="rightbarFriend">
        //     <div className="rightbarProfileImgContainer">
        //         <img className="rightbarProfileImg" src="/assets/person/pic4.jfif" />
        //         <span className="rightbarOnline"></span>
        //     </div>
        //     <span className="rightbarUsername">Jesse Harlan</span>
        // </li>
    )
}