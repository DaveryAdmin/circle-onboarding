import React from 'react';
 
const Title = ({
children,
gradient = false,
center = false,
size = 'large',
className = '',
}) => {
const sizes = {
small: {
fontSize: '24px',
lineHeight: '30px',
},
 
medium: {
fontSize: '28px',
lineHeight: '34px',
},
 
large: {
fontSize: '32px',
lineHeight: '38px',
},
 
hero: {
fontSize: '40px',
lineHeight: '46px',
},
};
 
const selectedSize = sizes[size] || sizes.large;
 
const style = {
margin: '0 0 12px 0',
fontWeight: 700,
letterSpacing: '-0.02em',
 
color: gradient ? 'transparent' : '#2A2A2A',
 
background: gradient
? 'linear-gradient(135deg, #E9752B 0%, #F7A76F 100%)'
: 'none',
 
WebkitBackgroundClip: gradient ? 'text' : undefined,
WebkitTextFillColor: gradient ? 'transparent' : undefined,
 
textAlign: center ? 'center' : 'left',
 
...selectedSize,
};
 
return (
<h1
className={className}
style={style}
>
{children}
</h1>
);
};
 
