import Sidebar from "../../components/sidebar/Sidebar";
import styled from "styled-components";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
  return (
    <Single1>
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </Single1>
  );
}
const Single1 = styled.div`
  .single {
    display: flex;
  }
`;
