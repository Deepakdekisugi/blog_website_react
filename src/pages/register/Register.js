import styled from "styled-components";

export default function Register() {
  return (
    <Register1>
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
          />
          <label>Email</label>
          <input
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
      </div>
    </Register1>
  );
}

const Register1 = styled.div`
  .register {
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-size: cover;
  }

  .registerTitle {
    font-size: 50px;
  }

  .registerForm {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .registerForm > label {
    margin: 10px 0;
  }

  .registerInput {
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 10px;
  }

  .registerInput:focus {
    outline: none;
  }

  .registerButton {
    margin-top: 20px;
    cursor: pointer;
    background-color: teal;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    text-align: center;
  }

  .registerLoginButton {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: lightcoral;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
  }
`;
