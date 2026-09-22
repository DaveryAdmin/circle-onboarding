import React from "react";

const orange = "#E9752B";

export default function MemberDetailPage({
  member,
  onBack,
}) {
  const initials =
    member.full_name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase() || "?";

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <button
        onClick={onBack}
        style={{
          marginBottom: "20px",
          background: orange,
          color: "#fff",
          border: "none",
          padding: "12px 18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ← Back To Directory
      </button>

      <div
        style={{
          background: "#fff",
          borderRadius: "24px",
          padding: "32px",
          border: "1px solid #E8E3DF",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#FFF6F0",
              border: `2px solid ${orange}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "32px",
              fontWeight: "700",
              color: orange,
            }}
          >
            {initials}
          </div>

          <div>
            <h1>{member.full_name}</h1>

            <div>
              @{member.username}
            </div>

            <div>
              📍 {member.location1}
            </div>

            <div
              style={{
                marginTop: "8px",
                fontWeight: "600",
              }}
            >
              {member.relationship_status}
            </div>
          </div>
        </div>
      </div>

      {member.write_a_few_words_about_your_journey && (
        <Section
          title="✨ This Chapter"
          content={
            member.write_a_few_words_about_your_journey
          }
        />
      )}

      {member.what_i_am_looking_for && (
        <Section
          title="❤️ Looking For"
          content={
            member.what_i_am_looking_for
          }
        />
      )}

      <TagSection
        title="🌿 Personality"
        items={
          member.what_describes_you_best || []
        }
      />

      <TagSection
        title="🎨 Interests"
        items={
          member.interests_and_passions || []
        }
      />

      <TagSection
        title="🤝 Community Role"
        items={
          member.how_do_you_see_yourself_here || []
        }
      />

      <TagSection
        title="💬 Ways To Connect"
        items={
          member.best_ways_to_connect || []
        }
      />
    </div>
  );
}

function Section({
  title,
  content,
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E8E3DF",
        borderRadius: "20px",
        padding: "24px",
        marginBottom: "20px",
      }}
    >
      <h2>{title}</h2>

      <p>{content}</p>
    </div>
  );
}

function TagSection({
  title,
  items,
}) {
  if (!items?.length) {
    return null;
  }

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E8E3DF",
        borderRadius: "20px",
        padding: "24px",
        marginBottom: "20px",
      }}
    >
      <h2>{title}</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              background: "#FFF6F0",
              padding: "8px 14px",
              borderRadius: "999px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}