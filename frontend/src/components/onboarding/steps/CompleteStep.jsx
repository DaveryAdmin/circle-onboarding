import React from "react";
 
const orange = "#E9752B";
 
export default function CompleteStep({
formData,
onBack,
onComplete,
}) {
return (
<div
style={{
padding: "2rem",
maxWidth: "800px",
margin: "0 auto",
}}
>
<div style={{ marginBottom: "2rem" }}>
<div
style={{
display: "flex",
justifyContent: "space-between",
marginBottom: "8px",
}}
>
<span>Profile Progress</span>
<span>100%</span>
</div>
 
<div
style={{
width: "100%",
height: "10px",
backgroundColor: "#eeeeee",
borderRadius: "999px",
}}
>
<div
style={{
width: "100%",
height: "100%",
backgroundColor: orange,
borderRadius: "999px",
}}
/>
</div>
</div>
 
<h1>Profile Complete</h1>
 
<p>
Please review your information before
submitting your profile.
</p>
 
<div
style={{
border: "1px solid #dddddd",
borderRadius: "10px",
padding: "1.5rem",
marginTop: "2rem",
}}
>
<h2>Identity</h2>
 
<p>
<strong>Name:</strong>{" "}
{formData.full_name}
</p>
 
<p>
<strong>Email:</strong>{" "}
{formData.email}
</p>
 
<p>
<strong>Timezone:</strong>{" "}
{formData.timezone}
</p>
 
<p>
<strong>Username:</strong>{" "}
{formData.username}
</p>
 
<p>
<strong>Age:</strong>{" "}
{formData.age}
</p>
 
<p>
<strong>Location:</strong>{" "}
{formData.location1}
</p>
 
<h2>Personality</h2>
 
<p>
<strong>Descriptors:</strong>{" "}
{(formData.what_describes_you_best || []).join(", ")}
</p>
 
<p>
<strong>Interests:</strong>{" "}
{(formData.interests_and_passions || []).join(", ")}
</p>
 
<h2>Relationship</h2>
 
<p>
<strong>Looking For:</strong>{" "}
{formData.what_i_am_looking_for}
</p>
 
<p>
<strong>Status:</strong>{" "}
{formData.relationship_status}
</p>
 
{formData.relationship_status_other && (
<p>
<strong>Additional Details:</strong>{" "}
{formData.relationship_status_other}
</p>
)}
 
<h2>Community Role</h2>
 
<p>
{(formData.how_do_you_see_yourself_here || []).join(", ")}
</p>
 
<h2>Reflection</h2>
 
<p>
{formData.write_a_few_words_about_your_journey}
</p>
 
<h2>Best Ways To Connect</h2>
 
<p>
{(formData.best_ways_to_connect || []).join(", ")}
</p>
</div>
 
<div
style={{
marginTop: "2rem",
display: "flex",
justifyContent: "space-between",
}}
>
<button onClick={onBack}>
Back
</button>
 
<button
onClick={onComplete}
style={{
backgroundColor: orange,
color: "#ffffff",
border: "none",
padding: "12px 20px",
borderRadius: "8px",
cursor: "pointer",
fontWeight: "600",
}}
>
Complete Onboarding
</button>
</div>
</div>
);
}