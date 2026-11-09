import React, {
  useEffect,
  useState,
} from "react";

import { useApi } from "../../hooks/useApi";

import MemberCard from "./MemberCard";
import MemberDetailPage from "./MemberDetailPage";

export default function MemberDirectory() {
  const { get } = useApi();

  const [members, setMembers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [selectedMember, setSelectedMember] =
    useState(null);

  useEffect(() => {
    async function loadMembers() {
      try {
        const result =
          await get("/member-profiles");

        setMembers(
          result.profiles || []
        );
      } catch (err) {
        console.error(err);

        setError(
          err.message ||
            "Unable to load members."
        );
      } finally {
        setLoading(false);
      }
    }

    loadMembers();
  }, []);

  if (selectedMember) {
    return (
      <MemberDetailPage
        member={selectedMember}
        onBack={() =>
          setSelectedMember(null)
        }
      />
    );
  }

  if (loading) {
    return (
      <div
        style={{
          padding: "2rem",
        }}
      >
        Loading members...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          padding: "2rem",
          color: "#D9534F",
        }}
      >
        {error}
      </div>
    );
  }

  /*
   * Relationship status can now contain
   * multiple selections.
   *
   * This helper also keeps older profiles
   * working if they still contain a single
   * relationship status string.
   */
  function hasRelationshipStatus(
    member,
    status
  ) {
    const relationshipStatus =
      member.relationship_status;

    if (Array.isArray(relationshipStatus)) {
      return relationshipStatus.includes(
        status
      );
    }

    return relationshipStatus === status;
  }

  const seekingMembers =
    members.filter((member) =>
      hasRelationshipStatus(
        member,
        "Searching"
      )
    );

  const friendshipMembers =
    members.filter((member) =>
      hasRelationshipStatus(
        member,
        "Friendship Only"
      )
    );

  const communityBuilders =
    members.filter((member) =>
      hasRelationshipStatus(
        member,
        "In a Committed Relationship"
      )
    );

  function renderSection(
    title,
    subtitle,
    membersToRender
  ) {
    return (
      <section
        style={{
          marginBottom: "48px",
        }}
      >
        <h2
          style={{
            marginBottom: "8px",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "#666666",
            marginBottom: "24px",
          }}
        >
          {subtitle}
        </p>

        {membersToRender.length === 0 ? (
          <p
            style={{
              color: "#888888",
            }}
          >
            No members yet.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "20px",
            }}
          >
            {membersToRender.map(
              (member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onViewProfile={() =>
                    setSelectedMember(
                      member
                    )
                  }
                />
              )
            )}
          </div>
        )}
      </section>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          marginBottom: "12px",
        }}
      >
        Discover People
      </h1>

      <p
        style={{
          color: "#666666",
          marginBottom: "40px",
          maxWidth: "700px",
          lineHeight: "1.8",
        }}
      >
        Connect with people who share
        your interests, values, and
        outlook on life.
      </p>

      {renderSection(
        "❤️ Seeking Connection",
        "Meet members looking for meaningful romantic connections.",
        seekingMembers
      )}

      {renderSection(
        "🤝 Friendship Circle",
        "Meet members who are interested in friendship, activities, and community.",
        friendshipMembers
      )}

      {renderSection(
        "🌱 Community Builders",
        "Meet members who help strengthen the community through involvement, support, and leadership.",
        communityBuilders
      )}
    </div>
  );
}