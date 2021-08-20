import './Header.css';
import React from 'react'
import { useState } from 'react';

//getting current date uing date api (January is 0!)
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


//getting current time and updating it every second
function myClock() {         
  setTimeout(function() {   
    const d = new Date();
    const n = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = n; 
    myClock();             
  }, 1000)
}
myClock();  


function Header() {
    
const [date, setDate] = useState(null);

    return (
        <header>
            <div className="clock">
              <img src="./clock.svg" alt="clock-img" className="clock-img" />
               <div className="time-wrapper">
                  <h2 className="currdate">{today}</h2>
                  <h2>
                  <span id="clock" className="currtime"></span>
                  </h2>
                </div>
            </div>
            <div className="calendar">
                <label title="⚠️ Pardon, I'm not working" className=""><input date={date} onChange={date => setDate(date)} type="date" name="calandar" className="input-calendar" /></label> 
            </div>
            <div className="title-container">
            <h1 className="title">INDIA C<span className="span-img">
              <img src="./corona.svg" alt="corona-img" className="corona-img" />
              </span>vid-19 Dashboard</h1>
            </div>
            </header>
    )
}

export default Header
