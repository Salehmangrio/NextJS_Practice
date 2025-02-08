import React from 'react'

async function fetchData() {
    let data = await fetch('http://localhost:3000/api/users');
    data = await data.json();
    return data
}
const ServerFectch = async () => {
    const products = await fetchData()
    return (
        <div>
            <h1>Server Page</h1>
            <ul>
                {products?.results?.map(product => 
                    <li key={product.id} className='border my-2 mx-3 px-6 py-2 bg-black text-white rounded'>
                        <h1>Name: {product.name} </h1>
                        <h2>Degree: {product.degree}</h2>
                        <h3>Institute: {product.institute}</h3>
                        <h4>Section: {product.section}</h4>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ServerFectch