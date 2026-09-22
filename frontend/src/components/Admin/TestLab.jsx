import React, { useState } from "react";
 
export default function TestLab() {
const [messages, setMessages] =
useState([]);
 
function logAction(action) {
setMessages((previous) => [
`${new Date().toLocaleTimeString()} - ${action}`,
...previous,
]);
}
 
return (
<div
style={{
maxWidth: "1000px",
margin: "0 auto",
padding: "2rem",
}}
>
<h1>
🧪 Test Lab
</h1>
 
<p>
Development tools for
creating and managing
test members.
</p>
 
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit, minmax(250px, 1fr))",
gap: "16px",
marginTop: "30px",
marginBottom: "30px",
}}
>
<button
onClick={() =>
logAction(
"Create Test Member clicked"
)
}
className="btn btn-primary"
>
Create Test Member
</button>
 
<button
onClick={() =>
logAction(
"Create 10 Test Members clicked"
)
}
className="btn btn-primary"
>
Create 10 Test Members
</button>
 
<button
onClick={() =>
logAction(
"Reset My Profile clicked"
)
}
className="btn btn-primary"
>
Reset My Profile
</button>
 
<button
onClick={() =>
logAction(
"Delete Test Members clicked"
)
}
className="btn btn-primary"
>
Delete Test Members
</button>
</div>
 
<div
style={{
background: "#FFFFFF",
border: "1px solid #E8E3DF",
borderRadius: "16px",
padding: "24px",
}}
>
<h2>
Activity Log
</h2>
 
{messages.length === 0 ? (
<p>
No actions yet.
</p>
) : (
messages.map(
(message, index) => (
<div
key={index}
style={{
padding:
"10px 0",
borderBottom:
"1px solid #EEE",
}}
>
{message}
</div>
)
)
)}
</div>
</div>
);
}