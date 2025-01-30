import { Link } from "react-router-dom";

export const Login = ({ props }) => {
  return (
    <div className="login-container">
        {[...Array(50)].map((_, i) => (
                <span key={i} style={{ '--i': i }}></span>
        ))}
      <div className="loginForm">
        <h2>Login</h2>
        <form>
          <div className="input-box">
            <input
              type="text"
              name="username"
              id="username"
              placeholder=" " 
              onChange={(e) =>
                props.setUser({ ...props.user, [e.target.name]: e.target.value })
              }
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" " 
              onChange={(e) =>
                props.setUser({ ...props.user, [e.target.name]: e.target.value })
              }
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="forgot-password">
            <a href="#.com">Forgot your password?</a>
          </div>
        </form>
        <button onClick={props.submitLogin} className="button btn">
          LOGIN
        </button>

        <div className="signup-link">
          <Link to="/register">If you do not have a jutsu, sign up!</Link>
        </div>
      </div>
    </div>
  );
};
