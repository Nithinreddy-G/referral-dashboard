import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function ReferralDetails() {
  const { id } = useParams();

  const referrals = [
    {
      id: "1",
      name: "Nithin",
      service: "Frontend",
      date: "2024/06/21",
      profit: "$25,000",
    },
    {
      id: "2",
      name: "Bhavya Sree",
      service: "React",
      date: "2024/06/15",
      profit: "$18,500",
    },
    {
      id: "3",
      name: "Akhil Reddy",
      service: "UI",
      date: "2024/06/10",
      profit: "$12,000",
    },
  ];

  const referral = referrals.find((item) => item.id === id);

  if (!referral) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>404</h1>
        <p>Referral Not Found</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#f5f5fb",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#6366f1",
            fontWeight: "600",
          }}
        >
          ← Back to dashboard
        </Link>

        <h1
          style={{
            marginTop: "25px",
            color: "#0f172a",
            fontSize: "52px",
          }}
        >
          Referral Details
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "40px",
            fontSize: "18px",
          }}
        >
          Full information for this referral partner.
        </p>

        <div
          style={{
            background: "white",
            maxWidth: "700px",
            borderRadius: "20px",
            padding: "40px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "42px",
                color: "#0f172a",
              }}
            >
              {referral.name}
            </h2>

            <span
              style={{
                background: "#eef2ff",
                color: "#6366f1",
                padding: "10px 18px",
                borderRadius: "20px",
                fontWeight: "600",
              }}
            >
              {referral.service}
            </span>
          </div>

          <hr style={{ border: "1px solid #eee" }} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "22px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong style={{ color: "#64748b" }}>REFERRAL ID</strong>
            <span>{referral.id}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "22px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong style={{ color: "#64748b" }}>NAME</strong>
            <span>{referral.name}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "22px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong style={{ color: "#64748b" }}>SERVICE NAME</strong>
            <span>{referral.service}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "22px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong style={{ color: "#64748b" }}>DATE</strong>
            <span>{referral.date}</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "22px 0",
            }}
          >
            <strong style={{ color: "#64748b" }}>PROFIT</strong>
            <span>{referral.profit}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReferralDetails;