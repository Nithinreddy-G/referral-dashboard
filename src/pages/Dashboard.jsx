import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const referrals = [
    {
      id: 1,
      name: "John Doe",
      position: "Frontend Developer",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "React Developer",
      status: "Hired",
    },
    {
      id: 3,
      name: "David Johnson",
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
          <div style={{ marginBottom: "25px" }}>
            <h1
              style={{
                fontSize: "50px",
                marginBottom: "10px",
                color: "#1e293b",
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

          {/* Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                width: "220px",
              }}
            >
              <h3>Total Referrals</h3>
              <h1>120</h1>
            </div>

            <div
             style={{
                background: "white",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                width: "220px"
              }}
            >
              <h3>Pending</h3>
              <h1>40</h1>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                width: "220px"
              }}
            >
              <h3>Hired</h3>
              <h1>25</h1>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                width: "220px"
              }}
            >
              <h3>Total Earnings</h3>
              <h1>$534</h1>
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