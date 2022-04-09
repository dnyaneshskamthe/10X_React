import React from "react";
import employee from './UserInfo';

function Custinfo()
{
    return (
        <div className="customer-info">
            <div><b>Appointment:</b> <span>  { employee.Appointment}</span></div>
            <div> <b>Email:</b> <span>  { employee.email}</span></div>
            <div><b>Phone:</b> <span>  { employee.Phone}</span> </div>
        </div>


    )
}


export default Custinfo;