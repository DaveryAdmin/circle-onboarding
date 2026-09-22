import React from "react";
 
const orange = "#E9752B";
 
export default function WelcomeStep({
onNext,
}) {
return (
<div
style={{
position: "relative",
minHeight: "70vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
overflow: "hidden",
padding: "2rem",
}}
>
{/* Floating Background Shapes */}
 
<div
style={{
position: "absolute",
width: "280px",
height: "280px",
borderRadius: "50%",
background: "rgba(233,117,43,0.06)",
top: "-80px",
left: "-80px",
animation: "floatOne 22s ease-in-out infinite",
}}
/>
 
<div
style={{
position: "absolute",
width: "220px",
height: "220px",
borderRadius: "50%",
background: "rgba(233,117,43,0.04)",
bottom: "-60px",
right: "-40px",
animation: "floatTwo 18s ease-in-out infinite",
}}
/>
 
<div
style={{
position: "absolute",
width: "140px",
height: "140px",
borderRadius: "50%",
background: "rgba(233,117,43,0.05)",
top: "20%",
right: "10%",
animation: "floatThree 20s ease-in-out infinite",
}}
/>
 
<div
style={{
position: "relative",
maxWidth: "640px",
textAlign: "center",
zIndex: 2,
}}
>
<h1
style={{
marginBottom: "24px",
fontSize: "48px",
lineHeight: "54px",
fontWeight: "700",
letterSpacing: "-0.03em",
 
background:
"linear-gradient(135deg, #E9752B 0%, #F7A76F 100%)",
 
WebkitBackgroundClip: "text",
WebkitTextFillColor: "transparent",
}}
>
OVER40CONNECT
</h1>
 
<p
style={{
fontSize: "20px",
lineHeight: "32px",
color: "#555555",
marginBottom: "40px",
}}
>
A warm, real community for adults 40+
ready to connect, date, and find where
they truly belong.
</p>
 
<button
onClick={onNext}
style={{
backgroundColor: orange,
color: "#FFFFFF",
border: "none",
borderRadius: "18px",
padding: "16px 36px",
fontSize: "16px",
fontWeight: "600",
cursor: "pointer",
 
boxShadow:
"0 8px 24px rgba(233,117,43,0.25)",
 
transition: "all 0.25s ease",
}}
>
Get Started
</button>
</div>
 
<style>
{`
@keyframes floatOne {
0% { transform: translate(0px,0px); }
50% { transform: translate(20px,-15px); }
100% { transform: translate(0px,0px); }
}
 
@keyframes floatTwo {
0% { transform: translate(0px,0px); }
50% { transform: translate(-20px,12px); }
100% { transform: translate(0px,0px); }
}
 
@keyframes floatThree {
0% { transform: translateY(0px); }
50% { transform: translateY(-16px); }
100% { transform: translateY(0px); }
}
`}
</style>
</div>
);
}