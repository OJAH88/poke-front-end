import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";

export default function Profile({user, setUser}) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((allUsers) => {
        setAllUsers(allUsers);
      });
  }, []);

  console.log(allUsers)



  return (
    <>
      {/* <Topbar/> */}

      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="/assets/post/post2.jpg" />
              <img className="profileUserImg" src="/assets/person/pic1.jpg" />
            </div>
            <div className="profileInfo">
              {/* <h4 className="profileInfoName">{user.name}</h4> */}
              <span className="profileInfoDesc">It is pronounced "Ray"</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
