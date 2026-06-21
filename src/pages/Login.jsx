function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login Page</h1>
      <input placeholder="Email" />
      <br /><br />
      <input placeholder="Password" type="password" />
      <br /><br />
      <button>Login</button>
    </div>
  );
}

export default Login;