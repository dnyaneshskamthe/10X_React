import React from 'react';
import employee from './UserInfo';

let dt=new Date();
// console.log(dt.getHours());
// let t=dt.getHours();
// let m=dt.getMinutes();
// let d=dt.getDate();
// let month=dt.getMonth();
// let year=dt.getFullYear();



function Orderinfo()
{
    return (
        <div className='order-info'>
            <div className='order-wrapper'><span className='order'>Status:</span ><span> ⚫ {employee.status}</span></div>
            <div className='order-wrapper'><span className='order'>Door:</span><span>{employee.Door}</span></div>
            <div className='order-wrapper'><span span className='order'>Time:</span><span >{`${dt.getHours()}:${dt.getMinutes()} (${dt.getDate()}:${dt.getMonth()}:${dt.getFullYear()})`}</span></div>
        </div>
    )
}

export default Orderinfo;