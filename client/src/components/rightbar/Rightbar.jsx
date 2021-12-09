import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({user}) {

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                        <img className="birthdayImg" src="/assets/gift.jpg" />
                        <span className="birthdayText"><b>Michael Moore</b> and <b>2 million other friends</b> have a birthday today</span>
                    </div>
                    <span>Advertisement:</span>
                    <img className="rightbarAd" src="/assets/ad1.png" />
                    <span>Want to make a ton of money by sitting in front of computers all day? Pay us and we will make your dream come true.</span>
                    <h4 className="rightbarTitle">Online Friends</h4>
                    <ul className="rightbarFriendList">
                        {Users.map(u=>(
                            <Online key={u.id} user={u}/>
                        ))}
                    </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Taiwan</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Occupation:</span>
                    <span className="rightbarInfoValue">CEO</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                    <img src="assets/person/pic2.jfif" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Jui Hsu</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/pic3.jfif" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Amy Posten</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/pic4.jfif" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Jesse Harlan</span>
                </div>
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <HomeRightbar/>
                {/* <ProfileRightbar/> */}
                {/* {user ? <HomeRightbar/> : <ProfileRightbar/>} */}
            </div>
        </div>
    )
}