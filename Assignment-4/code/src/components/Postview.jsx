// import React, { useEffect, useState } from 'react';
// import Post from './Post';
// import Header from './Header';
// const Postview=()=> {
//     const [dt,usedata] = useState([])
//     // console.log(data);
//     // const getData = async() => {
//     //   const response = await fetch('http://localhost:3004/user');
//     //   console.log(response);
//     //   const acutalData = await response.json();
//     const getData=fetch('http://localhost:3004/user');
//     getData.then(res=>res.json()).then(data=>{
//          console.log(data)
//     })
//       usedata(data);
    
    


// useEffect(()=>{
//     getData()
// },[]);

// return (
//     <div className="container">
//         <Header/>
//         {dt.map((ele)=>{ return (
//     <Post 
//         name={ele.name}
//         location={ele.location}
//         likes={ele.likes}
//         description={ele.description}
//         PostImage={ele.PostImage}
//         date={ele.date}
//     />)

//     })}
//     </div>
// );
// }
// export default Postview;
import React from 'react';
// import './Postview.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Post';
import Header from './Header';

const Postview=()=> {
  const [data,usedata] = useState([])
  const getData = async() => {
    let response = await fetch(`http://localhost:3004/user`);
    let acutalData = await response.json();
    usedata(acutalData);
  }
  useEffect(() => {getData()}, []);
  console.log(data);
  return (
    <div className="site-container">
      <Header/>
      {data.map((element , id) => {
        return (
          <Post
            key={id}
            name = {element.name}
            location = {element.location}
            likes = {element.likes}
            description = {element.description}
            PostImage = {element.PostImage}
            date = {element.date}
          />
        )
      })}
    </div>
  );
}
export default Postview;