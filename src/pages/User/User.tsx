import type { userAuth } from "../../utils/api";
import Button from "../../components/Button";
import "./User.css";

type userProps = {
  data: userAuth;
  onDisconnect: () => void;
};

export default function User({ data, onDisconnect }: userProps) {
  const userAuth: userAuth = data;

  function handleOnClick() {
    onDisconnect();
  }

  return (
    <div className="user-page">
      <div className="user-container">
        <div className="user-header">
          <h1>User Name: {userAuth.username}</h1>
        </div>
        <div>
          <Button
            id="disconnect"
            textContent="Disconnect"
            onClick={handleOnClick}
          ></Button>
          <Button
            id="edit"
            textContent="Edit Profile"
            onClick={handleOnClick}
          ></Button>
        </div>
        <div className="user-info">
          <ul>
            <li>
              Full Name: {userAuth.info.name} {userAuth.info.lastname}
            </li>
            <li>Birthday: {userAuth.info.birthday}</li>
            <li>Email: {userAuth.info.email}</li>
            <li>Country: {userAuth.info.country}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
