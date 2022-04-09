import React from 'react';
import employee from './UserInfo';

const rarrow='>';
function Prodlist()
{
    return (

        <div className='product-list'>
            <div className='checkbox'><input type='checkbox'></input></div>
            <div className='proImage'><img src={employee.proPic}/></div>
            <div className='prod-info'>
                <div className='prodempinfo'>{employee.proInfo}</div>
                <div className='prodempdiscrip'>{employee.proSubInfi}</div>
            </div>
            <div className='rarrow'>
                <spn className='rar'>{rarrow}</spn>
            </div>
            

        </div>
    )
}
export default Prodlist;