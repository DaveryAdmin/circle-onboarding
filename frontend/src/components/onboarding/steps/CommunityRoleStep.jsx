import React from "react";
 
const roles = [
{
name: "Learner",
icon: "📚",
description: "Always curious and eager to grow.",
},
{
name: "Contributor",
icon: "✨",
description: "Enjoys sharing ideas and helping others.",
},
{
name: "Explorer",
icon: "🧭",
description: "Open to new experiences and connections.",
},
{
name: "Volunteer",
icon: "🤝",
description: "Seeks meaningful ways to support others.",
},
];
 
const orange = "#E9752B";
 
export default function CommunityRoleStep({
formData,
setFormData,
onBack,
onNext,
}) {
const selectedRoles =
formData.how_do_you_see_yourself_here || [];
 
function toggleRole(role) {
let updatedRoles;
 
if (selectedRoles.includes(role)) {
updatedRoles = selectedRoles.filter(
(item) => item !== role
);
} else {
updatedRoles = [
...selectedRoles,
role,
];
}
 
setFormData({
...formData,
how_do_you_see_yourself_here:
updatedRoles,
});
}
 
function cardStyle(isSelected) {
return {
position: "relative",
 
padding: "24px",
 
borderRadius: "24px",
 
backgroundColor: isSelected
? "#FFF6F0"
: "#FFFFFF",
 
border: isSelected
? `2px solid ${orange}`
: "1px solid #E8E3DF",
 
boxShadow: isSelected
? `
0 0 0 4px rgba(233,117,43,0.08),
0 10px 24px rgba(233,117,43,0.16)
`
: "0 4px 12px rgba(0,0,0,0.04)",
 
transform: isSelected
? "translateY(-4px)"
: "translateY(0)",
 
transition: "all 0.25s ease",
 
cursor: "pointer",
 
textAlign: "center",
 
minHeight: "180px",
 
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
};
}
 
const progress = 67;
 
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
marginBottom: "2rem",
}}
>
<div
style={{
display: "flex",
justifyContent: "space-between",
marginBottom: "8px",
}}
>
<span>Profile Progress</span>
<span>{progress}%</span>
</div>
 
<div
style={{
width: "100%",
height: "10px",
backgroundColor: "#eeeeee",
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
}}
/>
</div>
</div>
 
<h1
style={{
marginBottom: "8px",
}}
>
Community Role
</h1>
 
<p
style={{
color: "#666666",
marginBottom: "24px",
}}
>
How do you naturally show up in a community?
</p>
 
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit, minmax(220px, 1fr))",
gap: "16px",
marginBottom: "32px",
}}
>
{roles.map((role) => {
const isSelected =
selectedRoles.includes(role.name);
 
return (
<button
key={role.name}
type="button"
onClick={() =>
toggleRole(role.name)
}
style={cardStyle(isSelected)}
>
{isSelected && (
<div
style={{
position: "absolute",
top: "12px",
right: "12px",
color: orange,
fontWeight: "700",
fontSize: "18px",
}}
>
✓
</div>
)}
 
<div
style={{
fontSize: "40px",
marginBottom: "12px",
}}
>
{role.icon}
</div>
 
<div
style={{
fontSize: "18px",
fontWeight: "700",
color: "#2A2A2A",
marginBottom: "8px",
}}
>
{role.name}
</div>
 
<div
style={{
fontSize: "14px",
color: "#666666",
lineHeight: "1.5",
}}
>
{role.description}
</div>
</button>
);
})}
</div>
 
<div
style={{
display: "flex",
justifyContent: "space-between",
}}
>
<button onClick={onBack}>
Back
</button>
 
<button onClick={onNext}>
Continue
</button>
</div>
</div>
);
}