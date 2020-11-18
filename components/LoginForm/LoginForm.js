import Link from "next/link";

const LoginForm = () => (
  <div className="generic-form">
    <h3>Login to Get Organized</h3>
    <form className="form-body">
      <label className="input-label" htmlFor="email">
        Email:
      </label>
      <input
        className="text-input"
        name="email"
        type="text"
        placeholder="Email address"
      />
      <label className="input-label" htmlFor="password">
        Password:
      </label>
      <input
        className="text-input"
        name="password"
        type="text"
        placeholder="Password"
      />
      <input className="submit" type="submit" value="Login" />
    </form>
    <div className="signup">
      <p>New here?</p>
      <Link href="/">
        <a>Sign Up</a>
      </Link>
    </div>
  </div>
);

export default LoginForm;
