import React  from 'react';


import './App.css';

const mystyle={
  width:'60%',
  height:'60%',
  borderRadius:'10px',
  marginLeft:'20%',
  marginTop: '5%'
}

function App(props) {
  const {employee}=props;
  
 
    
return(
  <div className="container">
  {/* Start your React code here */}
  <img src={employee.profileImg} style={mystyle} alt="Profile_image"/>
    <div className='info-container'>
      <h1>{employee.name}</h1>
      <div className='info'>
        <p className='general'>Location</p>
        <h3 className='specific'>{employee.location}</h3>
    </div>
      <div className='info'>
        <p className='general'>Blood Group</p>
        <h3 className='specific'>{employee.bloodGroup}</h3>
    </div>
    <div className='info'>
      <p className='general'>Age</p>
      <h3 className='specific'>{employee.age}</h3>
    </div>
  </div>
    
</div>
)
}



export default App;
