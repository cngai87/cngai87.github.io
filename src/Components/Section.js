import React from 'react'

export default function Section({ title }) {
    return (
        <>
            <h3 className="headerColor">{title}</h3>
            <div className="divider headerColor mb-4"></div>
        </>
    )
}