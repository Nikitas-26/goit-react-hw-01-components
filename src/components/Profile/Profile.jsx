import s from './Profile.module.css';
import PropTypes from "prop-types";
const MarcupItems = ({username ,tag,location,avatar,stats}) => {
  const {followers,views,likes} = stats
    return ( <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className={s.name}>{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats} style={{backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`}}>
      <li className={s.item}>
        <span className={s.label}>followers<br/></span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>views<br/></span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>likes<br/></span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  </div> );
}
MarcupItems.propTypes ={
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}
export default MarcupItems;
