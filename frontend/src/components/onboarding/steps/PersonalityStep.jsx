import React from "react";

const orange = "#E9752B";

const descriptions = [
  {
    name: "Observer",
    icon: "👁️",
    description:
      "Thoughtful, reflective, and attentive to the details around you.",
  },
  {
    name: "Empath",
    icon: "❤️",
    description:
      "Values understanding, kindness, and meaningful emotional connection.",
  },
  {
    name: "Adventurer",
    icon: "🧭",
    description:
      "Open to new experiences, new people, and unexpected possibilities.",
  },
  {
    name: "Connector",
    icon: "🤝",
    description:
      "Naturally brings people together and helps community grow.",
  },
];

const interests = [
  {
    name: "Travel",
    icon: "✈️",
  },
  {
    name: "Fitness",
    icon: "💪",
  },
  {
    name: "Food & Dining",
    icon: "🍽️",
  },
  {
    name: "Music",
    icon: "🎵",
  },
  {
    name: "Sports",
    icon: "🏅",
  },
  {
    name: "Outdoor Adventures",
    icon: "🌲",
  },
  {
    name: "Arts and Culture",
    icon: "🎨",
  },
  {
    name: "Reading",
    icon: "📚",
  },
  {
    name: "Volunteering",
    icon: "🌱",
  },
  {
    name: "Dancing",
    icon: "💃",
  },
];

export default function PersonalityStep({
  formData,
  setFormData,
  onBack,
  onNext,
}) {
  const selectedDescriptions =
    formData.what_describes_you_best || [];

  const selectedInterests =
    formData.interests_and_passions || [];

  function toggleDescription(option) {
    let updatedSelections;

    if (selectedDescriptions.includes(option)) {
      updatedSelections = selectedDescriptions.filter(
        (item) => item !== option
      );
    } else {
      updatedSelections = [
        ...selectedDescriptions,
        option,
      ];
    }

    setFormData((currentData) => ({
      ...currentData,
      what_describes_you_best:
        updatedSelections,
    }));
  }

  function toggleInterest(option) {
    let updatedSelections;

    if (selectedInterests.includes(option)) {
      updatedSelections = selectedInterests.filter(
        (item) => item !== option
      );
    } else {
      updatedSelections = [
        ...selectedInterests,
        option,
      ];
    }

    setFormData((currentData) => ({
      ...currentData,
      interests_and_passions:
        updatedSelections,
    }));
  }

  function personalityCardStyle(isSelected) {
    return {
      position: "relative",
      minHeight: "210px",
      padding: "28px 24px",
      borderRadius: "24px",

      border: isSelected
        ? `2px solid ${orange}`
        : "1px solid #E8E3DF",

      backgroundColor: isSelected
        ? "#FFF6F0"
        : "#FFFFFF",

      color: "#2A2A2A",
      cursor: "pointer",
      textAlign: "center",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      transition:
        "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",

      transform: isSelected
        ? "translateY(-4px)"
        : "translateY(0)",

      boxShadow: isSelected
        ? "0 0 0 4px rgba(233,117,43,0.08), 0 10px 26px rgba(233,117,43,0.16)"
        : "0 4px 14px rgba(0,0,0,0.04)",
    };
  }

  function interestChipStyle(isSelected) {
    return {
      minHeight: "52px",
      padding: "12px 18px",
      borderRadius: "999px",

      border: isSelected
        ? `2px solid ${orange}`
        : "1px solid #E8E3DF",

      backgroundColor: isSelected
        ? "#FFF6F0"
        : "#FFFFFF",

      color: isSelected
        ? "#B95318"
        : "#333333",

      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      textAlign: "center",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",

      transition:
        "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",

      transform: isSelected
        ? "translateY(-2px)"
        : "translateY(0)",

      boxShadow: isSelected
        ? "0 0 0 3px rgba(233,117,43,0.07), 0 6px 16px rgba(233,117,43,0.12)"
        : "0 2px 8px rgba(0,0,0,0.03)",
    };
  }

  const progress = 33;

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "880px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            fontSize: "0.9rem",
            color: "#555555",
          }}
        >
          <span>Profile progress</span>
          <span>{progress}%</span>
        </div>

        <div
          style={{
            width: "100%",
            height: "10px",
            backgroundColor: "#F1ECE7",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: orange,
              borderRadius: "999px",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E8E3DF",
          borderRadius: "28px",
          padding: "32px",
          boxShadow:
            "0 8px 24px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            margin: "0 0 12px 0",
            fontSize: "38px",
            lineHeight: "44px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
            background:
              "linear-gradient(135deg, #E9752B 0%, #F7A76F 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          What makes you, you?
        </h1>

        <p
          style={{
            margin: "0 0 32px 0",
            color: "#666666",
            fontSize: "16px",
            lineHeight: "28px",
          }}
        >
          Choose the qualities that best reflect
          who you are. Most people are a mix, so
          select everything that feels right.
        </p>

        <section
          style={{
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                margin: "0 0 8px 0",
                fontSize: "24px",
                color: "#2A2A2A",
              }}
            >
              Your personality
            </h2>

            <p
              style={{
                margin: 0,
                color: "#666666",
                lineHeight: "24px",
              }}
            >
              Select all the qualities that feel
              like you.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {descriptions.map((option) => {
              const isSelected =
                selectedDescriptions.includes(
                  option.name
                );

              return (
                <button
                  key={option.name}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    toggleDescription(
                      option.name
                    )
                  }
                  style={personalityCardStyle(
                    isSelected
                  )}
                >
                  {isSelected && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        top: "14px",
                        right: "16px",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: orange,
                        color: "#FFFFFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      ✓
                    </span>
                  )}

                  <span
                    aria-hidden="true"
                    style={{
                      fontSize: "42px",
                      lineHeight: 1,
                      marginBottom: "16px",
                    }}
                  >
                    {option.icon}
                  </span>

                  <span
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      fontSize: "19px",
                      fontWeight: "700",
                      color: "#2A2A2A",
                    }}
                  >
                    {option.name}
                  </span>

                  <span
                    style={{
                      display: "block",
                      maxWidth: "240px",
                      color: "#666666",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "22px",
                    }}
                  >
                    {option.description}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section
          style={{
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                margin: "0 0 8px 0",
                fontSize: "24px",
                color: "#2A2A2A",
              }}
            >
              Interests and passions
            </h2>

            <p
              style={{
                margin: 0,
                color: "#666666",
                lineHeight: "24px",
              }}
            >
              Select as many as you like. These
              will help others discover what you
              have in common.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {interests.map((option) => {
              const isSelected =
                selectedInterests.includes(
                  option.name
                );

              return (
                <button
                  key={option.name}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() =>
                    toggleInterest(option.name)
                  }
                  style={interestChipStyle(
                    isSelected
                  )}
                >
                  <span aria-hidden="true">
                    {option.icon}
                  </span>

                  <span>{option.name}</span>

                  {isSelected && (
                    <span
                      aria-hidden="true"
                      style={{
                        color: orange,
                        fontWeight: "700",
                      }}
                    >
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <button
            type="button"
            onClick={onBack}
            style={{
              minHeight: "52px",
              padding: "12px 24px",
              borderRadius: "16px",
              border: `2px solid ${orange}`,
              backgroundColor: "#FFFFFF",
              color: orange,
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Back
          </button>

          <button
            type="button"
            onClick={onNext}
            style={{
              minHeight: "52px",
              padding: "12px 28px",
              borderRadius: "16px",
              border: `2px solid ${orange}`,
              backgroundColor: orange,
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow:
                "0 8px 22px rgba(233,117,43,0.22)",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}