import styled from "styled-components";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <Settings1>
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingsPPInput"
              />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Deepak" name="name" />
            <label>Email</label>
            <input type="email" placeholder="dk376907@gmail.com" name="email" />
            <label>Password</label>
            <input type="password" placeholder="Password" name="password" />
            <button className="settingsSubmitButton" type="submit">
              Update
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    </Settings1>
  );
}

const Settings1 = styled.div`
  .settings {
    display: flex;
  }

  .settingsWrapper {
    flex: 9;
    padding: 20px;
  }

  .settingsTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .settingsTitleUpdate {
    font-size: 30px;
    margin-bottom: 20px;
    color: lightcoral;
  }

  .settingsTitleDelete {
    color: red;
    font-size: 12px;
    cursor: pointer;
  }

  .settingsForm {
    display: flex;
    flex-direction: column;
  }

  .settingsPP {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .settingsPP > img {
    height: 70px;
    width: 70px;
    border-radius: 20px;
    object-fit: cover;
  }

  .settingsPPIcon {
    width: 25px;
    height: 25px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    margin-left: 10px;
    color: white;
    background-color: lightcoral;
    cursor: pointer;
  }

  .settingsPPButton:focus {
    outline-style: none;
  }

  .settingsForm > label {
    font-size: 20px;
    margin-top: 20px;
  }

  .settingsPPInput {
    width: 30%;
  }

  .settingsForm > input {
    color: gray;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 30px;
    border: none;
    border-bottom: 1px solid lightgray;
  }

  .settingsSubmitButton {
    align-self: center;
    width: 150px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: teal;
    padding: 10px;
    margin-top: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .settingsSubmitButton:hover {
    background-color: rgb(1, 114, 114);
  }
`;
