import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Fetch() {
  const [newData,setPhotos] = useState("");

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=> res.json())
    .then(data=>setPhotos(data))
    },[])


  return (
    
    <div>{newData && newData.map((data)=>{
      const {userId,id,title,body} = data;
      return(
        <article className='card' key={id}>

          <h1 className='userId'>UserId : {userId} </h1>
          <h3 className='title'><h1 className='title'>Title : </h1> {title}</h3>
          <p className='body'> <h1 className='body'>Body :</h1> {body} </p>

        </article>
      )
      })}</div>
  )
}
