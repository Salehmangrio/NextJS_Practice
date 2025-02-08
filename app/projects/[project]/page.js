'use client'

import React from "react"

const Project = ({params} ) => {    
    const data = React.use(params)
    return (
        <div>This is projects of 
            <span className="text-4xl font-serif uppercase text-yellow-300">{data.project}</span></div>
    )
}

export default Project