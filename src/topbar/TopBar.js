import React from "react";
import styled from 'styled-components';


export default function TopBar() {
  
  return (
  <TopBarStyle>
    <div className="navbar">TopBar</div>
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
`;