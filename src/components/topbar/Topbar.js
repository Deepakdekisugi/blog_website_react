import { Link } from "react-router-dom";
import styled from "styled-components";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <Topbar1>
      <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {user && <li className="topListItem">LOGOUT</li>}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </Topbar1>
  );
}

const Topbar1 = styled.div`
  .top {
    width: 100%;
    height: 50px;
    background-color: white;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 999;
    font-family: "Josefin Sans", sans-serif;
  }

  .topLeft,
  .topRight {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topIcon {
    font-size: 20px;
    margin-right: 10px;
    color: #444;
    cursor: pointer;
  }

  .topCenter {
    flex: 6;
  }

  .topList {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .topListItem {
    margin-right: 20px;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
  }

  .topListItem:hover {
    color: gray;
  }

  .topImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 15px;
    cursor: pointer;
  }

  .topSearchIcon {
    font-size: 18px;
    color: #666;
    cursor: pointer;
  }
`;
