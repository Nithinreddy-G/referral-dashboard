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
<> <Navbar />

```
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
      <div style={{ marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "48px",
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
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
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{title}</h3>
            <h1>{value}</h1>
          </div>
        ))}
      </div>

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "16px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.08)",
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
                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >
                  {item.id}
                </td>

                <td
                  style={{
                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >
                  {item.name}
                </td>

                <td
                  style={{
                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >
                  Candidate {item.id}
                </td>

                <td
                  style={{
                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >
                  {item.position}
                </td>

                <td
                  style={{
                    borderBottom:
                      "1px solid #e5e7eb",
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
