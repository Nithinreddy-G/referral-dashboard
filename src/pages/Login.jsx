import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", "loggedin");
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "380px",
          background: "white",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            color: "#6366f1",
            marginBottom: "10px",
            fontSize: "52px",
          }}
        >
          Go Business
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "30px",
          }}
        >
          Sign in to open your referral dashboard.
        </p>

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Email
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            background: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Login;