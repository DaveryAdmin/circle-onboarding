import React from "react";
 
const orange = "#E9752B";
 
export default function IdentityStep({
formData,
setFormData,
onNext,
}) {
function updateField(field, value) {
const updatedData = {
...formData,
};
 
updatedData[field] = value;
 
setFormData(updatedData);
}
 
const inputStyle = {
width: "100%",
padding: "16px",
marginTop: "8px",
border: "1px solid #E8E3DF",
borderRadius: "16px",
backgroundColor: "#FFFFFF",
fontSize: "16px",
boxSizing: "border-box",
};
 
const labelStyle = {
display: "block",
fontWeight: "600",
color: "#2A2A2A",
marginBottom: "4px",
};
 
return (
<div
style={{
padding: "2rem",
maxWidth: "720px",
margin: "0 auto",
}}
>
<div
style={{
backgroundColor: "#FFFFFF",
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
Tell us about yourself
</h1>
 
<p
style={{
color: "#666666",
fontSize: "16px",
lineHeight: "28px",
marginBottom: "32px",
}}
>
This helps us create your profile and
introduce you to the right people and
communities.
</p>
 
<div style={{ marginBottom: "20px" }}>
<label style={labelStyle}>
Full Name *
</label>
 
<input
type="text"
value={formData.full_name || ""}
onChange={(e) =>
updateField(
"full_name",
e.target.value
)
}
style={inputStyle}
/>
</div>
 
<div style={{ marginBottom: "20px" }}>
<label style={labelStyle}>
Email *
</label>
 
<input
type="email"
value={formData.email || ""}
onChange={(e) =>
updateField(
"email",
e.target.value
)
}
style={inputStyle}
/>
</div>
 
<div style={{ marginBottom: "20px" }}>
<label style={labelStyle}>
Timezone *
</label>
 
<input
type="text"
value={formData.timezone || ""}
onChange={(e) =>
updateField(
"timezone",
e.target.value
)
}
style={inputStyle}
/>
</div>
 
<div style={{ marginBottom: "20px" }}>
<label style={labelStyle}>
Username *
</label>
 
<input
type="text"
value={formData.username || ""}
onChange={(e) =>
updateField(
"username",
e.target.value
)
}
style={inputStyle}
/>
</div>
 
<div style={{ marginBottom: "20px" }}>
<label style={labelStyle}>
Age *
</label>
 
<input
type="number"
value={formData.age || ""}
onChange={(e) =>
updateField(
"age",
e.target.value
)
}
style={inputStyle}
/>
</div>
 
<div style={{ marginBottom: "20px" }}>
<label style={labelStyle}>
Location *
</label>
 
<select
value={formData.location1 || ""}
onChange={(e) =>
updateField(
"location1",
e.target.value
)
}
style={inputStyle}
>
<option value="">
Select a location
</option>
 
<option value="Gatineau">
Gatineau
</option>
 
<option value="North of Gatineau">
North of Gatineau
</option>
 
<option value="Ottawa South">
Ottawa South
</option>
 
<option value="Ottawa East">
Ottawa East
</option>
 
<option value="Ottawa West">
Ottawa West
</option>
 
<option value="Centretown">
Centretown
</option>
 
<option value="South of Ottawa">
South of Ottawa
</option>
 
<option value="East of Ottawa">
East of Ottawa
</option>
 
<option value="West of Ottawa">
West of Ottawa
</option>
</select>
</div>
 
<div style={{ marginBottom: "32px" }}>
<label style={labelStyle}>
Website
</label>
 
<input
type="url"
value={formData.website || ""}
onChange={(e) =>
updateField(
"website",
e.target.value
)
}
style={inputStyle}
/>
</div>
 
<div
style={{
display: "flex",
justifyContent: "flex-end",
}}
>
<button
onClick={onNext}
style={{
backgroundColor: orange,
color: "#FFFFFF",
border: "none",
borderRadius: "16px",
padding: "16px 36px",
fontWeight: "700",
cursor: "pointer",
boxShadow:
"0 8px 24px rgba(233,117,43,0.25)",
}}
>
Continue
</button>
</div>
</div>
</div>
);
}