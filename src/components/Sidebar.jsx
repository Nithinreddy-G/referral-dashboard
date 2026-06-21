import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#1e293b",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          borderBottom: "1px solid #334155",
          paddingBottom: "15px",
        }}
      >
        Referral App
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "12px",
            borderRadius: "8px",
            background: "#334155",
          }}
        >
          📊 Dashboard
        </Link>

        <Link
          to="/referrals/1"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "12px",
            borderRadius: "8px",
            background: "#334155",
          }}
        >
          👥 Referrals
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            padding: "12px",
            borderRadius: "8px",
            background: "#334155",
          }}
        >
          👤 Profile
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;