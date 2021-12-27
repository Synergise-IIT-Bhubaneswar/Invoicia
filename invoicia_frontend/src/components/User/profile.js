import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import dummy_image from "../../assests/dummy_image.jpg";
import UserContext from "../../contexts/userContext";
import "./user_styles.css";

const Profile = (props) => {
    const userCtx=useContext(UserContext);
    const user=userCtx.getProfile('@kira')[0];
  return (
    <Fragment>

      <div className="card profile">
        <div>
          <img src={dummy_image} alt="John" />
          <p className="description">
          {user.description}
          </p>
          <Link to="#">
            <i className="fa fa-instagram"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-facebook"></i>
          </Link>
        </div>
        <div>
          <h1 className="user-name">{user.name}</h1>
          <p className="user-prof">Full stack web developer</p>
          <div className="details">
            <div>
              <h4>User ID:</h4>
              <h4>Name:</h4>
              <h4>Email:</h4>
              <h4>Phone No:</h4>
            </div>
            <div>
              <p className="details-value">{user.userID}</p>
              <p className="details-value">{user.name}</p>
              <p className="details-value">{user.email}</p>
              <p className="details-value">{user.phoneNo}</p>
            </div>
          </div>
      <p><button className="edit-profile">Edit Profile</button></p>
        </div>
      </div>
    </Fragment>
    
  );
};

export default Profile;
