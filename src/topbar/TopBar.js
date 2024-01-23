import React from "react";
import styled from 'styled-components';


export default function TopBar() {
  
  return (
  <TopBarStyle>
    <div className="navbar">
      <div className="topLeft">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-instagram"></i>
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
          src="https://drive.google.com/file/d/1Gl1GjH7PaCJHCYB8YQXrzo3xkyno0pb6/view?usp=drive_link"
        />
      </div>
    </div>
  </TopBarStyle>
  )
}

const TopBarStyle = styled.div`
    margin: 0%;
    padding: 0;
    .navbar{
      height: 50px;
      width: 100%;
      background-color: aqua;
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      font-family: josefin Sans, sans-serif;
    }

    .topLeft, .topRight{
      flex: 3;
    }

    .topCentre{
      flex: 6;
    }
`;