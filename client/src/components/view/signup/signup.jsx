import { Link } from "react-router-dom";

export function Signup({ props }) {
  return (
    <div className="register-container">
        {[...Array(50)].map((_, i) => (
                <span key={i} style={{ '--i': i }}></span>
        ))}
      <div className="registerForm">
        <h2>Register</h2>
        <form action="">
          <div className="input-box">
            <input
              type="text"
              name="name"
              className="username-input"
              id="name"
              placeholder=" " 
              onChange={(e) =>
                props.setUser({ ...props.user, [e.target.name]: e.target.value })
              }
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="surname"
              className="username-input"
              id="surname"
              placeholder=" " 
              onChange={(e) =>
                props.setUser({ ...props.user, [e.target.name]: e.target.value })
              }
            />
            <label htmlFor="surname">Surname</label>
          </div>
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
        </form>
        <button onClick={props.submitSigIn} className="button btn">
          REGISTER
        </button>
        <div className="signin-link">
          <Link to="/login">Do you already have a jutsu?</Link>
        </div>
      </div>
    </div>
  );
}
