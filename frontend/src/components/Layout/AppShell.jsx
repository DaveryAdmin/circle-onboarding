import React, { useState } from "react";

import Navigation from "./Navigation";
import ProfilePage from "../Profile/ProfilePage";
import MemberDirectory from "../Members/MemberDirectory";
import TestLab from "../Admin/TestLab";

export default function AppShell({
  profile,
}) {
  const [activeTab, setActiveTab] =
    useState("profile");

  function renderContent() {
    if (activeTab === "members") {
      return <MemberDirectory />;
    }

    if (activeTab === "testlab") {
      return <TestLab />;
    }

    return (
      <ProfilePage
        profile={profile}
      />
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FAF8F6",
      }}
    >
      <Navigation
        activeTab={activeTab}
        onNavigate={setActiveTab}
      />

      <main>
        {renderContent()}
      </main>
    </div>
  );
}
