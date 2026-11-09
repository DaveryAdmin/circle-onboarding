import React from "react";

const orange = "#E9752B";

export default function RelationshipStep({
  formData,
  setFormData,
  onBack,
  onNext,
}) {
  const maxCharacters = 200;

  const relationshipOptions = [
    "Searching",
    "In a Committed Relationship",
    "Friendship Only",
    "Other",
  ];

  // Make sure relationship_status is always treated as an array.
  // This also protects existing profiles that may still contain
  // one relationship status as a string.
  const selectedRelationships = Array.isArray(formData.relationship_status)
    ? formData.relationship_status
    : formData.relationship_status
    ? [formData.relationship_status]
    : [];

  const handleRelationshipToggle = (option) => {
    let updatedRelationships;

    if (selectedRelationships.includes(option)) {
      updatedRelationships = selectedRelationships.filter(
        (item) => item !== option
      );
    } else {
      updatedRelationships = [...selectedRelationships, option];
    }

    setFormData({
      ...formData,
      relationship_status: updatedRelationships,

      // Clear the "Other" description if Other is deselected.
      relationship_status_other:
        option === "Other" && selectedRelationships.includes("Other")
          ? ""
          : formData.relationship_status_other || "",
    });
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "760px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "28px",
          padding: "32px",
          border: "1px solid #E8E3DF",
          boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            margin: "0 0 12px 0",
            fontSize: "38px",
            fontWeight: "700",
            background:
              "linear-gradient(135deg, #E9752B 0%, #F7A76F 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Meaningful Connections
        </h1>

        <p
          style={{
            color: "#666666",
            fontSize: "16px",
            lineHeight: "28px",
            marginBottom: "32px",
          }}
        >
          There’s no right answer here. Share a little about the kind of
          connection you're hoping to find.
        </p>

        {/* Ideal Connection */}
        <div
          style={{
            background: "#FFF9F5",
            border: "1px solid #F3E3D7",
            borderRadius: "20px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "12px",
              color: "#2A2A2A",
            }}
          >
            ❤️ Your Ideal Connection
          </div>

          <p
            style={{
              color: "#666666",
              marginBottom: "16px",
              lineHeight: "26px",
            }}
          >
            Tell us a little about the kind of relationship, friendship, or
            connection you'd like to build.
          </p>

          <textarea
            rows={5}
            maxLength={maxCharacters}
            value={formData.what_i_am_looking_for || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                what_i_am_looking_for: e.target.value,
              })
            }
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "16px",
              border: "1px solid #E8E3DF",
              resize: "none",
              boxSizing: "border-box",
              fontSize: "16px",
            }}
          />

          <div
            style={{
              textAlign: "right",
              color: "#666666",
              marginTop: "8px",
            }}
          >
            {(formData.what_i_am_looking_for || "").length}/{maxCharacters}
          </div>
        </div>

        {/* Relationship Status */}
        <div
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              marginBottom: "8px",
              fontSize: "24px",
            }}
          >
            🌱 Where are you today?
          </h2>

          <p
            style={{
              color: "#666666",
              marginBottom: "18px",
              lineHeight: "26px",
            }}
          >
            Select all that reflect your current situation.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            {relationshipOptions.map((option) => {
              const isSelected = selectedRelationships.includes(option);

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleRelationshipToggle(option)}
                  aria-pressed={isSelected}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "16px",
                    border: isSelected
                      ? `2px solid ${orange}`
                      : "1px solid #E8E3DF",
                    backgroundColor: isSelected ? "#FFF3EB" : "#FFFFFF",
                    color: isSelected ? orange : "#333333",
                    fontSize: "16px",
                    fontWeight: isSelected ? "700" : "500",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    boxShadow: isSelected
                      ? "0 4px 12px rgba(233, 117, 43, 0.12)"
                      : "none",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    <span>{option}</span>

                    {isSelected && (
                      <span
                        style={{
                          color: orange,
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        ✓
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Other */}
        {selectedRelationships.includes("Other") && (
          <div
            style={{
              marginBottom: "32px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Tell us a little more
            </label>

            <input
              type="text"
              value={formData.relationship_status_other || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  relationship_status_other: e.target.value,
                })
              }
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "16px",
                border: "1px solid #E8E3DF",
                boxSizing: "border-box",
                fontSize: "16px",
              }}
            />
          </div>
        )}

        <div
          style={{
            textAlign: "center",
            marginBottom: "24px",
            color: "#666666",
            lineHeight: "28px",
          }}
        >
          Every great connection begins with a conversation.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <button
            type="button"
            onClick={onBack}
            style={{
              padding: "12px 24px",
              borderRadius: "12px",
              border: "1px solid #E8E3DF",
              background: "#FFFFFF",
              color: "#444444",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Back
          </button>

          <button
            type="button"
            onClick={onNext}
            style={{
              padding: "12px 28px",
              borderRadius: "12px",
              border: "none",
              background: orange,
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}