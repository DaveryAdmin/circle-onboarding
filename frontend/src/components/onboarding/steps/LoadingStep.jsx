import React from "react";
import { theme } from "../../../theme/theme";
 
export default function LoadingStep() {
return (
<div
style={{
minHeight: "100vh",
backgroundColor: theme.colors.background,
display: "flex",
justifyContent: "center",
alignItems: "center",
}}
>
<div
style={{
textAlign: "center",
backgroundColor: theme.colors.card,
padding: "3rem",
borderRadius: theme.radius.large,
boxShadow: theme.shadow.card,
}}
>
<div
style={{
fontSize: "4rem",
marginBottom: "1rem",
}}
>
⏳
</div>
 
<h1
style={{
color: theme.colors.primary,
}}
>
Saving Your Profile
</h1>
 
<p>
Please wait while we finalize your
onboarding experience...
</p>
</div>
</div>
);
}
``