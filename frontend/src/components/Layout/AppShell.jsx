import React, { useState } from "react";
 
import ProfilePage from "../Profile/ProfilePage";
import MemberDirectory from "../Members/MemberDirectory";
import TestLab from "../Admin/TestLab";
 
const orange = "#E9752B";
 
export default function AppShell({
profile,
}) {
const [activeTab, setActiveTab] =
useState("profile");
 
return (
<div>
<div
style={{
background: "#FFFFFF",
borderBottom:
"1px solid #E8E3DF",
padding: "16px 32px",
display: "flex",
alignItems: "center",
gap: "16px",
}}
>
<div
style={{
fontWeight: "700",
fontSize: "20px",
color: orange,
marginRight: "24px",
}}
>
OVER40CONNECT
</div>
 
<button
onClick={() =>
setActiveTab("profile")
}
>
🏠 My Profile
</button>
 
<button
onClick={() =>
setActiveTab("members")
}
>
👥 Members
</button>
 
<button
onClick={() =>
setActiveTab("test")
}
>
🧪 Test Lab
</button>
</div>
 
{activeTab === "profile" && (
<ProfilePage
profile={profile}
/>
)}
 
{activeTab === "members" && (
<MemberDirectory />
)}
 
{activeTab === "test" && (
<TestLab />
)}
</div>
);
}