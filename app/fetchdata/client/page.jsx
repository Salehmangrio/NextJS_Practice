'use client'
import React,{useState,useEffect} from 'react';

const ClientComp = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            let data=await fetch('https://jsonplaceholder.typicode.com/posts');
            data=await data.json();
            setPosts(data);   
        }
        fetchData()
    },[])

  return (
    <div>
        <ul>
            {posts?.map(p=>
                <li key={p.id}>{p.title}</li>
            )}
        </ul>
    </div>
  )
}

export default ClientComp