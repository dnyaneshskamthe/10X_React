import React from "react";
import employee from "./UserInfo";


const arrow='<';
function Header()
{
    return (

        <div className="header">
            
                <div className="arrow">{arrow}</div>
                <div className="empinfo">
                    <span className="empname">{employee.name}</span>
                    <span className="empid">{employee.id}</span>
                </div>
            
                <div className="print">
                    <button>Print</button>
                </div>
            

        </div>




    )
}

export default Header;