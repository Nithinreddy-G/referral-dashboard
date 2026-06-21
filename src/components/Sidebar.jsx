import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#1e293b",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <p>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </Link>
      </p>

      <p>
        <Link
          to="/referrals/1"
          style={{ color: "white", textDecoration: "none" }}
        >
          Referrals
        </Link>
      </p>

      <p>
        <Link
          to="/login"
          style={{ color: "white", textDecoration: "none" }}
        >
          Profile
        </Link>
      </p>
    </div>
  );
}

export default Sidebar;