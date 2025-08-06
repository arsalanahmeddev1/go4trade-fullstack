import React from 'react'

const Badge = ({ children, className = "" }) => {
    return (
        <div className={`custom-badge transition ${className}`}>
            <span>{children}</span>
        </div>
    )
}

export default Badge
