import React from "react";


export default function TopBar() {
  const topBarStyle = {
    height: "50px",
    width: "100%",
    backgroundColor: "aqua",
    positon: "sticky",
    top: 0,
    display: "flex",
    alignitems: "center",
    fontfamily: 'josefin Sans, sans-serif',
  };

  return <div className="top" style={topBarStyle}>TopBar</div>;
}
