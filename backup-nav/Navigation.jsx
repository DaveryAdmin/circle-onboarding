import React from "react";

const orange = "#E9752B";

export default function Navigation({
  activeTab,
  onNavigate,
}) {
  const tabs = [
    {
      id: "profile",
      label: "ðŸ  My Profile",
    },
    {
      id: "members",
      label: "ðŸ‘¥ Members",
    },
    {
      id: "testlab",
      label: "ðŸ§ª Test Lab",
    },
  ];

  function getButtonStyle(tabId) {
    const isActive =
      activeTab === tabId;

    return {
      border: isActive
        ? `1px solid ${orange}`
        : "1px solid transparent",
      borderRadius: "12px",
      padding: "11px 16px",
      backgroundColor: isActive
        ? "#FFF6F0"
        : "transparent",
      color: isActive
        ? orange
        : "#555555",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "700",
    };
  }

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#FFFFFF",
        borderBottom:
          "1px solid #E8E3DF",
        boxShadow:
          "0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent:
            "space-between",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <button
          type="button"
          onClick={() =>
            onNavigate("profile")
          }
          style={{
            padding: 0,
            border: "none",
            background: "transparent",
            color: orange,
            cursor: "pointer",
            fontSize: "20px",
            fontWeight: "800",
            letterSpacing: "0.4px",
          }}
        >
          OVER40CONNECT
        </button>

        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() =>
                onNavigate(tab.id)
              }
              style={getButtonStyle(
                tab.id
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
