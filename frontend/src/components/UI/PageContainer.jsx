import React from "react";
import { theme } from "../../theme/theme";
 
export default function PageContainer({
children,
}) {
return (
<div
style={{
minHeight: "100vh",
backgroundColor: theme.colors.background,
padding: "40px",
}}
>
{children}
</div>
);
}