import React from "react";
 
const orange = "#E9752B";
 
export default function RelationshipStep({
formData,
setFormData,
onBack,
onNext,
}) {
const maxCharacters = 200;
 
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
boxShadow:
"0 8px 24px rgba(0,0,0,0.05)",
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
There’s no right answer here.
Share a little about the kind of
connection you're hoping to find.
</p>
 
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
Tell us a little about the kind of
relationship, friendship, or
connection you'd like to build.
</p>
 
<textarea
rows={5}
maxLength={200}
value={
formData.what_i_am_looking_for || ""
}
onChange={(e) =>
setFormData({
...formData,
what_i_am_looking_for:
e.target.value,
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
{
(
formData.what_i_am_looking_for ||
""
).length
}
/{maxCharacters}
</div>
</div>
 
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
marginBottom: "16px",
}}
>
Select the option that best
reflects your current situation.
</p>
 
<select
value={
formData.relationship_status || ""
}
onChange={(e) =>
setFormData({
...formData,
relationship_status:
e.target.value,
})
}
style={{
display: "block",
width: "100%",
padding: "16px",
borderRadius: "16px",
border: "1px solid #E8E3DF",
fontSize: "16px",
backgroundColor: "#FFFFFF",
}}
>
<option value="">
Select Status
</option>
 
<option value="Searching">
Searching
</option>
 
<option value="In a Committed Relationship">
In a Committed Relationship
</option>
 
<option value="Friendship Only">
Friendship Only
</option>
 
<option value="Other">
Other
</option>
</select>
</div>
 
{formData.relationship_status ===
"Other" && (
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
value={
formData.relationship_status_other ||
""
}
onChange={(e) =>
setFormData({
...formData,
relationship_status_other:
e.target.value,
})
}
style={{
width: "100%",
padding: "16px",
borderRadius: "16px",
border: "1px solid #E8E3DF",
boxSizing: "border-box",
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
Every great connection begins with
a conversation.
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
</div>
);
}