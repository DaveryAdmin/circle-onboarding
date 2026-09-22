import React from "react";
 
export default function TestLab() {
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
gap: "16px",
marginTop: "30px",
}}
>
<button>
Create Test Member
</button>
 
<button>
Create 10 Test Members
</button>
 
<button>
Reset My Profile
</button>
 
<button>
Delete Test Members
</button>
</div>
</div>
);
}