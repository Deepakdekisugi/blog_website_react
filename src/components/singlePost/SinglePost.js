import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SinglePost() {
  return (
    <SinglePost1>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  Safak
                </Link>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
            eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
            adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
            doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
            eum beatae, adipisci voluptas a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </SinglePost1>
  );
}

const SinglePost1 = styled.div`
  .singlePost {
    flex: 9;
  }

  .singlePostWrapper {
    padding: 20px;
    padding-right: 0;
  }

  .singlePostImg {
    width: 100%;
    height: 300px;
    border-radius: 5px;
    object-fit: cover;
  }

  .singlePostTitle {
    text-align: center;
    margin: 10px;
    font-size: 28px;
    font-family: "Lora", sans-serif;
  }

  .singlePostEdit {
    float: right;
    font-size: 16px;
  }

  .singlePostIcon {
    margin-left: 10px;
    cursor: pointer;
  }

  .singlePostIcon:first-child {
    color: teal;
  }
  .singlePostIcon:last-child {
    color: tomato;
  }

  .singlePostInfo {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    color: #be9656;
    font-family: "Varela Round", Arial, Helvetica, sans-serif;
  }

  .singlePostAuthor {
    margin-left: 5px;
  }

  .singlePostDesc {
    color: #666;
    font-size: 18px;
    line-height: 25px;
  }

  .singlePostDesc::first-letter {
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
  }
`;
