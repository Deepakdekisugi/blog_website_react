import styled from "styled-components";

export default function Write() {
  return (
    <Write1>
      <div className="write">
        <img
          className="writeImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />
            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div>
    </Write1>
  );
}

const Write1 = styled.div`
  .write {
    padding-top: 50px;
  }

  .writeImg {
    margin-left: 150px;
    width: 70vw;
    height: 250px;
    border-radius: 10px;
    object-fit: cover;
  }

  .writeForm {
    position: relative;
  }

  .writeFormGroup {
    margin-left: 150px;
    display: flex;
    align-items: center;
  }

  .writeIcon {
    width: 25px;
    height: 25px;
    font-size: 20px;
    border: 1px solid;
    border-radius: 50%;
    color: rgb(129, 125, 125);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .writeInput {
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;
  }

  .writeInput::placeholder {
    color: rgb(189, 185, 185);
    font-weight: 400;
  }

  .writeInput:focus {
    outline-style: none;
  }

  .writeText {
    width: 70vw;
    height: 100vh;
    font-family: inherit;
    font-size: 20px;
  }

  .writeSubmit {
    position: absolute;
    top: 20px;
    right: 50px;
    color: white;
    background-color: teal;
    padding: 10px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
