import React from "react";
 
const orange = "#E9752B";
 
export default function SuccessStep({
onViewProfile,
})  {
return (
<div
style={{
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "40px",
backgroundColor: "#FAF8F6",
position: "relative",
overflow: "hidden",
}}
>
{/* Background Accent Shapes */}
 
<div
style={{
position: "absolute",
width: "300px",
height: "300px",
borderRadius: "50%",
background: "rgba(233,117,43,0.05)",
top: "-100px",
left: "-100px",
}}
/>
 
<div
style={{
position: "absolute",
width: "240px",
height: "240px",
borderRadius: "50%",
background: "rgba(233,117,43,0.04)",
bottom: "-80px",
right: "-50px",
}}
/>
 
<div
style={{
maxWidth: "720px",
width: "100%",
backgroundColor: "#FFFFFF",
borderRadius: "28px",
padding: "3.5rem",
textAlign: "center",
border: "1px solid #E8E3DF",
boxShadow:
"0 8px 24px rgba(0,0,0,0.05)",
position: "relative",
zIndex: 2,
}}
>
{/* Success Icon */}
 
<div
style={{
width: "90px",
height: "90px",
borderRadius: "50%",
background: "#FFF6F0",
border: `2px solid ${orange}`,
display: "flex",
alignItems: "center",
justifyContent: "center",
margin: "0 auto 24px auto",
fontSize: "42px",
}}
>
✓
</div>
 
<h1
style={{
margin: "0 0 20px 0",
fontSize: "42px",
lineHeight: "48px",
fontWeight: "700",
 
background:
"linear-gradient(135deg, #E9752B 0%, #F7A76F 100%)",
 
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
}}
>
Welcome to OVER40CONNECT
</h1>
 
<p
style={{
fontSize: "20px",
lineHeight: "32px",
color: "#555555",
marginBottom: "24px",
}}
>
A warm, real community for adults 40+
ready to connect, date, and find where
they truly belong.
</p>
 
<p
style={{
fontSize: "16px",
lineHeight: "30px",
color: "#666666",
maxWidth: "560px",
margin: "0 auto 40px auto",
}}
>
Your profile is ready. Now it's time to
meet people who share your values,
interests, life experience, and desire
for genuine connection.
</p>
 
<button
type="button"
onClick={onViewProfile}
style={{
backgroundColor: orange,
color: "#FFFFFF",
border: "none",
borderRadius: "16px",
padding: "16px 36px",
cursor: "pointer",
fontWeight: "700",
fontSize: "16px",
boxShadow:
"0 8px 24px rgba(233,117,43,0.25)",
}}
>
View My Profile
</button>

</div>
</div>
);
}