import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import styled from "styled-components";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Homepage1>
        <Header />
        <div className="home">
          <Posts />
          <Sidebar />
        </div>
      </Homepage1>
    </>
  );
}

const Homepage1 = styled.div`
  .home {
    display: flex;
  }
`;
