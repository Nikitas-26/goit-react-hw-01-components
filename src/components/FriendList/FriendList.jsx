import RenderOneFriend from "./FriendsItem";
const RenderFriendsList = ({friends}) => {
    return (<ul className="friend-list" >
    <RenderOneFriend
     friends={friends}
    />
  </ul>);
}
 
export default RenderFriendsList;