'use client'
import { redirect } from 'next/navigation'
import React from 'react'

const Id = ({ params }) => {
    
    
    const data = React.use(params)
    if (data.id == 4) {
        redirect('/about')
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <h1 className='text-7xl font-extrabold font-serif text-yellow-300'>{data.id}</h1>
        </div>
    )
}

export default Id