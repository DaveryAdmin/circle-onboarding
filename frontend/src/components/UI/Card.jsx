import React from "react";
import { theme } from "../../theme/theme";
 
export default function Card({
children,
}) {
return (
<div
style={{
backgroundColor: theme.colors.card,
borderRadius: theme.radius.large,
boxShadow: theme.shadow.card,
padding: "2rem",
}}
>
{children}
</div>
);
}