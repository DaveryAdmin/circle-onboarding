import React from 'react';
import { CheckCircle } from 'lucide-react';
 
const Tile = ({
children,
selected = false,
onClick,
className = '',
style = {},
}) => {
const tileStyle = {
position: 'relative',
cursor: 'pointer',
 
padding: '24px',
 
borderRadius: '20px',
 
backgroundColor: selected
? '#FFF6F0'
: '#FFFFFF',
 
border: selected
? '2px solid #E9752B'
: '1px solid #E8E3DF',
 
boxShadow: selected
? `
0 0 0 4px rgba(233,117,43,0.08),
0 8px 24px rgba(233,117,43,0.14)
`
: '0 2px 8px rgba(0,0,0,0.03)',
 
transition: `
transform .25s ease,
box-shadow .25s ease,
border-color .25s ease,
background-color .25s ease
`,
 
transform: selected
? 'translateY(-4px)'
: 'translateY(0)',
 
minHeight: '72px',
 
display: 'flex',
alignItems: 'center',
 
...style,
};
 
const handleMouseEnter = (e) => {
if (!selected) {
e.currentTarget.style.transform = 'translateY(-2px)';
}
};
 
const handleMouseLeave = (e) => {
if (!selected) {
e.currentTarget.style.transform = 'translateY(0)';
}
};
 
return (
<div
className={className}
style={tileStyle}
onClick={onClick}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
{selected && (
<div
style={{
position: 'absolute',
top: '12px',
right: '12px',
}}
>
<CheckCircle
size={24}
color="#E9752B"
strokeWidth={2.5}
/>
</div>
)}
 
{children}
</div>
);
};
 
export default Tile;