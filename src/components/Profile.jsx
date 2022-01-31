// import PropTypes from "prop-types";
// import props from '../data/user.json'


const MarcupItems = ({username ,tag,location,avatar,stats}) => {
  const {followers,views,likes} = stats
    return ( <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>
  
    <ul className="stats">
      <li>
        <span className="label">followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div> );
}
 
export default MarcupItems;