import React from "react";
import { theme } from "../../theme/theme";
 
export default function SecondaryButton({
children,
onClick,
}) {
return (
<button
onClick={onClick}
style={{
backgroundColor: "#ffffff",
color: theme.colors.primary,
border: `2px solid ${theme.colors.primary}`,
borderRadius: theme.radius.medium,
padding: "14px 24px",
fontWeight: "600",
cursor: "pointer",
}}
>
{children}
</button>
);
}