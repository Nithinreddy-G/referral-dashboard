import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "70px",
        background: "#2563eb",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <h2>Referral Dashboard</h2>

      <button
        onClick={handleLogout}
        style={{
          padding: "8px 15px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          background: "white",
          color: "#2563eb",
          fontWeight: "bold",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;