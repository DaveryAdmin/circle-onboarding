import React from "react";
import { theme } from "../../theme/theme";
 
export default function PrimaryButton({
children,
onClick,
type = "button",
}) {
return (
<button
type={type}
onClick={onClick}
style={{
backgroundColor: theme.colors.primary,
color: "#ffffff",
border: "none",
borderRadius: theme.radius.medium,
padding: "14px 24px",
fontWeight: "600",
cursor: "pointer",
transition: "0.2s ease",
}}
>
{children}
</button>
);
}