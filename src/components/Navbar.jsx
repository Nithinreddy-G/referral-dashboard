import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "white",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        borderBottom: "1px solid #eee",
      }}
    >
      <h2 style={{ color: "#6366f1" }}>
        Go Business
      </h2>

      <div>
        <button
          style={{
            background: "#6366f1",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            marginRight: "10px",
          }}
        >
          Try for free
        </button>

        <button
          onClick={logout}
          style={{
            background: "white",
            border: "1px solid #ddd",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Navbar;