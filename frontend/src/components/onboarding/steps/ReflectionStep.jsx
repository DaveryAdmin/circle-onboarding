import React from "react";
 
const orange = "#E9752B";
 
const connectionOptions = [
"Direct Message",
"Coffee Meetups",
"Group Events",
"Video Calls",
"Texting",
"WhatsApp",
"Phone Calls",
];
 
export default function ReflectionStep({
formData,
setFormData,
onBack,
onNext,
}) {
const selectedConnections =
formData.best_ways_to_connect || [];
 
function toggleConnection(option) {
let updatedConnections;
 
if (selectedConnections.includes(option)) {
updatedConnections =
selectedConnections.filter(
(item) => item !== option
);
} else {
updatedConnections = [
...selectedConnections,
option,
];
}
 
setFormData({
...formData,
best_ways_to_connect:
updatedConnections,
});
}
 
function tileStyle(selected) {
return {
padding: "20px",
 
borderRadius: "20px",
 
border: selected
? `2px solid ${orange}`
: "1px solid #E8E3DF",
 
backgroundColor: selected
? "#FFF6F0"
: "#FFFFFF",
 
color: "#333333",
 
cursor: "pointer",
 
fontWeight: "600",
 
textAlign: "center",
 
transition: "all .25s ease",
 
transform: selected
? "translateY(-4px)"
: "translateY(0)",
 
boxShadow: selected
? `
0 0 0 4px rgba(233,117,43,0.08),
0 8px 24px rgba(233,117,43,0.14)
`
: "0 4px 12px rgba(0,0,0,0.04)",
};
}
 
const progress = 83;
 
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
Take a moment to reflect
</h1>
 
<p
style={{
color: "#666666",
fontSize: "16px",
lineHeight: "28px",
marginBottom: "32px",
}}
>
How would you describe this chapter
of your life right now?
</p>
 
<div
style={{
marginBottom: "32px",
}}
>
<label
style={{
display: "block",
fontWeight: "600",
marginBottom: "8px",
}}
>
A Few Words About Yourself
</label>
 
<p
style={{
color: "#666666",
marginBottom: "12px",
}}
>
Example: "I'm ready to embrace
change."
</p>
 
<textarea
rows={5}
maxLength={100}
value={
formData.write_a_few_words_about_your_journey ||
""
}
onChange={(e) =>
setFormData({
...formData,
write_a_few_words_about_your_journey:
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
formData.write_a_few_words_about_your_journey ||
""
).length
}
/100
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
}}
>
Best Ways To Connect
</h2>
 
<p
style={{
color: "#666666",
marginBottom: "16px",
}}
>
Select all that apply.
</p>
 
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit, minmax(180px, 1fr))",
gap: "12px",
}}
>
{connectionOptions.map(
(option) => {
const isSelected =
selectedConnections.includes(
option
);
 
return (
<button
key={option}
type="button"
onClick={() =>
toggleConnection(
option
)
}
style={tileStyle(
isSelected
)}
>
{isSelected
? "✓ "
: ""}
{option}
</button>
);
}
)}
</div>
</div>
 
<div
style={{
display: "flex",
justifyContent:
"space-between",
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