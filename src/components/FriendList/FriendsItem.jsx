import s from "./FriendList.module.css";
import PropTypes from "prop-types";
const RenderOneFriend = ({ friends }) => {
  return friends.map((el) => {
    return (
      <li className={s.item} key={el.id}>
        <span className={el.isOnline ? s.true : s.false} >
          {el.isOnline}
        </span>

        <img className={s.avatar} src={el.avatar} alt="User avatar" width="48" />
        <p className={s.name}>{el.name}</p>
      </li>
    );
  });
};

 RenderOneFriend.propTypes = {friends: PropTypes.arrayOf(
  PropTypes.shape(
   { avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }
  )
 )}

export default RenderOneFriend;

// style={{ backgroundColor: el.isOnline ? "green" : "red" }}