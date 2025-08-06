import React from 'react'

const AnimatedBorder = ({ children, padding }) => {
    return (
        <div className={`animated-border ${padding}`}>
            {children}
        </div>
    );
}

export default AnimatedBorder