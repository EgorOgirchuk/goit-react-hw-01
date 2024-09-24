import "./Profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  console.log(name, tag, location, image, stats);
  return (
    <div className="ProfileWrap">
      <div>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li>
          <span>Views</span> <span>{stats.views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
