import "./sidebar.css";
import { RssFeed, Chat, Pinterest } from "@material-ui/icons"
import {Users} from "../../dummyData"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Pinterest className="sidebarIcon"/>
                        <span className="sidebarListItemText">Interests</span>
                    </li>
                </ul>
                <button className="sidebarButton"> Show More</button>
                <hr className="sidebarHr"/>
                <span>Advertisement:</span>
                <img className="rightbarAd" src="/assets/ad2.png" />
                <span>Like the show Silicon Valley? Give us money and we will make you the next Richard Hendricks.</span>
                {/* <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/pic2.jfif" />
                        <span className="sidebarFriendName">Jui</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/pic3.jfif" />
                        <span className="sidebarFriendName">Amy</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/person/pic4.jfif" />
                        <span className="sidebarFriendName">Jesse</span>
                    </li>
                </ul> */}
            </div>
        </div>
    );
}