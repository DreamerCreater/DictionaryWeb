import React from "react";
import AuthService from "../services/auth.service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <div className="bg-dark text-white">
      <p className="bg-dark text-white">
        <strong>Token:</strong> {currentUser.username}
      </p>
      <p className="bg-dark text-white">
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p className="bg-dark text-white">
        <strong>Email:</strong> {currentUser.email}
      </p >
      <strong className="bg-dark text-white" >Authorities:</strong>
      <ul className="bg-dark text-white">
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
      </div>
    </div>
  );
};

export default Profile;
