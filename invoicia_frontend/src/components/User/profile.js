import { Fragment } from "react";
import { Link } from "react-router-dom";

import dummy_image from "../../assests/dummy_image.jpg";
import "./user_styles.css";

const Profile = () => {
  return (
    <Fragment>
      <div className="card profile">
        <div>
          <img src={dummy_image} alt="John" />
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
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
          <h1 className="user-name">Yagami Light</h1>
          <p className="user-prof">Full stack web developer</p>
          <div className="details">
            <div>
              <h4>User ID:</h4>
              <h4>Name:</h4>
              <h4>Email:</h4>
              <h4>Phone No:</h4>
            </div>
            <div>
              <p className="details-value">@kira</p>
              <p className="details-value">Yagami Light</p>
              <p className="details-value">deathnote@shinigami.ac.in</p>
              <p className="details-value">897 657 4657</p>
            </div>
          </div>
      <p><button className="edit-profile">Edit Profile</button></p>
        </div>
      </div>
    </Fragment>
    
  );
};

export default Profile;
