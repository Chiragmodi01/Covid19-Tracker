import React, { useEffect } from 'react'
import { useState } from 'react';
import './Statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise);                                      //it will automatically put the value inside data
    }

    useEffect(() => {
        getCovidData();                                                     //funtion will run on page load
    }, [])

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');                 //getting current date uing date api (January is 0!)
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    function myClock() {         
      setTimeout(function() {   
        const d = new Date();
        const n = d.toLocaleTimeString();                                   //getting current time and updating it every second
        document.getElementById("clock").innerHTML = n; 
        myClock();             
      }, 1000)
    }
    myClock();   

    return (
        <div>
            <header>
            <div className="clock">
                <h2>
                📅  {today}
                </h2>
                <h2>
                🕒 <span id="clock"></span>
                </h2>
            </div>
            <div>
            <h1>INDIA Covid-19 Dashboard</h1>
            </div>
            </header>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th> State </th>
                            <th> Confirmed </th>
                            <th> Recovered </th>
                            <th> Deaths </th>
                            <th> Active </th>
                            <th> Last Updated </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((curElem, ind) => {
                                return (
                                    //fetching data statewize

                                    <tr key={ind} >
                                        <th className="state"> {curElem.state} </th>
                                        <td className="number confirmed"> {curElem.confirmed} </td>
                                        <td className="number recovered"> {curElem.recovered} </td>
                                        <td className="number deaths"> {curElem.deaths} </td>
                                        <td className="number active"> {curElem.active} </td>
                                        <td className="number updates"> {curElem.lastupdatedtime} </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Statewise
