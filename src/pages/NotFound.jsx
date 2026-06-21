import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f5f5fb",
      }}
    >
      <h1 style={{ fontSize: "80px" }}>
        404
      </h1>

      <p>Page not found</p>

      <Link to="/">
        Back to dashboard
      </Link>
    </div>
  );
}

export default NotFound;