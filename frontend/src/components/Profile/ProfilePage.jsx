import React, { useState } from "react";
 
import MemberDirectory from "../Members/MemberDirectory";
 
const orange = "#E9752B";
 
export default function ProfilePage({
profile,
}) {
const [showDirectory, setShowDirectory] =
useState(false);
 
const initials =
profile.full_name
?.split(" ")
.map((word) => word[0])
.join("")
.substring(0, 2)
.toUpperCase() || "?";
 
if (showDirectory) {
return (
<div>
<div
style={{
maxWidth: "1200px",
margin: "0 auto",
padding: "24px",
}}
>
<button
onClick={() =>
setShowDirectory(false)
}
style={{
background: orange,
color: "#ffffff",
border: "none",
padding: "12px 20px",
borderRadius: "8px",
cursor: "pointer",
fontWeight: "600",
}}
>
← Back To My Profile
</button>
</div>
 
<MemberDirectory />
</div>
);
}
 
return (
<div
style={{
maxWidth: "900px",
margin: "0 auto",
padding: "2rem",
}}
>
<div
style={{
background: "#FFFFFF",
borderRadius: "28px",
padding: "32px",
border: "1px solid #E8E3DF",
boxShadow:
"0 8px 24px rgba(0,0,0,0.05)",
marginBottom: "24px",
}}
>
<div
style={{
display: "flex",
alignItems: "center",
gap: "24px",
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
<h1
style={{
margin: "0 0 8px 0",
}}
>
{profile.full_name}
</h1>
 
<div
style={{
color: "#666",
}}
>
@{profile.username}
</div>
 
<div
style={{
color: "#666",
}}
>
{profile.location1}
</div>
 
<div
style={{
marginTop: "18px",
}}
>
<button
onClick={() =>
setShowDirectory(true)
}
style={{
background: orange,
color: "#ffffff",
border: "none",
padding: "12px 20px",
borderRadius: "8px",
cursor: "pointer",
fontWeight: "600",
}}
>
Browse Members
</button>
</div>
</div>
</div>
</div>
 
{profile.write_a_few_words_about_your_journey && (
<Section
title="✨ This Chapter"
content={
profile.write_a_few_words_about_your_journey
}
/>
)}
 
{profile.what_i_am_looking_for && (
<Section
title="❤️ Looking For"
content={
profile.what_i_am_looking_for
}
/>
)}
 
<TagSection
title="🌿 Personality"
items={
profile.what_describes_you_best ||
[]
}
/>
 
<TagSection
title="🎨 Interests"
items={
profile.interests_and_passions ||
[]
}
/>
 
<TagSection
title="🤝 Community Role"
items={
profile.how_do_you_see_yourself_here ||
[]
}
/>
 
<TagSection
title="💬 Ways To Connect"
items={
profile.best_ways_to_connect ||
[]
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
background: "#FFFFFF",
borderRadius: "20px",
padding: "24px",
marginBottom: "20px",
border: "1px solid #E8E3DF",
}}
>
<h2>{title}</h2>
 
<p
style={{
lineHeight: "1.8",
color: "#555",
}}
>
{content}
</p>
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
background: "#FFFFFF",
borderRadius: "20px",
padding: "24px",
marginBottom: "20px",
border: "1px solid #E8E3DF",
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
border:
"1px solid #F3E3D7",
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