import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const referrals = [
    {
      id: 1,
      name: "Nithin",
      position: "Frontend Developer",
      status: "Pending",
    },
    {
      id: 2,
      name: "Bhavya Sree",
      position: "React Developer",
      status: "Hired",
    },
    {
      id: 3,
      name: "Akhil Reddy",
      position: "UI Developer",
      status: "Interview",
    },
  ];

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            background: "#f5f5fb",
            minHeight: "100vh",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "30px" }}>
            <h1
              style={{
                fontSize: "48px",
                color: "#1e293b",
                marginBottom: "10px",
              }}
            >
              Referral Dashboard
            </h1>

            <p
              style={{
                color: "#64748b",
                fontSize: "16px",
              }}
            >
              Track your referrals, earnings and partner activity in one place.
            </p>
          </div>

          {/* Overview Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            {[
              ["Total Referrals", "120"],
              ["Pending", "40"],
              ["Hired", "25"],
              ["Total Earnings", "$534"],
            ].map(([title, value]) => (
              <div
                key={title}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                }}
              >
                <h3
                  style={{
                    color: "#475569",
                    marginBottom: "15px",
                  }}
                >
                  {title}
                </h3>

                <h1
                  style={{
                    color: "#1e293b",
                    fontSize: "42px",
                  }}
                >
                  {value}
                </h1>
              </div>
            ))}
          </div>

          {/* Service Summary */}
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              marginBottom: "25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>
              Service Summary
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "15px",
              }}
            >
              <div>
                <p style={{ color: "#64748b" }}>Service</p>
                <h4>Frontend</h4>
              </div>

              <div>
                <p style={{ color: "#64748b" }}>Your Referrals</p>
                <h4>3</h4>
              </div>

              <div>
                <p style={{ color: "#64748b" }}>Active Referrals</p>
                <h4>2</h4>
              </div>

              <div>
                <p style={{ color: "#64748b" }}>Total Earnings</p>
                <h4>$534</h4>
              </div>
            </div>
          </div>

          {/* Referral Link */}
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              marginBottom: "25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Refer Friends and Earn More</h3>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "15px",
                flexWrap: "wrap",
              }}
            >
              <input
                value="https://gobusiness.com/referral/NITHIN"
                readOnly
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                }}
              />

              <button
                style={{
                  background: "#6366f1",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Copy
              </button>
            </div>
          </div>

          {/* Referral Table */}
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Referral List
            </h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "#6366f1",
                    color: "white",
                  }}
                >
                  <th style={{ padding: "14px" }}>ID</th>
                  <th>Name</th>
                  <th>Candidate</th>
                  <th>Position</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {referrals.map((item) => (
                  <tr key={item.id}>
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {item.id}
                    </td>

                    <td
                      style={{
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {item.name}
                    </td>

                    <td
                      style={{
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      Candidate {item.id}
                    </td>

                    <td
                      style={{
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {item.position}
                    </td>

                    <td
                      style={{
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;