import s from './Profile.module.css';
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
      <p className={s.name}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats}>
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
 
export default MarcupItems;