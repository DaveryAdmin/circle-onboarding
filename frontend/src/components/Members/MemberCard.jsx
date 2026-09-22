import React from "react";

const orange = "#E9752B";

export default function MemberCard({
  member,
  onViewProfile,
}) {
  const initials =
    member.full_name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase() || "?";

  let communityType = {
    label: "Member",
    icon: "👤",
  };

  if (
    member.relationship_status ===
    "Searching"
  ) {
    communityType = {
      label: "Seeking Connection",
      icon: "❤️",
    };
  }

  if (
    member.relationship_status ===
    "Friendship Only"
  ) {
    communityType = {
      label: "Friendship Circle",
      icon: "🤝",
    };
  }

  if (
    member.relationship_status ===
    "In a Committed Relationship"
  ) {
    communityType = {
      label: "Community Builder",
      icon: "🌱",
    };
  }

  const topRoles =
    member.how_do_you_see_yourself_here?.slice(
      0,
      2
    ) || [];

  const topInterests =
    member.interests_and_passions?.slice(
      0,
      3
    ) || [];

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E8E3DF",
        borderRadius: "24px",
        padding: "24px",
        boxShadow:
          "0 8px 24px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: "#FFF6F0",
            border: `2px solid ${orange}`,
            color: orange,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "700",
            fontSize: "24px",
          }}
        >
          {initials}
        </div>

        <div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#2A2A2A",
            }}
          >
            {member.full_name}
          </div>

          <div
            style={{
              color: "#666666",
            }}
          >
            @{member.username}
          </div>

          <div
            style={{
              color: "#666666",
              marginTop: "4px",
            }}
          >
            📍 {member.location1}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "#FFF6F0",
          border: "1px solid #F3E3D7",
          borderRadius: "999px",
          padding: "8px 12px",
          width: "fit-content",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        <span>{communityType.icon}</span>
        <span>{communityType.label}</span>
      </div>

      {topRoles.length > 0 && (
        <div>
          <strong>Community Role</strong>

          <div
            style={{
              marginTop: "6px",
              color: "#666666",
            }}
          >
            {topRoles.join(" • ")}
          </div>
        </div>
      )}

      {topInterests.length > 0 && (
        <div>
          <strong>Interests</strong>

          <div
            style={{
              marginTop: "6px",
              color: "#666666",
            }}
          >
            {topInterests.join(" • ")}
          </div>
        </div>
      )}

      {member.write_a_few_words_about_your_journey && (
        <div>
          <strong>✨ This Chapter</strong>

          <p
            style={{
              color: "#555555",
              lineHeight: "1.7",
              marginTop: "8px",
            }}
          >
            "
            {
              member.write_a_few_words_about_your_journey
            }
            "
          </p>
        </div>
      )}

      <button
        onClick={() =>
          onViewProfile?.(member)
        }
        style={{
          marginTop: "auto",
          backgroundColor: orange,
          color: "#FFFFFF",
          border: "none",
          borderRadius: "16px",
          padding: "12px 20px",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        View Profile
      </button>
    </div>
  );
}