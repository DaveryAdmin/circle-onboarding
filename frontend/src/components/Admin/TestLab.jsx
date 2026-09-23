import React, { useState } from "react";
 
import { useApi } from "../../hooks/useApi";
 
const orange = "#E9752B";
 
export default function TestLab() {
const { post } = useApi();
 
const [messages, setMessages] =
useState([]);
 
const [busyAction, setBusyAction] =
useState("");
 
function addMessage(
message,
type = "success"
) {
setMessages((previous) => [
{
id: `${Date.now()}-${Math.random()}`,
message,
type,
time:
new Date().toLocaleTimeString(),
},
...previous,
]);
}
 
async function runAction(
actionName,
path,
successMessage
) {
if (busyAction) {
return;
}
 
setBusyAction(actionName);
 
try {
const result = await post(
path,
{}
);
 
addMessage(
result.message ||
successMessage
);
} catch (error) {
console.error(error);
 
addMessage(
error.message ||
"The action could not be completed.",
"error"
);
} finally {
setBusyAction("");
}
}
 
const buttonStyle = {
minHeight: "54px",
border: "none",
borderRadius: "14px",
padding: "14px 20px",
backgroundColor: orange,
color: "#FFFFFF",
cursor: busyAction
? "not-allowed"
: "pointer",
fontSize: "16px",
fontWeight: "700",
opacity: busyAction
? 0.65
: 1,
};
 
const dangerButtonStyle = {
...buttonStyle,
backgroundColor: "#B8473D",
};
 
return (
<div
style={{
minHeight: "100vh",
backgroundColor: "#FAF8F6",
padding: "2rem",
}}
>
<div
style={{
maxWidth: "1000px",
margin: "0 auto",
}}
>
<div
style={{
backgroundColor: "#FFFFFF",
border: "1px solid #E8E3DF",
borderRadius: "24px",
padding: "32px",
boxShadow:
"0 8px 24px rgba(0,0,0,0.05)",
marginBottom: "24px",
}}
>
<h1
style={{
margin: "0 0 12px 0",
color: orange,
}}
>
🧪 Test Lab
</h1>
 
<p
style={{
margin: 0,
color: "#666666",
lineHeight: "1.7",
}}
>
Development tools for
creating and managing test
member profiles.
</p>
</div>
 
<div
style={{
display: "grid",
gridTemplateColumns:
"repeat(auto-fit, minmax(240px, 1fr))",
gap: "16px",
marginBottom: "24px",
}}
>
<button
type="button"
disabled={Boolean(
busyAction
)}
onClick={() =>
runAction(
"seed",
"/admin/seed-members",
"10 test members created."
)
}
style={buttonStyle}
>
{busyAction === "seed"
? "Creating Members..."
: "Create 10 Test Members"}
</button>
 
<button
type="button"
disabled={Boolean(
busyAction
)}
onClick={() =>
runAction(
"delete",
"/admin/delete-test-members",
"Test members deleted."
)
}
style={
dangerButtonStyle
}
>
{busyAction === "delete"
? "Deleting Members..."
: "Delete Test Members"}
</button>
 
<button
type="button"
disabled={Boolean(
busyAction
)}
onClick={() =>
runAction(
"reset",
"/admin/reset-my-profile",
"Your profile was reset."
)
}
style={
dangerButtonStyle
}
>
{busyAction === "reset"
? "Resetting Profile..."
: "Reset My Profile"}
</button>
</div>
 
<div
style={{
backgroundColor: "#FFFFFF",
border: "1px solid #E8E3DF",
borderRadius: "20px",
padding: "24px",
}}
>
<h2
style={{
marginTop: 0,
}}
>
Activity Log
</h2>
 
{messages.length === 0 ? (
<p
style={{
color: "#777777",
}}
>
No actions yet.
</p>
) : (
messages.map((entry) => (
<div
key={entry.id}
style={{
padding: "12px 0",
borderBottom:
"1px solid #EEEEEE",
color:
entry.type ===
"error"
? "#B8473D"
: "#2E6B45",
}}
>
<strong>
{entry.time}
</strong>
{" - "}
{entry.message}
</div>
))
)}
</div>
 
<p
style={{
marginTop: "20px",
color: "#777777",
fontSize: "14px",
lineHeight: "1.6",
}}
>
Generated test profiles use
dedicated test IDs. Deleting
test members will not delete
your own profile.
</p>
</div>
</div>
);
}