import React from "react";

const orange = "#E9752B";

export default function Navigation({
  activeTab,
  onNavigate,
}) {
  const tabs = [
    {
      id: "profile",
      label: "My Profile",
    },
    {
      id: "members",
      label: "Members",
    },
    {
      id: "testlab",
      label: "Test Lab",
    },
  ];

  return (
    <header
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E8E3DF",
        padding: "16px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div
          style={{
            color: orange,
            fontWeight: "800",
            fontSize: "22px",
          }}
        >
          OVER40CONNECT
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() =>
                onNavigate(tab.id)
              }
              style={{
                border:
                  activeTab === tab.id
                    ? `1px solid ${orange}`
                    : "1px solid #DDDDDD",
                background:
                  activeTab === tab.id
                    ? "#FFF6F0"
                    : "#FFFFFF",
                color:
                  activeTab === tab.id
                    ? orange
                    : "#555555",
                borderRadius: "10px",
                padding: "10px 16px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
