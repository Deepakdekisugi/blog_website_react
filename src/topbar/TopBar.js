import React from "react";
import styled from "styled-components";

export default function TopBar() {
  return (
    <TopBarStyle>
      <div className="navbar">
        <div className="topLeft">
          <i className="shareIcon fa-brands fa-facebook-f"></i>
          <i className="shareIcon fa-brands fa-x-twitter"></i>
          <i className="shareIcon fa-brands fa-pinterest"></i>
          <i className="shareIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCentre">
          <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">About</li>
            <li className="topListItem">Contact</li>
            <li className="topListItem">Write</li>
            <li className="topListItem">Logout</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="image"
          />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </TopBarStyle>
  );
}

const TopBarStyle = styled.div`
  .navbar {
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

  .shareIcon {
    font-size: 30px;
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
    font-size: 25px;
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
