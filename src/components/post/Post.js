import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Post({ img }) {
  return (
    <Post1>
      <div className="post">
        <img className="postImg" src={img} alt="" />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
            </span>
            <span className="postCat">
              <Link className="link" to="/posts?cat=Music">
                Life
              </Link>
            </span>
          </div>
          <span className="postTitle">
            <Link to="/post/abc" className="link">
              Lorem ipsum dolor sit amet
            </Link>
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
      </div>
    </Post1>
  );
}

const Post1 = styled.div`
  .post {
    width: 385px;
    margin: 0px 25px 40px 25px;
    display: flex;
    flex-direction: column;
  }

  .postImg {
    width: 385px;
    height: 280px;
    object-fit: cover;
    border-radius: 7px;
  }

  .postInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .postCat {
    font-family: "Varela Round", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #be9656;
    line-height: 19px;
    margin-top: 15px;
    margin-right: 10px;
    cursor: pointer;
  }

  .postTitle {
    font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 900;
    margin-top: 15px;
    cursor: pointer;
  }

  .postDate {
    font-family: "Lora", serif;
    font-style: italic;
    font-size: 13px;
    font-weight: 400;
    color: #999999;
    margin-top: 15px;
  }

  .postDesc {
    font-family: "Varela Round", Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #444444;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
