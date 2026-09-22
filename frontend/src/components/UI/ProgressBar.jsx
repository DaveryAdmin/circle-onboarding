import React from "react";
import { theme } from "../../theme/theme";
 
export default function ProgressBar({
progress,
}) {
return (
<div style={{ marginBottom: "2rem" }}>
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
}}
>
<div
style={{
width: `${progress}%`,
height: "100%",
backgroundColor:
theme.colors.primary,
borderRadius: "999px",
}}
/>
</div>
</div>
);
}