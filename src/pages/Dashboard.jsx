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
            padding: "25px",
            background: "#f4f6f9",
            minHeight: "100vh",
          }}
        >
          <h1>Referral Dashboard</h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                width: "220px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>Total Referrals</h3>
              <h2>120</h2>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                width: "220px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>Pending</h3>
              <h2>40</h2>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                width: "220px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>Hired</h3>
              <h2>25</h2>
            </div>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              marginTop: "30px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Referral List</h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "15px",
              }}
            >
              <thead>
                <tr style={{ background: "#2563eb", color: "white" }}>
                  <th style={{ padding: "12px" }}>ID</th>
                  <th>Name</th>
                  <th>Candidate</th>
                  <th>Position</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {referrals.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
                      {item.id}
                    </td>
                    <td style={{ borderBottom: "1px solid #ddd" }}>
                      {item.name}
                    </td>
                    <td style={{ borderBottom: "1px solid #ddd" }}>
                      Candidate {item.id}
                    </td>
                    <td style={{ borderBottom: "1px solid #ddd" }}>
                      {item.position}
                    </td>
                    <td style={{ borderBottom: "1px solid #ddd" }}>
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