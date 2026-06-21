import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", flex: 1 }}>
          <h1>Referral Dashboard</h1>

          {/* Cards */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <h3>Total Referrals</h3>
              <p>120</p>
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <h3>Pending</h3>
              <p>40</p>
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                borderRadius: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <h3>Hired</h3>
              <p>25</p>
            </div>
          </div>

          {/* Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "30px",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  ID
                </th>

                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  Name
                </th>

                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  Position
                </th>

                <th
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  1
                </td>

                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  John Doe
                </td>

                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  Frontend Developer
                </td>

                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  Pending
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  2
                </td>

                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  Jane Smith
                </td>

                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  React Developer
                </td>

                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                  }}
                >
                  Hired
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;