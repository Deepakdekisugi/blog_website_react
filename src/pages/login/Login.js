import styled from "styled-components";

export default function Login() {
  return (
    <Login1>
      <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
          <label>Email</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
          />
          <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
      </div>
    </Login1>
  );
}

const Login1 = styled.div`
  .login {
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    background-size: cover;
  }

  .loginTitle {
    font-size: 50px;
  }

  .loginForm {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  .loginForm > label {
    margin: 10px 0;
  }

  .loginInput {
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 10px;
  }

  .loginInput:focus {
    outline: none;
  }

  .loginButton {
    margin-top: 20px;
    cursor: pointer;
    background-color: lightcoral;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    text-align: center;
  }

  .loginRegisterButton {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: teal;
    cursor: pointer;
    padding: 10px;
    border: none;
    color: white;
    border-radius: 10px;
  }
`;
