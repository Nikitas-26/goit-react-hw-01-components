import RenderOneFriend from "./FriendsItem";
import PropTypes from 'prop-types';
import s from './FriendList.module.css';
const RenderFriendsList = ({friends}) => {
    return (<ul className={s.friendList} >
    <RenderOneFriend
     friends={friends}
    />
  </ul>);
}
RenderFriendsList.propTypes = {friends: PropTypes.arrayOf(
  PropTypes.shape(
   { avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }
  )
 )}
export default RenderFriendsList;