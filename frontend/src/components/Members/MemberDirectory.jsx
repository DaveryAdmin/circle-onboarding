import React from "react";
import MemberCard from "./MemberCard";

export default function MemberDirectory() {
  const members = [
    {
      id: 1,
      full_name: "Jordan Smith",
      username: "jordans",
      location1: "Ottawa West",

      relationship_status: "Searching",

      how_do_you_see_yourself_here: [
        "Explorer",
        "Learner",
      ],

      interests_and_passions: [
        "Travel",
        "Reading",
        "Music",
      ],

      write_a_few_words_about_your_journey:
        "I'm looking forward to meeting new people and building meaningful connections.",
    },

    {
      id: 2,
      full_name: "Karen Miller",
      username: "karenm",
      location1: "Centretown",

      relationship_status: "Searching",

      how_do_you_see_yourself_here: [
        "Contributor",
      ],

      interests_and_passions: [
        "Fitness",
        "Food & Dining",
        "Travel",
      ],

      write_a_few_words_about_your_journey:
        "Ready to embrace a new chapter and meet people who value kindness and authenticity.",
    },

    {
      id: 3,
      full_name: "David Thompson",
      username: "dthompson",
      location1: "Ottawa East",

      relationship_status: "Friendship Only",

      how_do_you_see_yourself_here: [
        "Volunteer",
      ],

      interests_and_passions: [
        "Reading",
        "Arts and Culture",
        "Music",
      ],

      write_a_few_words_about_your_journey:
        "Looking to build friendships and share experiences with great people.",
    },

    {
      id: 4,
      full_name: "Lisa Parker",
      username: "lisap",

      location1: "Gatineau",

      relationship_status:
        "In a Committed Relationship",

      how_do_you_see_yourself_here: [
        "Contributor",
        "Volunteer",
      ],

      interests_and_passions: [
        "Volunteering",
        "Outdoor Adventures",
        "Fitness",
      ],

      write_a_few_words_about_your_journey:
        "Passionate about community, volunteering, and helping others feel welcome.",
    },
  ];

  const seekingMembers =
    members.filter(
      (member) =>
        member.relationship_status ===
        "Searching"
    );

  const friendshipMembers =
    members.filter(
      (member) =>
        member.relationship_status ===
        "Friendship Only"
    );

  const communityBuilders =
    members.filter(
      (member) =>
        member.relationship_status ===
        "In a Committed Relationship"
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
                onViewProfile={() => {
                  console.log(
                    "View profile:",
                    member.id
                  );
                }}
              />
            )
          )}
        </div>
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